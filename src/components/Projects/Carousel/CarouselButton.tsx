import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

export const CarouselButton = ({ direction, onClick }: CarouselButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`absolute ${direction === 'left' ? 'left-4' : 'right-4'} z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} project`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
};