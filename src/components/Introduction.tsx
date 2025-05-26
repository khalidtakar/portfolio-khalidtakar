import React from 'react';

export const Introduction = () => {
  const scrollToEducation = () => {
    const educationSection = document.getElementById('education');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('journey');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
            <img
              src="/images/khalid1.jpg"
              alt="Khalid Takar profile"
              className="mx-auto mb-6 rounded-full shadow-lg w-32 h-32 object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Khalid 👋
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
              Computer Science Student & Software Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Computer Science student at City, University of London, passionate about software development and technology. Experienced in both front-end and back-end development, with a strong foundation in Java, Python, C++, PHP, React, and SQL. Adept at project management, teamwork, and delivering successful IT projects. Currently seeking opportunities to further develop my skills and contribute to impactful projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div 
                className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors h-full flex flex-col justify-between"
                onClick={scrollToExperience}
              >
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">IT Project Analyst at Marsh</p>
              </div>
              <div 
                className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors h-full flex flex-col justify-between"
                onClick={scrollToEducation}
              >
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">BSc Computer Science at City University</p>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="mailto:khalidtakar02@gmail.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};