import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGlobe, FaMobile, FaCode } from 'react-icons/fa';
import ScrollDown from './ScrollDown';
import { projects } from '../data/projectsData';

const ProjectCard = ({ project, onClick }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(project);
    }
  };

  return (
    <motion.div 
      className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl bg-[#071827] border border-[#0e2933] shadow-[inset_0_6px_18px_rgba(2,6,23,0.85),0_20px_60px_rgba(2,6,23,0.6)] text-white"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={handleKey}
      aria-label={`Open project ${project.title} details`}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, type: "spring", stiffness: 300 }}
    >
    {/* Animated gradient overlay */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
    />
    
    {/* Project Image */}
    <div className="relative h-56 w-full overflow-hidden sm:h-64 md:h-72 lg:h-80">
      <motion.img 
        src={project.image} 
        alt={project.title} 
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
      />
      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    {/* Category Badge */}
    <motion.div 
      className="absolute right-3 top-3 z-20"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <span className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] shadow-lg backdrop-blur-md ${
        project.category === 'web' 
          ? 'bg-blue-500/90 text-white ring-2 ring-blue-300/50' 
          : 'bg-green-500/90 text-white ring-2 ring-green-300/50'
      }`}>
        {project.category === 'web' ? <FaGlobe className="w-3 h-3" /> : <FaMobile className="w-3 h-3" />}
        {project.category === 'web' ? 'Web' : 'Mobile'}
      </span>
    </motion.div>
    
    {/* Card Content */}
    <div className="relative z-10 flex flex-1 flex-col justify-between p-5 sm:p-6 lg:p-8">
      <motion.h3 
        className="mb-3 text-lg font-semibold leading-tight text-[#64ffda] transition-colors duration-300 line-clamp-2 group-hover:text-[#7ef3d3] sm:text-xl lg:text-2xl"
        whileHover={{ x: 4 }}
      >
        {project.title}
      </motion.h3>
      <p className="mb-4 text-sm leading-relaxed text-[#a8b3bd] line-clamp-3 sm:mb-5 sm:text-base lg:text-[15px]">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2 sm:mb-5 lg:mb-6">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <motion.span
            key={index}
            className="rounded-full border border-secondary/25 bg-secondary/15 px-2.5 py-1 text-[11px] font-medium text-secondary sm:px-3 sm:py-1.5 sm:text-xs"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {tech}
          </motion.span>
        ))}
        {project.technologies.length > 3 && (
          <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-[11px] font-medium text-secondary/70 sm:px-3 sm:py-1.5 sm:text-xs">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
      <motion.button 
        className="group/btn relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#63f7d0] to-[#3fe6c1] px-4 py-3 text-sm font-semibold text-[#042422] shadow-2xl transition-transform duration-300 sm:px-6 sm:py-3.5 sm:text-base touch-target focus-ring border border-[#0d3a35]"
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={`View details for ${project.title}`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          View Details
          <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
            transition={shouldReduceMotion ? {} : { duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </motion.svg>
        </span>
        {/* Button shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.button>
    </div>
  </motion.div>

  );
};

const Projects = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaCode className="w-4 h-4" /> },
    { id: 'web', label: 'Web Development', icon: <FaGlobe className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile Development', icon: <FaMobile className="w-4 h-4" /> }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3);
        return;
      }

      if (window.innerWidth >= 768) {
        setItemsPerView(2);
        return;
      }

      setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (filteredProjects.length <= itemsPerView) return undefined;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [filteredProjects.length, activeCategory, itemsPerView]);

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (currentIndex > filteredProjects.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex, filteredProjects.length]);

  const handleKeyNav = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }
  };

  const getVisibleProjects = () => {
    if (filteredProjects.length === 0) return [];

    return Array.from({ length: itemsPerView }).map((_, offset) => {
      const projectIndex = (currentIndex + offset) % filteredProjects.length;
      return filteredProjects[projectIndex];
    });
  };

  const visibleProjects = getVisibleProjects();
  const totalPages = filteredProjects.length > 0
    ? Math.ceil(filteredProjects.length / itemsPerView)
    : 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden pb-16 sm:pb-20 lg:pb-24">
      <motion.div
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="heading" variants={itemVariants} id="projects-heading">
          Featured Projects
        </motion.h2>

        <motion.p
          className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-textSecondary sm:mb-12 sm:text-base lg:text-lg"
          variants={itemVariants}
        >
          A selected set of projects with responsive layouts, live demos, and route-based detail pages.
        </motion.p>

        <motion.div
          className="mb-8 flex flex-nowrap gap-2 overflow-x-auto pb-2 sm:mb-10 sm:flex-wrap sm:justify-center sm:gap-4 sm:overflow-visible lg:mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
                activeCategory === category.id
                  ? 'bg-secondary text-primary shadow-lg shadow-secondary/25 scale-105'
                  : 'bg-primary/50 text-textSecondary hover:bg-secondary/20 hover:text-secondary'
              }`}
            >
              {category.icon}
              {category.label}
              <span className={`ml-1 rounded-full px-2 py-0.5 text-xs ${
                activeCategory === category.id
                  ? 'bg-primary/20 text-primary'
                  : 'bg-secondary/20 text-secondary'
              }`}>
                {category.id === 'all'
                  ? projects.length
                  : projects.filter((project) => project.category === category.id).length}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="relative mx-auto w-full overflow-visible px-0 sm:px-2 lg:px-10">
          {filteredProjects.length > itemsPerView && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)}
                className="absolute left-0 top-1/2 z-20 hidden -translate-x-2 -translate-y-1/2 rounded-full bg-secondary/20 p-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1/2 hover:bg-secondary/35 hover:shadow-secondary/20 sm:-translate-x-3 md:block touch-target focus-ring"
                aria-label="Previous project"
              >
                <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)}
                className="absolute right-0 top-1/2 z-20 hidden translate-x-2 -translate-y-1/2 rounded-full bg-secondary/20 p-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1/2 hover:bg-secondary/35 hover:shadow-secondary/20 sm:translate-x-3 md:block touch-target focus-ring"
                aria-label="Next project"
              >
                <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* ARIA live region for screen readers */}
          <div className="sr-only" aria-live="polite">Showing {Math.min(filteredProjects.length, currentIndex + 1)} of {filteredProjects.length} projects</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentIndex}-${itemsPerView}`}
              ref={containerRef}
              tabIndex={0}
              onKeyDown={handleKeyNav}
              aria-labelledby="projects-heading"
              className={`grid gap-4 sm:gap-5 lg:gap-6 ${itemsPerView === 1 ? 'grid-cols-1' : itemsPerView === 2 ? 'md:grid-cols-2' : 'lg:grid-cols-3'}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {visibleProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants} className="w-full">
                  <ProjectCard project={project} onClick={handleProjectClick} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

        {filteredProjects.length === 0 && (
          <motion.div className="py-20 text-center" variants={itemVariants}>
            <div className="mb-4 text-6xl">🚧</div>
            <h3 className="mb-2 text-xl font-semibold text-textSecondary">
              Coming Soon!
            </h3>
            <p className="text-textSecondary">
              {activeCategory === 'mobile'
                ? 'Mobile projects are currently in development.'
                : 'No projects found in this category.'}
            </p>
          </motion.div>
        )}

        <div className="absolute right-0 top-1/2 -z-10 hidden md:block">
          <motion.div
            className="h-96 w-96 rounded-full bg-secondary/5 blur-3xl"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.22, 0.08],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </motion.div>

      <ScrollDown targetId="skills" />
    </section>
  );
};

export default Projects;