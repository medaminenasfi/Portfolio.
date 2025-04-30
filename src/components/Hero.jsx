import React from 'react';
import { motion } from 'framer-motion';

const ScrollDownButton = () => {
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={scrollToNextSection}
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex flex-col items-center space-y-2"
      >
        <span className="text-secondary text-sm tracking-wider">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1.5 h-3 bg-secondary rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
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
    <section className="min-h-screen flex items-center section-padding relative" id="home">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.p 
              variants={itemVariants}
              className="text-secondary mb-4"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold mb-4"
            >
              Mohamed Amine Nasfi
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-bold text-textSecondary mb-6"
            >
              I build things for the web.
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="max-w-xl text-textSecondary mb-8"
            >
              I'm a full-stack developer specializing in the MERN stack. Currently, I'm focused on
              building responsive and user-friendly web applications while pursuing my bachelor's
              degree in Business Intelligence.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-secondary text-secondary
                hover:bg-secondary/10 transition-colors rounded group relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-10"></div>
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-secondary text-primary hover:bg-secondary/90
                transition-colors rounded group relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-10"></div>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 border-2 border-secondary rounded-full"
              ></motion.div>
              
              {/* Profile Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-secondary/30 bg-primary/90">
                <img
                  src="/your-photo.jpg" // Replace with your photo path
                  alt="Mohamed Amine Nasfi"
                  className="w-full h-full object-cover rounded-full filter brightness-90 hover:brightness-100 transition-all duration-300"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-secondary/10 hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Floating Dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute w-3 h-3 bg-secondary rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${80 + i * 5}%`,
                  }}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <ScrollDownButton />

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed left-10 bottom-0 hidden lg:block"
      >
        <div className="flex flex-col items-center space-y-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-textSecondary hover:text-secondary hover:-translate-y-1 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-textSecondary hover:text-secondary hover:-translate-y-1 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <div className="h-24 w-px bg-textSecondary/50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;