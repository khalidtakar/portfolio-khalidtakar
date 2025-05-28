import React from 'react';
import { TimelineItem } from './TimelineItem';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    title: "IT Project Analyst (Internship)",
    company: "Marsh",
    period: "Sep 2023 — Sep 2024",
    description: [
      "Supported back-end application development by enhancing features, writing JUnit tests on methods, resolving bugs in UI, fixing Sonar issues, and documenting functions using Java, ZK, and Spring Boot",
      "Assisted in planning execution of application service enhancements by organising and leading meetings, providing tactical solutions, and documenting meeting notes"
    ]
  },
  {
    id: 2,
    title: "Math's Tutor",
    company: "Fine Tutors",
    period: "Oct 2022 — Jul 2024",
    description: [
      "Taught KS3 to GCSE level students, providing in-depth guidance on core mathematical topics",
      "Balanced part-time role alongside university studies, showcasing commitment and time management",
      "Gained skills such as patience and compassion towards students as well as developing a passion for passing on knowledge to others"
    ]
  },
  {
    id: 3,
    title: "Sales Assistant",
    company: "JD Sports",
    period: "Jun 2022 — Oct 2022",
    description: [
      "Collaborated with staff on shifts to cover Textiles, Footwear and Stockroom sections, adapting to complete different tasks",
      "Managed stock, deliveries and in-store merchandising",
      "Showcased Customer Service abilities, listing customer requirements and handling any issues from customer requests"
    ]
  },
  {
    id: 4,
    title: "Math's Tutor",
    company: "Iftin Care",
    period: "Sep 2021 — Jun 2022",
    description: [
      "Taught students from KS3 to GCSE level, offering in-depth guidance on core mathematical topics",
      "Improved students on a 1-to-1 and group basis, strengthening communication and leadership abilities",
      "Expressed complicated concepts in a simple manner for students to understand"
    ]
  },
  {
    id: 5,
    title: "Shadow Graphic Designer",
    company: "IMAX Design Ltd | The Whitechapel Centre, London",
    period: "Jun 2019 - Jul 2019",
    description: [
      "Learnt how to design on Adobe Photoshop cs6 to design business cards, thumbnails, logos and posters.",
      "Shadowed Experienced Designers, understanding how to use creativity to meet client demands and deadlines."
    ]
  },
  {
    id: 6,
    title: "Administrative Assistant",
    company: "Ersan & Co Solicitors Ltd | London",
    period: "Jun 2018 - Jul 2018",
    description: [
      "Undertook initial work experience to learn how to become responsible and organised by sorting out folders, organising bank statements, filing, and learnt how to print and scan from a printer.",
      "Acknowledged how to be a team member and fit in unfamiliar surroundings.",
      "Learnt presentation skills and watched how a workplace functions by observing other people's tasks."
    ]
  },
];

export const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="journey" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">My Journey</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">A timeline of my professional experience</p>
        <div className="relative" ref={ref}>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800 hidden md:block" />
          <div className="space-y-12 md:space-y-24">
            <div className="flex flex-col items-center my-8">
              <div className="relative w-full flex items-center justify-center mb-2">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2/3 h-2 bg-gray-300 rounded shadow-md z-10" />
                <span className="relative z-20 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full text-gray-700 dark:text-gray-200 font-bold shadow">Employment</span>
              </div>
            </div>
            {experiences.map((exp, index) => (
              <React.Fragment key={exp.id}>
              <TimelineItem
                {...exp}
                index={index}
                isVisible={inView}
              />
                {exp.id === 4 && (
                  <div className="flex flex-col items-center my-8">
                    <div className="relative w-full flex items-center justify-center mb-2">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-2/3 h-2 bg-gray-300 rounded shadow-md z-10" />
                      <span className="relative z-20 bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full text-gray-700 dark:text-gray-200 font-bold shadow">Work Experience</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};