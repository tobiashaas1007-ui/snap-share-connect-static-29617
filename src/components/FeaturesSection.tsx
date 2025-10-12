import React from 'react';
import { Card } from "@/components/ui/card";
import { Camera, Shield, Users, Sparkles, Smile } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Automatische Fotoerkennung",
      description: "Schluss mit Nachfragen oder Warten – SnapShare erkennt dich auf Fotos deiner Freunde und schickt sie dir automatisch."
    },
    {
      icon: Shield,
      title: "Kontrolle über deine Erinnerungen",
      description: "Du entscheidest, welche Bilder geteilt oder gespeichert werden. SnapShare gibt dir die Kontrolle über deine eigenen Fotos zurück."
    },
    {
      icon: Users,
      title: "Teilen passiert automatisch",
      description: "Wenn du und deine Freunde gemeinsam auf einem Bild seid, teilt SnapShare es automatisch – keine Gruppenchats oder manuelles Senden mehr."
    },
    {
      icon: Sparkles,
      title: "Genieße den Moment",
      description: "SnapShare läuft im Hintergrund, während du lebst. Du musst nichts tun – deine Fotos finden dich von selbst."
    },
    {
      icon: Smile,
      title: "Einfach, intuitiv, mühelos",
      description: "Kein kompliziertes Setup. Kein Tech-Wissen nötig. SnapShare funktioniert ab dem ersten Moment – und macht Spaß."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum du SnapShare lieben wirst
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SnapShare ist die erste App, die Fotos automatisch mit dir teilt – genau dann, wenn du darauf zu sehen bist. Einfach, smart und wie Magie.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
