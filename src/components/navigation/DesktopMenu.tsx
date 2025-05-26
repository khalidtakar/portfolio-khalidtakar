import React from 'react';
import { navigationItems } from './NavigationItems';
import { useNavigation } from './useNavigation';

export const DesktopMenu = () => {
  const { scrollToSection } = useNavigation();

  return (
    <nav className="hidden md:flex space-x-8">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};