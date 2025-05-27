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
    coverImage: `${import.meta.env.BASE_URL}images/takareview.png`,
    tags: ["Python", "Flask", "Dashboard"],
    details: {
      challenge: "Analyzing large volumes of social media data.",
      solution: "Built a scalable dashboard with real-time analytics.",
      impact: "Enabled content creators to better understand their audience."
    },
    technologies: ["Python" , "Flask", "CSS", "HTML", "JavaScript"],
    icons: {
      main: `${import.meta.env.BASE_URL}images/takareview.png`,
      tech: [
        `${import.meta.env.BASE_URL}icons-correct/python.svg`,
        `${import.meta.env.BASE_URL}icons-correct/flask.svg`,
        `${import.meta.env.BASE_URL}icons-correct/css3.svg`,
        `${import.meta.env.BASE_URL}icons-correct/html5.svg`,
        `${import.meta.env.BASE_URL}icons-correct/javascript.svg`
      ]
    },
    video: `${import.meta.env.BASE_URL}videos/project demostration video.mkv`,
  },
  {
    id: 2,
    title: "StreamLine Project",
    description: "Developed a responsive SaaS landing page using Next.js, React, TypeScript, and Tailwind CSS, implementing modern UI/UX design principles.",
    longDescription: "A responsive SaaS landing page developed using Next.js, React, TypeScript, and Tailwind CSS, focusing on modern UI/UX design principles.",
    coverImage: `${import.meta.env.BASE_URL}images/streamline.png`,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    details: {
      challenge: "Creating a responsive and visually appealing landing page.",
      solution: "Implemented modern UI/UX design principles and responsive layout.",
      impact: "Enhanced user experience and improved website performance."
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icons: {
      main: `${import.meta.env.BASE_URL}images/streamline.png`,
      tech: [
        `${import.meta.env.BASE_URL}icons-correct/nextdotjs.svg`,
        `${import.meta.env.BASE_URL}icons-correct/react.svg`,
        `${import.meta.env.BASE_URL}icons-correct/typescript.svg`,
        `${import.meta.env.BASE_URL}icons-correct/tailwindcss.svg`
      ]
    },
    video: `${import.meta.env.BASE_URL}videos/streamline-website.mkv`,
  },
  {
    id: 3,
    title: "Lancaster Booking Project",
    description: "Created a full-stack booking system and restaurant homepage using PHP, MySQL, JavaScript, and XAMPP.",
    longDescription: "A full-stack booking system and restaurant homepage created using PHP, MySQL, JavaScript, and XAMPP.",
    coverImage: `${import.meta.env.BASE_URL}images/lancaster-booking.png`,
    tags: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    details: {
      challenge: "Developing a robust booking system and restaurant homepage.",
      solution: "Implemented a full-stack solution with PHP, MySQL, JavaScript, and XAMPP.",
      impact: "Enabled online booking and improved restaurant management."
    },
    technologies: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    icons: {
      main: `${import.meta.env.BASE_URL}images/lancaster-booking.png`,
      tech: [
        `${import.meta.env.BASE_URL}icons-correct/php.svg`,
        `${import.meta.env.BASE_URL}icons-correct/mysql.svg`,
        `${import.meta.env.BASE_URL}icons-correct/javascript.svg`,
        `${import.meta.env.BASE_URL}icons-correct/xampp.svg`
      ]
    },
    video: `${import.meta.env.BASE_URL}videos/web-demo.mp4`,
  },
  {
    id: 4,
    title: "CampusDine – UX Research & Mobile App Prototype (2025)",
    description: "Designed and evaluated a mobile app aimed at improving the campus dining experience using a user-centred design approach. Conducted user interviews and observations, developed personas, created a current user journey map, and produced annotated wireframes and storyboards. Completed a full usability testing brief.",
    longDescription: "Designed and evaluated a mobile app aimed at improving the campus dining experience using a user-centred design approach. Conducted user interviews and observations, developed personas, created a current user journey map, and produced annotated wireframes and storyboards. Completed a full usability testing brief.",
    coverImage: `${import.meta.env.BASE_URL}images/WireFrames-total.png`,
    tags: ["UX Research", "Mobile App Prototype", "User-Centred Design"],
    details: {
      challenge: "Improving the campus dining experience through user-centred design.",
      solution: "Conducted user interviews, developed personas, created user journey maps, and produced annotated wireframes and storyboards.",
      impact: "Enhanced the campus dining experience through a user-centred mobile app prototype."
    },
    technologies: ["Microsoft Office Suite", "Figma", "Miro", "Motiff", "Lucidchart"],
    icons: {
      main: `${import.meta.env.BASE_URL}images/WireFrames-total.png`,
      tech: [
        `${import.meta.env.BASE_URL}icons/msoffice.svg`,
        `${import.meta.env.BASE_URL}icons-correct/figma.svg`,
        `${import.meta.env.BASE_URL}icons-correct/miro.svg`,
        `${import.meta.env.BASE_URL}icons/motiff.svg`,
        `${import.meta.env.BASE_URL}icons/lucidchart.svg`
      ]
    },
    video: `${import.meta.env.BASE_URL}videos/UX-project.mkv`,
  },
  {
    id: 5,
    title: "Java Game Project",
    description: "Created a 2D game for 4-month coursework based on my favourite Anime character from Bleach.",
    longDescription: "Created a 2D game for 4-month coursework based on my favourite Anime character from Bleach.",
    coverImage: `${import.meta.env.BASE_URL}images/javagame.png`,
    tags: ["Java", "Game Development", "Object-Oriented Programming"],
    details: {
      challenge: "Developing a 2D game from scratch.",
      solution: "Implemented a 2D game using Java and object-oriented programming.",
      impact: "Enhanced game development skills and user interface design."
    },
    technologies: ["Java", "Game Development", "Object-Oriented Programming"],
    icons: {
      main: `${import.meta.env.BASE_URL}images/javagame.png`,
      tech: [
        `${import.meta.env.BASE_URL}icons/java.svg`,
        `${import.meta.env.BASE_URL}icons/gamedev.svg`,
        `${import.meta.env.BASE_URL}icons/oop.svg`
      ]
    },
    video: `${import.meta.env.BASE_URL}videos/java-game.mp4`,
  },
  {
    id: 6,
    title: "SQL Project",
    description: "Created a database for 1-month coursework on the 20/21 Champions League tournament.",
    longDescription: "Created a database for 1-month coursework on the 20/21 Champions League tournament.",
    coverImage: `${import.meta.env.BASE_URL}images/sql-script.png`,
    tags: ["SQL", "Database Design", "Data Analysis"],
    details: {
      challenge: "Designing and managing a database for a specific project.",
      solution: "Created a database using SQL and implemented data analysis techniques.",
      impact: "Enabled efficient data management and analysis."
    },
    technologies: ["SQL", "Database Design", "Data Analysis"],
    icons: {
      main: `${import.meta.env.BASE_URL}images/sql-script.png`,
      tech: [
        `${import.meta.env.BASE_URL}icons-correct/mysql.svg`,
        `${import.meta.env.BASE_URL}icons/databasedesign.svg`,
        `${import.meta.env.BASE_URL}icons/dataanalysis.svg`
      ]
    },
    video: `${import.meta.env.BASE_URL}videos/SQL Project.mp4`,
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