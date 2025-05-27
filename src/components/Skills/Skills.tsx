import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Languages } from 'lucide-react';

const skillCategories = [
  {
    title: 'Front-End Development',
    icon: <Code className="w-6 h-6" />,
    skills: ['JavaScript', 'HTML', 'CSS', 'PHP', 'React.js', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Back-End Development',
    icon: <Database className="w-6 h-6" />,
    skills: ['Java', 'Python', 'Flask', 'Spring Boot', 'Node.js']
  },
  {
    title: 'Development Tools',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Docker', 'Git/GitHub', 'ZK', 'Spring Boot', 'Express.js']
  },
  {
    title: 'Database Management',
    icon: <Languages className="w-6 h-6" />,
    skills: ['SQL (PostgreSQL, MySQL Workbench)', 'Supabase']
  }
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">Technical skills and professional capabilities</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Additional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Project Work</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Organising and Planning Meetings</li>
                <li>Providing Tactical Solutions</li>
                <li>Taking Detailed Meeting Notes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Softwares & Skills</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Adobe Photoshop (CS6) and Microsoft Office Skills</li>
                <li>Retail Sales</li>
                <li>Communication & Teamwork</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">LICENSES & CERTIFICATIONS</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-4">
            <li>
              <span className="font-bold">Python Basic</span><br/>
              <span>HackerRank</span><br/>
              <span>Issued: Feb 2023</span><br/>
              <span>Credential ID: 11F86A25A56C</span><br/>
              <a href="https://www.hackerrank.com/certificates/11F86A25A56C" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Show Credential</a>
            </li>
            <li>
              <span className="font-bold">Duke of Edinburgh's Award - Bronze Level</span><br/>
              <span>The Duke of Edinburgh's Award</span><br/>
              <span>Issued: Mar 2019</span>
            </li>
            <li>
              <span className="font-bold">Dean's Award for Professional Experience (DAPE)</span><br/>
              <span>Issued: Mar 2025</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};