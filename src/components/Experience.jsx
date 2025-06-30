import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Laghazala du Désert",
      title: "Full-Stack Developer (PFE Internship)",
      date: "02/2025 - 06/2025",
      location: "Gabes, Tunisia",
      duties: [
        "Developed a web platform for managing eco-friendly hiking tours in Tunisia",
        "Integrated interactive maps with Leaflet, weather filtering, reservations, and guide/artisan spaces",
        "Built the application using React.js, Node.js, Express.js, MongoDB, JWT, SSL, and Postman",
      ],
    },
    {
      company: "Tunisian Chemical Group",
      title: "Web Developer",
      date: "07/2024 - 08/2024",
      location: "Tunisia",
      duties: [
        "Developed a modern e-commerce platform using React.js",
        "Created an XML generator from Excel files, web forms, and SQL queries",
        "Developed a user-friendly web interface for data entry and XML conversion",
        "Collaborated with the design team on UI/UX improvements",
      ],
    },
    {
      company: "IDEAL CLUB ESSAT",
      title: "Web Development Training",
      date: "02/2023 - 02/2024",
      location: "Gabes, Tunisia",
      duties: [
        "Participated in hands-on web development projects",
        "Improved communication and teamwork skills",
        "Engaged in leadership development activities",
        "Learned modern web development practices",
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
    <section id="experience" className="section-padding relative">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="heading text-center mb-12"
          variants={itemVariants}
        >
          Where I've Worked
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab Buttons */}
            <motion.div
              className="md:w-48 flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide"
              variants={itemVariants}
            >
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-sm font-medium text-left border-b-2 md:border-b-0 md:border-l-2 
                    whitespace-nowrap transition-all duration-300 ${
                      activeTab === index
                        ? "text-secondary border-secondary bg-secondary/10"
                        : "text-textSecondary border-textSecondary/20 hover:text-secondary hover:border-secondary"
                    }`}
                >
                  {exp.company}
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
                <h3 className="text-xl font-semibold text-textPrimary">
                  {experiences[activeTab].title}{" "}
                  <span className="text-secondary">
                    @ {experiences[activeTab].company}
                  </span>
                </h3>
                <p className="text-textSecondary">
                  {experiences[activeTab].date} |{" "}
                  {experiences[activeTab].location}
                </p>
                <ul className="space-y-4">
                  {experiences[activeTab].duties.map((duty, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-2 text-textSecondary"
                    >
                      <svg
                        className="w-5 h-5 mt-1 text-secondary flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{duty}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 -z-10">
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
    </section>
  );
};

export default Experience;
