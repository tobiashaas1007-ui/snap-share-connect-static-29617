import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

interface HeroSectionProps {
  onDownloadClick?: (store: 'app_store' | 'play_store') => void;
}

const HeroSection = ({ onDownloadClick }: HeroSectionProps) => {

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
              Bekomme endlich <span className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-transparent bg-clip-text">alle Fotos, auf denen du bist</span> – automatisch.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Nie wieder nach Bildern fragen. SnapShare erkennt dich auf Fotos deiner Freunde und schickt sie dir direkt – privat, automatisch und ohne Aufwand.
            </p>
            
            {onDownloadClick && (
              <>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                
                <p className="text-sm text-gray-500 mt-6">
                  Erhältlich für iOS und Android.
                </p>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
