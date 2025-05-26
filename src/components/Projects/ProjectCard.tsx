import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <motion.div
          className="absolute bottom-4 left-4 right-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </motion.div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};