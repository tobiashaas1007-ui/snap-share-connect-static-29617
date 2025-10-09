import React from 'react';
import { Card } from "@/components/ui/card";
import { ScanFace, FolderSearch, Sparkles } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ScanFace,
      title: "Automatische Fotoerkennung",
      description: "Kein mühsames Sammeln mehr – du erhältst automatisch alle Fotos, auf denen du zu sehen bist."
    },
    {
      icon: FolderSearch,
      title: "Einfacher Zugang",
      description: "Alles an einem Ort – automatisch sortiert und jederzeit verfügbar."
    },
    {
      icon: Sparkles,
      title: "Fokus auf dich",
      description: "Wir zeigen nur die relevantesten Bilder, die wirklich wichtig für dich sind."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum du unsere App lieben wirst
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecke, wie einfach es sein kann, alle deine Erinnerungen an einem Ort zu haben.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-brand-gradient-start to-brand-gradient-end w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
