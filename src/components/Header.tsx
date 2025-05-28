import React, { useState } from 'react';
import { Mail, Menu } from 'lucide-react';
import { MobileMenu } from './navigation/MobileMenu';
import { DesktopMenu } from './navigation/DesktopMenu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">
            Khalid Takar
          </h1>
          
          <div className="flex items-center space-x-8">
            <DesktopMenu />
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:khalidtakar02@gmail.com" 
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <button
                className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};