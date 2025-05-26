import React from 'react';
import { Project } from './types';

interface ProjectTabsProps {
  projects: Project[];
  activeProject: number;
  onTabChange: (index: number) => void;
}

export const ProjectTabs = ({ projects, activeProject, onTabChange }: ProjectTabsProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-2">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => onTabChange(index)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeProject === index
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>
    </div>
  );
};