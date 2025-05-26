import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

// Helper to check if asset exists (for demonstration, use a variable)
const cvExists = false; // Set to true when /Khalid_Takar_CV.pdf is present

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Computer Science student at City, University of London, passionate about software development and technology. Experienced in both front-end and back-end development, with a strong foundation in Java, Python, React, and SQL. Adept at project management, teamwork, and delivering successful IT projects. Currently seeking opportunities to further develop my skills and contribute to impactful projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-600">London, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-600">07572943311</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-600">khalidtakar02@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-blue-600" size={20} />
                <span className="text-gray-600">BSc Computer Science with Placement (Expected 2025)</span>
              </div>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.linkedin.com/in/khalid-takar-272097213" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-blue-700 hover:text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                </a>
                <a href="https://khalidtakar.github.io/My_Portfolio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg className="w-6 h-6 text-gray-800 hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.373-12-12-12z"/></svg>
                </a>
              </div>
              <div className="pt-4">
                {cvExists ? (
                  <a href="/Khalid_Takar_CV.pdf" download className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Download CV
                  </a>
                ) : (
                  <div className="w-48 h-12 flex items-center justify-center bg-gray-200 rounded text-gray-500">
                    CV file goes here
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/khalid1.jpg"
              alt="Khalid Takar profile"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};