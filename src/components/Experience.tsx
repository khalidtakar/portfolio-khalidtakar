import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'IT Project Analyst (Internship)',
    company: 'Marsh',
    period: 'Sep 2023 – Sep 2024',
    location: 'London',
    responsibilities: [
      'Supported back-end application development by enhancing features, writing JUnit tests on methods, resolving bugs in UI, fixing Sonar issues, and documenting functions using Java, ZK, and Spring Boot.',
      'Assisted in planning execution of application service enhancements by organising and leading meetings, providing tactical solutions, and documenting meeting notes.'
    ]
  },
  {
    title: 'Maths Tutor (Employment)',
    company: 'Fine Tutors',
    period: 'Oct 2022 – Jul 2024 / Nov 2019 - Mar 2020',
    location: 'London',
    responsibilities: [
      'Taught KS3 to GCSE level students, providing in-depth guidance on core mathematical topics.',
      'Balanced part-time role alongside university studies, showcasing commitment and time management.',
      'Gained skills such as patience and compassion towards students as well as developing a passion for passing on knowledge to others.'
    ]
  },
  {
    title: 'Sales Assistant (Employment)',
    company: 'JD Sports',
    period: 'Jun 2022 - Oct 2022',
    location: 'London',
    responsibilities: [
      'Collaborated with staff on shifts to cover Textiles, Footwear and Stockroom sections, adapting to complete different tasks, managing stock, deliveries and in-store merchandising.',
      'Showcased Customer Service abilities, listing customer requirements and handling any issues from customer requests.'
    ]
  },
  {
    title: 'Maths Tutor (Employment)',
    company: 'Iftin Care',
    period: 'Sep 2021 - Jun 2022',
    location: 'London',
    responsibilities: [
      'Taught students from KS3 to GCSE level, offering in-depth guidance on core mathematical topics to support students in catching up on their learning because of the pandemic or by preparing for exams.',
      'Improved students on a 1-to-1 and group basis, strengthening communication and leadership abilities by expressing complicated concepts in a simple manner for students to understand.'
    ]
  },
  {
    title: 'Shadow Graphic Designer (Work Experience)',
    company: 'IMAX Design Ltd',
    period: 'Jun 2019 - Jul 2019',
    location: 'The Whitechapel Centre, London',
    responsibilities: [
      'Learnt how to design on Adobe Photoshop cs6 to design business cards, thumbnails, logos and posters.',
      'Shadowed Experienced Designers, understanding how to use creativity to meet client demands and deadlines.'
    ]
  },
  {
    title: 'Administrative Assistant (Work Experience)',
    company: 'Ersan & Co Solicitors Ltd',
    period: 'Jun 2018 - Jul 2018',
    location: 'London',
    responsibilities: [
      'Undertook initial work experience to learn how to become responsible and organized by sorting out folders, organizing bank statements, filing, and learnt how to print and scan from a printer.',
      'Acknowledged how to be a team member and fit in unfamiliar surroundings.',
      'Learnt presentation skills and watched how a workplace functions by observing other people's tasks.'
    ]
  }
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Briefcase className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company} | {exp.period}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};