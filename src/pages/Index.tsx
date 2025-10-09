
import React from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProcessFlow from "../components/ProcessFlow";
import FeaturesSection from "../components/FeaturesSection";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ProcessFlow />
        <FeaturesSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
