import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { Project } from './types';

const projects: Project[] = [
  {
    id: 1,
    title: "TakaReview - Sentiment Analysis Dashboard",
    description: "A powerful web-based sentiment analysis dashboard designed for content creators to analyse audience reactions across social media platforms.",
    longDescription: "A web-based dashboard for sentiment analysis across social media platforms, built with Python Flask, CSS, HTML, and JavaScript.",
    coverImage: "/images/takareview.png",
    tags: ["Python", "Flask", "Dashboard"],
    details: {
      challenge: "Analyzing large volumes of social media data.",
      solution: "Built a scalable dashboard with real-time analytics.",
      impact: "Enabled content creators to better understand their audience."
    },
    technologies: ["Python" , "Flask", "CSS", "HTML", "JavaScript"],
    icons: {
      main: "/images/takareview.png",
      tech: [
        "/icons-correct/python.svg",
        "/icons-correct/flask.svg",
        "/icons-correct/css3.svg",
        "/icons-correct/html5.svg",
        "/icons-correct/javascript.svg"
      ]
    },
    video: "/videos/project demostration video.mkv",
  },
  {
    id: 2,
    title: "StreamLine Project",
    description: "Developed a responsive SaaS landing page using Next.js, React, TypeScript, and Tailwind CSS, implementing modern UI/UX design principles.",
    longDescription: "A responsive SaaS landing page developed using Next.js, React, TypeScript, and Tailwind CSS, focusing on modern UI/UX design principles.",
    coverImage: "/images/streamline.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    details: {
      challenge: "Creating a responsive and visually appealing landing page.",
      solution: "Implemented modern UI/UX design principles and responsive layout.",
      impact: "Enhanced user experience and improved website performance."
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icons: {
      main: "/images/streamline.png",
      tech: [
        "/icons-correct/nextdotjs.svg",
        "/icons-correct/react.svg",
        "/icons-correct/typescript.svg",
        "/icons-correct/tailwindcss.svg"
      ]
    },
    video: "/videos/streamline-website.mkv",
  },
  {
    id: 3,
    title: "Lancaster Booking Project",
    description: "Created a full-stack booking system and restaurant homepage using PHP, MySQL, JavaScript, and XAMPP.",
    longDescription: "A full-stack booking system and restaurant homepage created using PHP, MySQL, JavaScript, and XAMPP.",
    coverImage: "/images/lancaster-booking.png",
    tags: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    details: {
      challenge: "Developing a robust booking system and restaurant homepage.",
      solution: "Implemented a full-stack solution with PHP, MySQL, JavaScript, and XAMPP.",
      impact: "Enabled online booking and improved restaurant management."
    },
    technologies: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    icons: {
      main: "/images/lancaster-booking.png",
      tech: [
        "/icons-correct/php.svg",
        "/icons-correct/mysql.svg",
        "/icons-correct/javascript.svg",
        "/icons-correct/xampp.svg"
      ]
    },
    video: "/videos/web-demo.mp4",
  },
  {
    id: 4,
    title: "CampusDine – UX Research & Mobile App Prototype (2025)",
    description: "Designed and evaluated a mobile app aimed at improving the campus dining experience using a user-centred design approach. Conducted user interviews and observations, developed personas, created a current user journey map, and produced annotated wireframes and storyboards. Completed a full usability testing brief.",
    longDescription: "Designed and evaluated a mobile app aimed at improving the campus dining experience using a user-centred design approach. Conducted user interviews and observations, developed personas, created a current user journey map, and produced annotated wireframes and storyboards. Completed a full usability testing brief.",
    coverImage: "/images/WireFrames-total.png",
    tags: ["UX Research", "Mobile App Prototype", "User-Centred Design"],
    details: {
      challenge: "Improving the campus dining experience through user-centred design.",
      solution: "Conducted user interviews, developed personas, created user journey maps, and produced annotated wireframes and storyboards.",
      impact: "Enhanced the campus dining experience through a user-centred mobile app prototype."
    },
    technologies: ["Microsoft Office Suite", "Figma", "Miro", "Motiff", "Lucidchart"],
    icons: {
      main: "/images/WireFrames-total.png",
      tech: [
        "/icons/msoffice.svg",
        "/icons-correct/figma.svg",
        "/icons-correct/miro.svg",
        "/icons/motiff.svg",
        "/icons/lucidchart.svg"
      ]
    },
    video: "/videos/UX-project.mkv",
  },
  {
    id: 5,
    title: "Java Game Project",
    description: "Created a 2D game for 4-month coursework based on my favourite Anime character from Bleach.",
    longDescription: "Created a 2D game for 4-month coursework based on my favourite Anime character from Bleach.",
    coverImage: "/images/javagame.png",
    tags: ["Java", "Game Development", "Object-Oriented Programming"],
    details: {
      challenge: "Developing a 2D game from scratch.",
      solution: "Implemented a 2D game using Java and object-oriented programming.",
      impact: "Enhanced game development skills and user interface design."
    },
    technologies: ["Java", "Game Development", "Object-Oriented Programming"],
    icons: {
      main: "/images/javagame.png",
      tech: ["/icons/java.svg", "/icons/gamedev.svg", "/icons/oop.svg"]
    },
    video: "/videos/java-game.mp4",
  },
  {
    id: 6,
    title: "SQL Project",
    description: "Created a database for 1-month coursework on the 20/21 Champions League tournament.",
    longDescription: "Created a database for 1-month coursework on the 20/21 Champions League tournament.",
    coverImage: "/images/sql-script.png",
    tags: ["SQL", "Database Design", "Data Analysis"],
    details: {
      challenge: "Designing and managing a database for a specific project.",
      solution: "Created a database using SQL and implemented data analysis techniques.",
      impact: "Enabled efficient data management and analysis."
    },
    technologies: ["SQL", "Database Design", "Data Analysis"],
    icons: {
      main: "/images/sql-script.png",
      tech: ["/icons-correct/mysql.svg", "/icons/databasedesign.svg", "/icons/dataanalysis.svg"]
    },
    video: "/videos/SQL Project.mp4",
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Key Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">A showcase of my recent work</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-center mt-8">To view more projects, please visit my <a href="https://github.com/khalidtakar" className="text-blue-500 hover:text-blue-600">GitHub</a> page.</p>
      <p className="text-gray-600 dark:text-gray-400 text-center mt-8">To view my old portfolio, please visit my old <a href="https://khalidtakar.github.io/My_Portfolio/" className="text-blue-500 hover:text-blue-600">Portfolio</a> page.</p>
    
    </section>
  );
};