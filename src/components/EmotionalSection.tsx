import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

interface EmotionalSectionProps {
  onDownloadClick: (store: 'app_store' | 'play_store') => void;
}

const EmotionalSection = ({ onDownloadClick }: EmotionalSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-gradient-start/10 to-brand-gradient-end/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Genieße den Moment – SnapShare kümmert sich um den Rest.
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Egal ob Festival, Geburtstag oder Urlaub – SnapShare sorgt dafür, dass du alle Fotos bekommst, 
            auf denen du bist. Automatisch. Ohne Nachfragen. Ohne Chaos.<br />
            Deine Erinnerungen gehören dir – und du hast sie endlich alle an einem Ort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          
          <p className="text-base text-gray-700 mt-8 font-medium">
            👉 Jetzt herunterladen und erleben, wie einfach Teilen sein kann.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
