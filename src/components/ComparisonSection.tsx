import React from 'react';
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Erkennt dich automatisch auf Fotos",
      ours: true,
      others: false
    },
    {
      feature: "Schickt dir alle Bilder, auf denen du bist",
      ours: true,
      others: false
    },
    {
      feature: "Teilt Fotos automatisch mit Freunden",
      ours: true,
      others: false
    },
    {
      feature: "Kein manuelles Nachfragen nötig",
      ours: true,
      others: false
    },
    {
      feature: "Designed für echte Momente, nicht Daten",
      ours: true,
      others: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum du SnapShare lieben wirst – und nie wieder Google Fotos oder WhatsApp brauchst
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Andere Apps speichern Fotos. SnapShare versteht sie – und weiß, welche für dich wichtig sind.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto overflow-hidden">
          <div className="grid grid-cols-3 bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white font-semibold">
            <div className="p-4 col-span-1"></div>
            <div className="p-4 text-center border-l border-white/20">SnapShare</div>
            <div className="p-4 text-center border-l border-white/20">Andere Apps</div>
          </div>
          
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="p-4 font-medium text-gray-900">{item.feature}</div>
              <div className="p-4 text-center border-l border-gray-200">
                {item.ours ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </div>
              <div className="p-4 text-center border-l border-gray-200">
                {item.others ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default ComparisonSection;
