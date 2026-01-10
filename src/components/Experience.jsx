import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Freelance",
      positions: [
            {
          title: "Full-Stack Web Developer - Club Rendement+",
          date: "01/2026 - Present ",
          location: "Remote",
          duties: [
            "Designed and structured a real-estate investment platform for high-yield rental opportunities in Tunisia",
            "Defined product vision and MVP roadmap (V1 → V2) with investor-focused user journeys",
            "Built scalable frontend architecture (Landing, Investor Profile, Journal, Community)",
            "Developed backend logic for roles, leads, and admin dashboard functionality",
          ],
        },
        {
          title: "Full-Stack Web Developer - Advanced Implant Services (AIS)",
          date: "12/2025",
          location: "Remote",
          duties: [
            "Designed and structured official website for AIS, exclusive OSSTEM Implant representative in Tunisia",
            "Created high-credibility medical UX with complex product catalogs (implants, digital solutions, equipment)",
            "Integrated scientific and technical content from OSSTEM France into clear digital experience",
            "Designed conversion flows for quotes, contact, and product discovery for medical professionals",
          ],
        },
    
      ],
    },
    {
      company: "Laghazala du Désert",
      positions: [
        {
          title: "Full-Stack Developer (PFE Internship)",
          date: "02/2025 - 06/2025",
          location: "Gabes, Tunisia",
          duties: [
            "Developed a web platform for managing eco-friendly hiking tours in Tunisia",
            "Integrated interactive maps with Leaflet, weather filtering, reservations, and guide/artisan spaces",
            "Built application using React.js, Node.js, Express.js, MongoDB, JWT, SSL, and Postman",
          ],
        },
      ],
    },
    {
      company: "Tunisian Chemical Group",
      positions: [
        {
          title: "Web Developer",
          date: "07/2024 - 08/2024",
          location: "Tunisia",
          duties: [
            "Developed a modern e-commerce platform using React.js",
            "Created an XML generator from Excel files, web forms, and SQL queries",
            "Developed a user-friendly web interface for data entry and XML conversion",
            "Collaborated with design team on UI/UX improvements",
          ],
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
                className="space-y-8"
              >
                {experiences[activeTab].positions.map((position, posIndex) => (
                  <div key={posIndex} className={posIndex > 0 ? "pt-8 border-t border-textSecondary/20" : ""}>
                    <h3 className="text-xl font-semibold text-textPrimary">
                      {position.title}{" "}
                      <span className="text-secondary">
                        @ {experiences[activeTab].company}
                      </span>
                    </h3>
                    <p className="text-textSecondary mt-2">
                      {position.date} | {position.location}
                    </p>
                    <ul className="space-y-4 mt-4">
                      {position.duties.map((duty, dutyIndex) => (
                        <motion.li
                          key={dutyIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: dutyIndex * 0.1 }}
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
                  </div>
                ))}
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
      
      {/* Scroll Down Button */}
      <br/><br/>
      <ScrollDown targetId="projects" />
    </section>
  );
};

export default Experience;
