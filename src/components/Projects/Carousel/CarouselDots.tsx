import React from 'react';

interface CarouselDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const CarouselDots = ({ total, current, onSelect }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center mt-8 space-x-2">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === current
              ? 'bg-blue-600 dark:bg-blue-400'
              : 'bg-gray-300 dark:bg-gray-600'
          }`}
          aria-label={`Go to project ${index + 1}`}
        />
      ))}
    </div>
  );
};