
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-xl font-bold bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-transparent bg-clip-text">
              SnapShare
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors">How It Works</a>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors">About</Link>
          <a href="#download" className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors">Download</a>
        </nav>
        
        <div>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end hover:opacity-90 transition-opacity"
          >
            Download Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
