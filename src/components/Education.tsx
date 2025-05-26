import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: "City, University of London",
    degree: "BSc Computer Science with Placement",
    period: "Sept 2021 – Aug 2025",
    details: "Expected Grade: 2:1",
    subjects: ["Java", "Python", "React", "SQL", "C++", "Haskell", "PHP" ,"Theory of computation", "Systems architecture", "Project Management", "Software Engineering"],
    awards: ["Dean's Award for Professional Experience (DAPE), Mar 2025"],
    certifications: ["Python Basic - HackerRank, Feb 2023 (ID: 11F86A25A56C)", "Duke of Edinburgh's Award - Bronze Level, Mar 2019"],
    activities: ["Team Project - Alt-F4: Deputy Project Manager for Aviation Ticket Application", "Lancaster Booking Project: Full-stack booking system", "StreamLine Project: SaaS landing page", "TakaReview: Sentiment Analysis Dashboard"]
  },
  {
    school: "Central Foundation Boy's School",
    degree: "A-Levels",
    period: "Sept 2019 – May 2021",
    details: "Physics (B), Economics (B), Maths (C)",
    subjects: ["Physics", "Economics", "Maths"],
    activities: ["Math's Tutor (Fine Tutors, Iftin Care)", "STEM Club"]
  },
  {
    school: "Tawhid Boy's School",
    degree: "GCSEs",
    period: "Sept 2014 – Jun 2019",
    details: "10 GCSEs (Grades 9 - 4, A* - C)",
    awards: ["Duke of Edinburgh's Award - Bronze Level, Mar 2019"]
  }
];

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                    <p className="text-gray-600">{edu.degree} | {edu.period}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{edu.details}</p>
                {edu.subjects && (
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                )}
                {edu.awards && (
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-gray-800">Awards</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.awards.map((award, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {edu.certifications && (
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-gray-800">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.certifications.map((certification, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {certification}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {edu.activities && (
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-gray-800">Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.activities.map((activity, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};