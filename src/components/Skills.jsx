import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";
import { FaCode, FaServer, FaDatabase, FaTools, FaMobile, FaCloud } from "react-icons/fa";
import expressLogo from "../assets/expressjs.svg";
import api from "../assets/apipng.png";
import jwt from "../assets/jwt.png";
import node from "../assets/n2-2.webp";
import met from "../assets/met.png";
import web from "../assets/web.png";
import lite from "../assets/Sqlite-square-icon.svg.png";
import dev from "../assets/dev-removebg-preview.png";
import post from "../assets/postman-icon.svg";
import action from "../assets/github-actions-logo-png_seeklogo-428028.png";
import nginx from "../assets/3030173.webp";
import AWS from "../assets/Amazon_Web_Services_Logo.svg.png";
import VPS from "../assets/8047704.png";


const SkillCard = ({ title, icon, level }) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleImageError = (e) => {
    console.warn(`Failed to load icon for ${title}: ${icon}`);
    setImageError(true);
    e.target.style.display = 'none';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Generate fallback icon based on technology name
  const getFallbackIcon = (title) => {
    const iconMap = {
      'RESTful API': '🔌',
      'JWT Auth': '🔑',
      'Nodemailer': '📧',
      'JSON': '📄',
      'API Integration': '🔗',
      'AI APIs': '🤖',
      'Meteo APIs': '🌤️',
      'Webhooks': '🪝',
      'Postman': '📮',
      'VPS Deployment': '🖥️',
      'Chrome DevTools': '🔧',
      'React Native': '📱',
      'Android Studio': '📲',
      'Flutter': '🦋',
      'Dart': '🎯',
      'Firebase': '🔥',
      'Docker': '🐳',
      'GitHub Actions': '🔄',
      'Nginx': '🌐',
      'Redis': '⚡',
      'AWS': '☁️',
      'VPS Deployment': '🖥️',
      'Git': '📦',
      'Figma': '🎨',
      'VS Code': '💻',
      'XAMPP': '🔧',
      'MongoDB': '🍃',
      'MySQL': '🐬',
      'PostgreSQL': '🐘',
      'Redis': '⚡',
      'Node.js': '🟢',
      'Express.js': '🚂',
      'Python': '🐍',
      'PHP': '🐘',
      'Java': '☕',
      'HTML5': '🌐',
      'CSS3': '🎨',
      'JavaScript': '🟨',
      'React': '⚛️',
      'TypeScript': '📘',
      'Next.js': '▲',
      'Tailwind': '🌊',
      'Bootstrap': '🅱️',
      'Leaflet.js': '🗺️'
    };
    
    return iconMap[title] || '⚡';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-primary/30 p-3 sm:p-4 rounded-lg border border-secondary/20 hover:border-secondary/40 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 w-full cursor-pointer relative overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      <div className="relative z-10 flex flex-col items-center space-y-2 sm:space-y-3">
        <div className="relative group w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          {!imageError && (
            <img
              src={icon}
              alt={title}
              className={`w-10 h-10 sm:w-12 sm:h-12 object-contain filter brightness-90 group-hover:brightness-100
                         transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${
                           imageLoaded ? 'opacity-100' : 'opacity-0'
                         }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
              crossOrigin="anonymous"
            />
          )}
          {(imageError || !imageLoaded) && (
            <motion.div 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-lg flex items-center justify-center border border-secondary/40"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-secondary font-bold text-lg sm:text-xl">
                {getFallbackIcon(title)}
              </span>
            </motion.div>
          )}
          <motion.div
            className="absolute inset-0 bg-secondary/10 rounded-full blur-xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <motion.h3 
          className="text-sm sm:text-base font-medium text-textPrimary group-hover:text-secondary transition-colors text-center"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
};

const categoryMeta = [
  {
    icon: <FaCode className="w-5 h-5 mr-2" />,
    label: "Frontend",
    description: "Building beautiful, interactive user interfaces."
  },
  {
    icon: <FaServer className="w-5 h-5 mr-2" />,
    label: "Backend",
    description: "Server-side logic, APIs, and business rules."
  },
  {
    icon: <FaDatabase className="w-5 h-5 mr-2" />,
    label: "Database",
    description: "Data modeling, storage, and management."
  },
  {
    icon: <FaMobile className="w-5 h-5 mr-2" />,
    label: "Mobile",
    description: "Cross-platform mobile app development."
  },
  {
    icon: <FaTools className="w-5 h-5 mr-2" />,
    label: "Tools & Design",
    description: "Development tools and design systems."
  },
  {
    icon: <FaCloud className="w-5 h-5 mr-2" />,
    label: "DevOps & Cloud",
    description: "Containerization, orchestration, and cloud infrastructure."
  },
];

const SkillSection = ({ category, skills, description }) => {
  const getGridCols = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 'grid-cols-3 lg:grid-cols-4';
      if (window.innerWidth >= 768) return 'grid-cols-2 md:grid-cols-3';
    }
    return 'grid-cols-2';
  };

  return (
    <div className="space-y-6">
      <p className="text-textSecondary text-center max-w-2xl mx-auto text-sm sm:text-base">
        {description}
      </p>
      <div className={`grid ${getGridCols()} gap-3 sm:gap-4 md:gap-6`}>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        {
          title: "HTML5",
          icon: "https://cdn.svgporn.com/logos/html-5.svg",
          level: 95,
        },
        {
          title: "CSS3",
          icon: "https://cdn.svgporn.com/logos/css-3.svg",
          level: 90,
        },
      
        {
          title: "React",
          icon: "https://cdn.svgporn.com/logos/react.svg",
          level: 90,
        },
              {
          title: "Next.js",
          icon: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
          level: 85,
        },
          {
          title: "JavaScript",
          icon: "https://cdn.svgporn.com/logos/javascript.svg",
          level: 90,
        },
        {
          title: "TypeScript",
          icon: "https://cdn.svgporn.com/logos/typescript-icon.svg",
          level: 60,
        },
  
        {
          title: "Tailwind",
          icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          level: 85,
        },
        {
          title: "Bootstrap",
          icon: "https://cdn.svgporn.com/logos/bootstrap.svg",
          level: 88,
        },
        {
          title: "Leaflet.js",
          icon: "https://leafletjs.com/docs/images/logo.png",
          level: 90,
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          title: "Node.js",
          icon: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
          level: 85,
        },
        {
          title: "Express.js",
          icon: expressLogo,
          level: 85,
        },
            {
          title: "PHP",
          icon: "https://cdn.svgporn.com/logos/php.svg",
          level: 80,
        },
        {
          title: "Python",
          icon: "https://cdn.svgporn.com/logos/python.svg",
          level: 75,
        },
    
        {
          title: "Java",
          icon: "https://cdn.svgporn.com/logos/java.svg",
          level: 75,
        },
        {
          title: "Next.js API",
          icon: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
          level: 80,
        },
        {
          title: "RESTful API",
          icon: api,
          level: 90,
        },
        {
          title: "JWT Auth",
          icon: jwt,
          level: 85,
        },
        {
          title: "Nodemailer",
          icon: node ,
          level: 80,
        },
              {
          title: "AI API Integrations",
          icon: "https://cdn.svgporn.com/logos/openai-icon.svg",
          level: 80,
        },
        {
          title: "Meteo / Weather APIs",
          icon: met,
          level: 80,
        },
            {
          title: "Webhooks",
          icon: web,
          level: 80,
        },
      ],
    },
    {
      category: "Database",
      skills: [
        {
          title: "MongoDB",
          icon: "https://cdn.svgporn.com/logos/mongodb-icon.svg",
          level: 85,
        },
        {
          title: "MySQL",
          icon: "https://cdn.svgporn.com/logos/mysql-icon.svg",
          level: 80,
        },
        {
          title: "PostgreSQL",
          icon: "https://cdn.svgporn.com/logos/postgresql.svg",
          level: 75,
        },
          {
          title: "SQLite",
          icon: lite,
          level: 95,
        },
      ],
    },
    {
      category: "Mobile",
      skills: [
        {
          title: "Flutter",
          icon: "https://cdn.svgporn.com/logos/flutter.svg",
          level: 85,
        },
        {
          title: "Dart",
          icon: "https://cdn.svgporn.com/logos/dart.svg",
          level: 80,
        },
        {
          title: "Firebase",
          icon: "https://cdn.svgporn.com/logos/firebase.svg",
          level: 75,
        },
        {
          title: "Android Studio",
          icon: "https://cdn.svgporn.com/logos/android-icon.svg",
          level: 70,
        },
  
      ],
    },
    {
      category: "Tools & Design",
      skills: [
        {
          title: "Git",
          icon: "https://cdn.svgporn.com/logos/git-icon.svg",
          level: 85,
        },
              {
          title: "GitHub",
          icon: "https://cdn.svgporn.com/logos/github-icon.svg",
          level: 85,
        },
        {
          title: "Figma",
          icon: "https://cdn.svgporn.com/logos/figma.svg",
          level: 85,
        },
        {
          title: "VS Code",
          icon: "https://cdn.svgporn.com/logos/visual-studio-code.svg",
          level: 90,
        },
        {
          title: "XAMPP",
          icon: "https://cdn.svgporn.com/logos/xampp.svg",
          level: 90,
        },
        {
          title: "Chrome DevTools",
          icon: dev,
          level: 90,
        },
    
    

        {
          title: "Postman",
          icon: post,
          level: 90,
        },
    

      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        {
          title: "Docker",
          icon: "https://cdn.svgporn.com/logos/docker-icon.svg",
          level: 80,
        },
    
        {
          title: "GitHub Actions",
          icon: action ,
          level: 80,
        },
        {
          title: "Nginx",
          icon: nginx,
          level: 75,
        },
        {
          title: "Redis",
          icon: "https://cdn.svgporn.com/logos/redis.svg",
          level: 70,
        },
        {
          title: "AWS",
          icon: AWS,
          level: 70,
        },
        {
          title: "VPS Deployment",
          icon: VPS,
          level: 85,
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding relative w-full pb-24">
      <motion.div
        className="w-full px-4 md:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="heading text-center mb-12"
          variants={itemVariants}
        >
          Skills & Technologies
        </motion.h2>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
            {/* Tab Buttons */}
            <motion.div
              className="lg:w-64 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide"
              variants={itemVariants}
            >
              {skillCategories.map((cat, index) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-left border-b-2 lg:border-b-0 lg:border-l-4 whitespace-nowrap transition-all duration-300 rounded-lg mb-2 lg:mb-0 lg:mr-0 mr-2 sm:mr-3
                    ${
                      activeTab === index
                        ? "text-secondary border-secondary bg-secondary/10 shadow-md"
                        : "text-textSecondary border-transparent hover:text-secondary hover:bg-secondary/5"
                    }`}
                >
                  {/* Accent bar for active tab */}
                  {activeTab === index && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-secondary rounded-r-lg hidden lg:block transition-all duration-300" />
                  )}
                  <span className="mr-2">{categoryMeta[index].icon}</span>
                  <span className="truncate">{cat.category}</span>
                </button>
              ))}
            </motion.div>
            {/* Tab Content */}
            <motion.div className="flex-1 lg:pl-4" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={activeTab}
                className="space-y-4"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl text-secondary mr-3">
                    {categoryMeta[activeTab].icon}
                  </span>
                  <h3 className="text-2xl font-semibold text-secondary">
                    {skillCategories[activeTab].category}
                  </h3>
                  <div className="flex-1 ml-4 h-0.5 bg-secondary/60"></div>
                </div>
                <p className="text-textSecondary mb-6">
                  {categoryMeta[activeTab].description}
                </p>
                <SkillSection
                  category={skillCategories[activeTab].category}
                  skills={skillCategories[activeTab].skills}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Decorative Elements */}
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
      {/* Scroll Down Button - Positioned outside main content */} 
      <ScrollDown targetId="education" />
    </section>
  );
};

export default Skills;
