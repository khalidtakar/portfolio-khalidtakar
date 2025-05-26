import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { navigationItems } from './NavigationItems';
import { useNavigation } from './useNavigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { scrollToSection } = useNavigation();

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ type: 'tween' }}
          className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50"
        >
          <div className="p-4 max-w-7xl mx-auto">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-600 dark:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="py-8">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left px-4 py-2"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};