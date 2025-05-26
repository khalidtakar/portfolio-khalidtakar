import React from 'react';

interface Skill {
  name: string;
}

interface SkillCardProps {
  category: {
    category: string;
    items: Skill[];
  };
}

export const SkillCard = ({ category }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
        {category.category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.items.map((skill) => (
          <span
            key={skill.name}
            className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};