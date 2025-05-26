import React from 'react';
import { Building, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
  isVisible: boolean;
}

export const TimelineItem = ({ id, title, company, period, description, index, isVisible }: TimelineItemProps) => {
  return (
    <div
      id={`timeline-${id}`}
      className={`animate-on-scroll ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(4rem)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
        <div className={`w-full md:w-5/12 px-4 md:px-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm md:text-base">{period}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm md:text-base">{company}</p>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              {description.map((item, i) => (
                <li key={i} className="text-xs md:text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 hidden md:block">
          <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-900 shadow" />
        </div>
      </div>
    </div>
  );
};