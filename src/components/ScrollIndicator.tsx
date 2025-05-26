import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.6, delay: 0.5 }}
      onClick={scrollToContent}
    >
      <motion.span 
        className="text-sm font-medium tracking-wider text-gray-600 dark:text-gray-300 uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll to explore
      </motion.span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </motion.div>
    </motion.div>
  );
};