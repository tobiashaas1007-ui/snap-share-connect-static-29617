
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
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
              Share Photos <span className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-transparent bg-clip-text">Seamlessly</span> With Friends
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Create a profile, connect with friends, and share your favorite moments in seconds. The easiest way to stay connected through images.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end hover:opacity-90 transition-opacity text-white px-8 py-6 h-auto text-lg">
                <Download className="mr-2 h-5 w-5" /> Download App
              </Button>
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 px-8 py-6 h-auto text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* App preview image */}
          <div className="flex-1 relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-3xl p-2 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[9/19] w-full max-w-xs mx-auto overflow-hidden">
                  {/* Placeholder for app screenshot */}
                  <div className="w-full h-full bg-gradient-to-br from-brand-gradient-start/80 to-brand-gradient-end/80 flex items-center justify-center">
                    <span className="text-white text-xl font-medium">App Preview</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-8 w-16 h-16 rounded-full bg-brand-lightPurple/30 animate-pulse-soft"></div>
            <div className="absolute bottom-1/3 -left-4 w-8 h-8 rounded-full bg-brand-purple/20 animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
