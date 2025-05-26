import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ProjectCard } from '../ProjectCard';
import { CarouselButton } from './CarouselButton';
import { CarouselDots } from './CarouselDots';

interface ProjectCarouselProps {
  projects: Project[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
  onProjectClick: (project: Project) => void;
}

export const ProjectCarousel = ({
  projects,
  currentIndex,
  onNext,
  onPrevious,
  onSelect,
  onProjectClick,
}: ProjectCarouselProps) => {
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    onNext();
  };

  const handlePrevious = () => {
    setDirection(-1);
    onPrevious();
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <CarouselButton direction="left" onClick={handlePrevious} />

        <div className="w-full max-w-3xl overflow-hidden">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <ProjectCard
                project={projects[currentIndex]}
                onClick={() => onProjectClick(projects[currentIndex])}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <CarouselButton direction="right" onClick={handleNext} />
      </div>

      <CarouselDots
        total={projects.length}
        current={currentIndex}
        onSelect={(index) => {
          setDirection(index > currentIndex ? 1 : -1);
          onSelect(index);
        }}
      />
    </div>
  );
};