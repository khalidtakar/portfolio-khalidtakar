import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ClientProjectProps {
  title: string;
  description: string;
}

export const ClientProject = ({ title, description }: ClientProjectProps) => {
  return (
    <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};