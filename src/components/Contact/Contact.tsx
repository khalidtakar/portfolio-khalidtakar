import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, FileText, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Let's discuss how we can work together
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Email
                </h3>
                <a
                  href="mailto:khalidtakar02@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  khalidtakar02@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  CV Request
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form to request my CV
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  London, United Kingdom
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};