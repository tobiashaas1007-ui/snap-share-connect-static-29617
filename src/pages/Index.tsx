import React, { useState } from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ComparisonSection from "../components/ComparisonSection";
import EmotionalSection from "../components/EmotionalSection";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";
import { useAnalytics } from "@/hooks/useAnalytics";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<'app_store' | 'play_store'>('app_store');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackDownloadClick, trackButtonClick, joinWaitlist } = useAnalytics();
  const { toast } = useToast();

  const handleDownloadClick = (store: 'app_store' | 'play_store') => {
    trackDownloadClick(store);
    trackButtonClick(`download_${store}`, { store_type: store });
    setSelectedStore(store);
    setDialogOpen(true);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Ungültige E-Mail",
        description: "Bitte gib eine gültige E-Mail-Adresse ein.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    trackButtonClick('waitlist_submit', { email, source: selectedStore });
    const result = await joinWaitlist(email, selectedStore);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Erfolgreich eingetragen!",
        description: "Wir benachrichtigen dich, sobald neue Plätze verfügbar sind.",
      });
      setEmail('');
      setDialogOpen(false);
    } else {
      toast({
        title: "Fehler",
        description: result.error?.includes('duplicate') 
          ? "Diese E-Mail ist bereits registriert." 
          : "Ein Fehler ist aufgetreten. Bitte versuche es erneut.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection onDownloadClick={handleDownloadClick} />
        <FeaturesSection />
        <ComparisonSection />
        <EmotionalSection onDownloadClick={handleDownloadClick} />
        <FooterCTA onDownloadClick={handleDownloadClick} />
      </main>
      <Footer />

      {/* Fake Door Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Werde Teil der Warteliste</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Aktuell ist die Nutzeranzahl unserer App begrenzt, um die bestmögliche Erfahrung zu garantieren.
              Trage dich jetzt ein, um informiert zu werden, sobald neue Plätze frei werden.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleWaitlistSubmit} className="space-y-4 pt-4">
            <Input
              type="email"
              placeholder="deine@email.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end hover:opacity-90 transition-opacity text-white"
            >
              {isSubmitting ? 'Wird eingetragen...' : 'Benachrichtige mich'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
