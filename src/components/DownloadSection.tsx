
import React from 'react';
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-brand-gradient-start to-brand-gradient-end text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Download Our App Today
            </h2>
            
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto lg:mx-0">
              Get the full experience on your mobile device. Available for iOS and Android.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* App Store button */}
              <Button variant="secondary" className="bg-white text-brand-darkPurple hover:bg-gray-100 border-none px-6 py-6 h-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5056 12.4911C17.4909 9.46892 19.9636 8.1036 20.0683 8.04506C18.6045 5.96453 16.3348 5.69613 15.5351 5.67387C13.6001 5.47079 11.7261 6.76227 10.7453 6.76227C9.74349 6.76227 8.20941 5.69258 6.56365 5.72595C4.4272 5.75932 2.42618 6.96195 1.32967 8.83259C-0.93382 12.6164 0.79374 18.161 2.97688 21.1264C4.06228 22.5847 5.33134 24.2138 7.00046 24.1556C8.6306 24.0918 9.25576 23.1187 11.2056 23.1187C13.1388 23.1187 13.7284 24.1556 15.4219 24.1177C17.1599 24.0918 18.2387 22.6523 19.283 21.1831C20.5187 19.5095 21.0083 17.8681 21.0361 17.7851C20.9925 17.7684 17.5236 16.4047 17.5056 12.4911Z" />
                      <path d="M14.7382 3.76271C15.6078 2.69386 16.184 1.23282 16.0348 0C14.7826 0.0498565 13.2263 0.829109 12.3254 1.87022C11.5368 2.78527 10.8361 4.29657 11.0019 5.47969C12.4047 5.57964 13.8354 4.81527 14.7382 3.76271Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs leading-none">Download on the</p>
                    <p className="text-xl font-semibold">App Store</p>
                  </div>
                </div>
              </Button>
              
              {/* Google Play button */}
              <Button variant="secondary" className="bg-white text-brand-darkPurple hover:bg-gray-100 border-none px-6 py-6 h-auto">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1.22346 0.00585659C1.01736 0.223622 0.895345 0.527559 0.895345 0.903526V23.0964C0.895345 23.4723 1.01736 23.7763 1.22346 23.9941L1.30968 24.0739L13.1455 12.2381V12V11.7619L1.30968 0L1.22346 0.00585659Z" />
                      <path d="M17.0288 16.1214L13.1455 12.2381V12V11.7619L17.0288 7.87865L17.1296 7.93839L21.7686 10.6083C23.0078 11.3122 23.0078 12.6878 21.7686 13.3917L17.1296 16.0616L17.0288 16.1214Z" />
                      <path d="M17.1296 16.0616L13.1455 12L1.22345 23.9941C1.65902 24.4581 2.38518 24.5178 3.19568 24.0538L17.1296 16.0616Z" />
                      <path d="M17.1296 7.93839L3.19568 -0.0538049C2.38518 -0.517802 1.65902 -0.458062 1.22345 0.00585659L13.1455 12L17.1296 7.93839Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs leading-none">GET IT ON</p>
                    <p className="text-xl font-semibold">Google Play</p>
                  </div>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main phone mockup */}
              <div className="bg-white rounded-3xl p-2 shadow-xl rotate-6 z-10 relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[9/19] w-full max-w-[220px] overflow-hidden">
                  {/* Placeholder for app screenshot */}
                  <div className="w-full h-full bg-gradient-to-br from-brand-purple/80 to-brand-darkPurple/80 flex items-center justify-center">
                    <span className="text-white text-xl font-medium">App Preview</span>
                  </div>
                </div>
              </div>
              
              {/* Second phone mockup (decorative) */}
              <div className="absolute -left-16 top-10 bg-white rounded-3xl p-2 shadow-xl -rotate-12 z-0">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[9/19] w-full max-w-[180px] overflow-hidden">
                  {/* Placeholder for second app screenshot */}
                  <div className="w-full h-full bg-gradient-to-br from-brand-lightPurple/70 to-brand-purple/70 flex items-center justify-center">
                  </div>
                </div>
              </div>
              
              {/* Floating download icon */}
              <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-full shadow-lg z-20">
                <Download className="h-8 w-8 text-brand-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
