import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/khalidtakar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/khalid-takar-272097213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:khalidtakar02@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Khalid Takar
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};