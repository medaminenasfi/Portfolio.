import React from "react";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="about" className="section-padding relative">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="heading text-center" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-textSecondary leading-relaxed">
              Hello! I'm Mohamed Amine, a passionate Full-Stack Developer with a
              bachelor's degree in Business Information Systems, specialized in
              Business Intelligence. My journey in web development began with a
              deep curiosity about how websites work a curiosity that has
              evolved into a focused and professional career.{" "}
            </p>
            <p className="text-textSecondary leading-relaxed">
              I specialize in building exceptional digital experiences using the
              MERN stack (MongoDB, Express.js, React, Node.js). I’m committed to
              creating efficient, scalable, and user-friendly applications that
              address real-world challenges.
            </p>
            <p className="text-textSecondary leading-relaxed">
              I'm currently seeking opportunities to contribute my skills in a
              dynamic professional environment  whether in front-end, back-end,
              or full-stack development roles.
            </p>
          </motion.div>

          {/* Image/Skills Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-primary/30 p-6 rounded-lg border border-secondary/20">
              <h3 className="text-xl font-semibold text-secondary mb-6">
                Key Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "JavaScript (ES6+)",
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Git & GitHub",
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4 text-secondary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-textSecondary">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -z-10 top-[20%] -right-4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10">
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

export default About;
