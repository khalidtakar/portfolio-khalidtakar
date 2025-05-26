import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="bg-white dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">EDUCATION</h2>
          <p className="text-gray-600 dark:text-gray-400">Building the foundation for success</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* City University */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">City, University of London</h3>
                <p className="text-gray-600 dark:text-gray-300">Sep 2021 — Aug 2025</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bachelor of Science (BSc), Computer Science with Placement</h4>
                <p className="text-gray-600 dark:text-gray-300">Expected Grade: 2:1</p>
              </div>
            </div>
          </div>

          {/* Central Foundation Boy's School */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Central Foundation Boy's School</h3>
                <p className="text-gray-600 dark:text-gray-300">Sep 2019 — May 2021</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">A-Levels</h4>
                <p className="text-gray-600 dark:text-gray-300">Physics (B), Economics (B), Maths (C)</p>
              </div>
            </div>
          </div>

          {/* Tawhid Boy's School */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tawhid Boy's School</h3>
                <p className="text-gray-600 dark:text-gray-300">Sep 2014 — Jun 2019</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GCSEs</h4>
                <p className="text-gray-600 dark:text-gray-300">10 GCSEs (Grades 9 - 4, A* - C)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};