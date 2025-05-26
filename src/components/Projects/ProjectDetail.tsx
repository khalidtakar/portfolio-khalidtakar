import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './types';
import { X, ChevronRight, Lightbulb, Target, Rocket } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="h-64 relative">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-bold text-white mb-2"
              >
                {project.title}
              </motion.h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Video Placeholder */}
          <div className="w-full flex justify-center my-6">
            {project.video ? (
              <video width="480" controls poster={project.coverImage}>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="text-gray-500 dark:text-gray-400 text-center">Demo video coming soon...</div>
            )}
          </div>

          <div className="p-6 space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {project.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold">Challenge</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{project.details.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold">Solution</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{project.details.solution}</p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold">Impact</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{project.details.impact}</p>
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full"
                  >
                    <img
                      src={project.icons.tech[index]}
                      alt={tech}
                      className="w-5 h-5 mr-2"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};