import React from 'react';
import { motion } from 'framer-motion';
import ScrollDown from './ScrollDown';
import profileImg from '../assets/Screenshot from 2025-07-19 18-44-01.png';
import Eco from '../assets/ec.png';
import xml from '../assets/xml.webp';
import comme from '../assets/ecommerce-online-shopping-vector-illustration_677179-93.webp';
import back from '../assets/Gemini_Generated_Image_hfkfoghfkfoghfkf.png';

const ProjectCard = ({ title, description, technologies, link, image }) => (
  <div className="group relative rounded-2xl overflow-hidden bg-primary/90 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-secondary/10 hover:-translate-y-2 hover:scale-[1.025] transform flex flex-col">
    {/* Project Image */}
    <div className="w-full h-56 overflow-hidden rounded-t-2xl">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
    {/* Card Content */}
    <div className="flex flex-col flex-1 justify-between p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-textPrimary mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-colors text-center font-semibold shadow-md"
      >
        View Project
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: " Backend –   E-commerce API",
      description: "A complete e-commerce backend API built with TypeScript.",
      technologies: ["Node.js", "Typescript", "MongoDb"],
      link: "https://github.com/medaminenasfi/E-commerce/tree/main/backend",
      image: back
    },
        {
      title: "Ecotourisme TN",
      description: "A Digital Platform for Eco-Tourism and Sustainable Travel in Tunisia",
      technologies: ["React.js", "Node.js", "Express.js"],
      link: "https://ecotourisme.laghazala.tn/",
      image: Eco
    },
    {
      title: "XML Generator",
      description: "Application for converting Excel files and SQL queries to XML format",
      technologies: ["React.js", "Node.js", "Excel API"],
      link: "#",
      image: xml
    },
    {
      title: "Glooms E-Commerce",
      description: "A modern e-commerce platform for clothing across all age groups",
      technologies: ["React.js", "Node.js", "MongoDB"],
      link: "#",
      image: comme
    },
    {
      title: "TraduCode",
      description: "Web application for converting algorithms into code seamlessly",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      image: profileImg
    }
  ];

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
    <section id="projects" className="section-padding relative">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="heading" variants={itemVariants}>
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 right-0 -z-10">
          <motion.div
            className="w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
      
      {/* Scroll Down Button */}
      <br/><br/>
      <ScrollDown targetId="skills" />
    </section>
  );
};

export default Projects;