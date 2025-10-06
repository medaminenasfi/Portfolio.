import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollDown from './ScrollDown';
import profileImg from '../assets/Screenshot from 2025-07-19 18-44-01.png';
import Eco from '../assets/ec.png';
import xml from '../assets/xml.webp';
import comme from '../assets/ecommerce-online-shopping-vector-illustration_677179-93.webp';
import back from '../assets/Gemini_Generated_Image_hfkfoghfkfoghfkf.png';

const ProjectCard = ({ project, onClick }) => (
  <div 
    className="group relative rounded-2xl overflow-hidden bg-primary/90 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary/10 hover:-translate-y-2 hover:scale-[1.025] transform flex flex-col cursor-pointer"
    onClick={() => onClick(project)}
  >
    {/* Project Image */}
    <div className="w-full h-64 overflow-hidden rounded-t-2xl">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
    {/* Card Content */}
    <div className="flex flex-col flex-1 justify-between p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-textPrimary mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-3 py-1 bg-secondary/10 text-secondary/70 rounded-full text-sm">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
      <button className="inline-block px-6 py-2 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-colors text-center font-semibold shadow-md">
        View Details
      </button>
    </div>
  </div>
);

const Projects = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      id: 'backend-ecommerce',
      title: "Backend – E-commerce API",
      description: "A complete e-commerce backend API built with TypeScript, featuring user authentication, product management, order processing, and payment integration.",
      technologies: ["Node.js", "TypeScript", "MongoDB", "Express.js", "JWT", "Stripe API", "Bcrypt"],
      link: "https://github.com/medaminenasfi/E-commerce/tree/main/backend",
      image: back,
      features: [
        "User Authentication & Authorization",
        "Product CRUD Operations",
        "Shopping Cart Management",
        "Order Processing System",
        "Payment Integration with Stripe",
        "Admin Dashboard",
        "RESTful API Design"
      ],
      challenges: "Implementing secure payment processing and scalable database design",
      github: "https://github.com/medaminenasfi/E-commerce/tree/main/backend"
    },
    {
      id: 'ecotourisme',
      title: "Ecotourisme TN",
      description: "A comprehensive digital platform promoting eco-tourism and sustainable travel experiences in Tunisia with booking system and interactive maps.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Leaflet", "Socket.io"],
      link: "https://ecotourisme.laghazala.tn/",
      image: Eco,
      features: [
        "Interactive Tourism Maps",
        "Booking System",
        "Real-time Chat Support",
        "Multi-language Support",
        "Mobile Responsive Design",
        "Payment Gateway Integration",
        "Review & Rating System"
      ],
      challenges: "Integrating real-time features and optimizing for mobile performance",
      github: "https://github.com/medaminenasfi/ecotourisme"
    },
    {
      id: 'xml-generator',
      title: "XML Generator",
      description: "Advanced application for converting Excel files and SQL queries to XML format with custom schema validation and batch processing.",
      technologies: ["React.js", "Node.js", "Excel API", "XML Parser", "Multer", "Joi"],
      link: "#",
      image: xml,
      features: [
        "Excel to XML Conversion",
        "SQL Query to XML Export",
        "Custom Schema Validation",
        "Batch File Processing",
        "Download Management",
        "Error Handling & Logging",
        "Preview Before Export"
      ],
      challenges: "Handling large file uploads and complex XML schema validation",
      github: "https://github.com/medaminenasfi/xml-generator"
    },
    {
      id: 'glooms-ecommerce',
      title: "Glooms E-Commerce",
      description: "Modern full-stack e-commerce platform specializing in clothing for all age groups with advanced filtering and recommendation system.",
      technologies: ["React.js", "Node.js", "MongoDB", "Redux", "Tailwind CSS", "Cloudinary"],
      link: "#",
      image: comme,
      features: [
        "Product Catalog with Filters",
        "User Profiles & Wishlists",
        "Shopping Cart & Checkout",
        "Order Tracking",
        "Admin Panel",
        "Image Upload & Management",
        "Responsive Design"
      ],
      challenges: "Implementing complex product filtering and optimizing image loading",
      github: "https://github.com/medaminenasfi/glooms-ecommerce"
    },
    {
      id: 'traducode',
      title: "TraduCode",
      description: "Innovative web application that converts algorithmic pseudocode into actual programming code across multiple languages.",
      technologies: ["HTML", "CSS", "JavaScript", "Prism.js", "Monaco Editor", "Regex"],
      link: "#",
      image: profileImg,
      features: [
        "Multi-language Code Generation",
        "Syntax Highlighting",
        "Code Editor Integration",
        "Algorithm Visualization",
        "Export Functionality",
        "Code Validation",
        "Interactive Examples"
      ],
      challenges: "Parsing complex algorithms and generating syntactically correct code",
      github: "https://github.com/medaminenasfi/traducode"
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const start = currentIndex * itemsPerPage;
    return projects.slice(start, start + itemsPerPage);
  };

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

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
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-secondary/20 hover:bg-secondary/40 text-white p-3 rounded-full transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-secondary/20 hover:bg-secondary/40 text-white p-3 rounded-full transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div key={`${currentIndex}-${index}`} variants={itemVariants}>
                  <ProjectCard project={project} onClick={handleProjectClick} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-secondary' : 'bg-secondary/30'
                }`}
              />
            ))}
          </div>
        </div>
        
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