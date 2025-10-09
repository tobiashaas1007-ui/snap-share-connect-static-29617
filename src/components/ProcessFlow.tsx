
import React from 'react';
import { User, Users, Image } from "lucide-react";

const ProcessFlow = () => {
  const steps = [
    {
      id: 1,
      title: "Create a profile",
      description: "Sign up and personalize your profile in seconds with our simple onboarding process.",
      icon: <User className="h-8 w-8 text-white" />,
      color: "from-purple-400 to-purple-500",
    },
    {
      id: 2,
      title: "Connect with friends",
      description: "Find and connect with friends easily. Import contacts or search by username.",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "from-violet-500 to-violet-600",
    },
    {
      id: 3,
      title: "Share images seamlessly",
      description: "Share photos instantly with your connections. Add filters, stickers, and more.",
      icon: <Image className="h-8 w-8 text-white" />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple three-step process gets you sharing photos with friends in no time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connect steps with line on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%_-_2rem)] w-full h-0.5 bg-gray-200 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className={`mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
