import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-1/2 w-96 h-96 bg-brand-gradient-start/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-brand-gradient-end/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Erhalte automatisch <span className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-transparent bg-clip-text">alle Fotos von deinen Freunden</span>, auf denen du bist
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Nie wieder nach Bildern fragen. Unsere App erkennt dich automatisch und teilt Fotos, auf denen du zu sehen bist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => handleDownloadClick('app_store')}
                className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end hover:opacity-90 transition-opacity text-white px-8 py-6 h-auto text-lg"
              >
                <Apple className="mr-2 h-5 w-5" /> Download on the App Store
              </Button>
              <Button 
                onClick={() => handleDownloadClick('play_store')}
                variant="outline" 
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 px-8 py-6 h-auto text-lg"
              >
                <Play className="mr-2 h-5 w-5" /> Get it on Google Play
              </Button>
            </div>
          </div>
          
        </div>
      </div>

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
    </section>
  );
};

export default HeroSection;
