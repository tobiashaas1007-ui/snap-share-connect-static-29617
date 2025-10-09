
import React from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ComparisonSection from "../components/ComparisonSection";
import Footer from "../components/Footer";
import { useAnalytics } from "@/hooks/useAnalytics";

const Index = () => {
  useAnalytics(); // Track page view
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
