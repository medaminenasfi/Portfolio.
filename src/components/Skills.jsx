import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";
import { FaCode, FaServer, FaDatabase, FaTools, FaMobile } from "react-icons/fa";

const SkillCard = ({ title, icon, level }) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageError = (e) => {
    console.warn(`Failed to load icon for ${title}: ${icon}`);
    setImageError(true);
    e.target.style.display = 'none';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-primary/30 p-4 rounded-lg border border-secondary/20 hover:border-secondary/50 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="relative group w-12 h-12 flex items-center justify-center">
          {!imageError && (
            <img
              src={icon}
              alt={title}
              className={`w-12 h-12 object-contain filter brightness-90 group-hover:brightness-100
                         transition-all duration-300 transform group-hover:scale-110 ${
                           imageLoaded ? 'opacity-100' : 'opacity-0'
                         }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
              crossOrigin="anonymous"
            />
          )}
          {(imageError || !imageLoaded) && (
            <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-lg flex items-center justify-center border border-secondary/40">
              <span className="text-secondary font-bold text-xs uppercase">
                {title.includes('.') ? title.split('.')[0].substring(0, 2) : title.substring(0, 2)}
              </span>
            </div>
          )}
          <div
            className="absolute inset-0 bg-secondary/10 rounded-full blur-xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
        <h3 className="text-base font-medium text-textPrimary group-hover:text-secondary transition-colors text-center">
          {title}
        </h3>
        <div className="w-full h-1.5 bg-primary/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-secondary rounded-full"
          />
        </div>
        <span className="text-sm text-textSecondary">{level}%</span>
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
];

const SkillSection = ({ category, skills, description }) => (
  <div className="space-y-6">
    <div className="flex items-center space-x-4">
      <h3 className="text-xl font-semibold text-secondary flex items-center">
        {categoryMeta.find((c) => c.label === category)?.icon}
        {category}
      </h3>
      <div className="h-px flex-grow bg-secondary/20"></div>
    </div>
    <p className="text-textSecondary mb-2 text-sm">{description}</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, skillIndex) => (
        <SkillCard key={skillIndex} {...skill} />
      ))}
    </div>
  </div>
);

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
          title: "JavaScript",
          icon: "https://cdn.svgporn.com/logos/javascript.svg",
          level: 90,
        },
        {
          title: "React",
          icon: "https://cdn.svgporn.com/logos/react.svg",
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
          icon: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
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
          icon: "https://cdn.svgporn.com/logos/express.svg",
          level: 85,
        },
        {
          title: "Python",
          icon: "https://cdn.svgporn.com/logos/python.svg",
          level: 75,
        },
        {
          title: "PHP",
          icon: "https://cdn.svgporn.com/logos/php.svg",
          level: 80,
        },
        {
          title: "Java",
          icon: "https://cdn.svgporn.com/logos/java.svg",
          level: 75,
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
        {
          title: "SQLite",
          icon: "https://cdn.svgporn.com/logos/sqlite.svg",
          level: 75,
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
    <section id="skills" className="section-padding relative w-full">
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
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Tab Buttons */}
            <motion.div
              className="md:w-56 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide"
              variants={itemVariants}
            >
              {skillCategories.map((cat, index) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center px-4 py-3 text-sm font-medium text-left border-b-2 md:border-b-0 md:border-l-4 whitespace-nowrap transition-all duration-300 rounded-lg mb-2 md:mb-0 md:mr-0 mr-2
                    ${
                      activeTab === index
                        ? "text-secondary border-secondary bg-secondary/10 shadow-md"
                        : "text-textSecondary border-transparent hover:text-secondary hover:bg-secondary/5"
                    }`}
                  style={{ minWidth: "160px" }}
                >
                  {/* Accent bar for active tab */}
                  {activeTab === index && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-secondary rounded-r-lg md:block hidden transition-all duration-300" />
                  )}
                  {categoryMeta[index].icon}
                  {cat.category}
                </button>
              ))}
            </motion.div>
            {/* Tab Content */}
            <motion.div className="flex-1" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={activeTab}
                className="space-y-4"
              >
                <SkillSection
                  category={skillCategories[activeTab].category}
                  skills={skillCategories[activeTab].skills}
                  description={categoryMeta[activeTab].description}
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
      {/* Scroll Down Button */} 
      <br /><br />
      <ScrollDown targetId="education" />
    </section>
  );
};

export default Skills;
