import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

interface FooterCTAProps {
  onDownloadClick: (store: 'app_store' | 'play_store') => void;
}

const FooterCTA = ({ onDownloadClick }: FooterCTAProps) => {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nie wieder Fotos verpassen. SnapShare erkennt dich automatisch – und schickt dir alles, was zählt.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button 
              onClick={() => onDownloadClick('app_store')}
              className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end hover:opacity-90 transition-opacity text-white px-8 py-6 h-auto text-lg"
            >
              <Apple className="mr-2 h-5 w-5" /> Download on the App Store
            </Button>
            <Button 
              onClick={() => onDownloadClick('play_store')}
              variant="outline" 
              className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 px-8 py-6 h-auto text-lg"
            >
              <Play className="mr-2 h-5 w-5" /> Get it on Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
