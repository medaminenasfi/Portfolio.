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
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center section-padding relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden w-full" id="home">
      {/* Animated Coding Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center w-full">
        <motion.pre
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0.12, 0.18, 0.12], y: [40, 0, 40] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-mono text-secondary/70 whitespace-pre leading-snug select-none max-w-4xl mx-auto px-2 opacity-20"
          style={{ userSelect: 'none' }}
        >{`
const hero = {
  name: "Mohamed Amine Nasfi",
  role: "Full-Stack Developer",
  stack: ["MongoDB", "Express.js", "React", "Node.js"],
  focus: "Building responsive and user-friendly web applications",
  contact: "#contact",
  projects: "#projects"
};

function buildWeb() {
  return hero.stack.map(tech => \`Building with \${tech}\`);
}
`}</motion.pre>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full gap-10 md:gap-20 px-4 z-10">
        {/* Premium Professional Photo Design - Right Side, Larger */}
        <div className="relative flex flex-col items-center justify-center mb-8 md:mb-0 md:mt-0 mt-8">
          {/* Animated Blurred Gradient Accent */}
          <motion.div
            className="absolute -z-10 top-1/2 left-1/2 w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full blur-2xl bg-gradient-to-br from-secondary/30 via-primary/30 to-secondary/10"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          />
          {/* Animated Gradient Border Ring */}
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-secondary via-primary to-secondary shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-primary/80 flex items-center justify-center">
              <img
                src={require('../assets/photo.png')}
                alt="Mohamed Amine Nasfi"
                className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_rgba(236,72,153,0.3)]"
                style={{ background: 'transparent' }}
              />
            </div>
            {/* Animated Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-secondary/30 pointer-events-none"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
            />
          </motion.div>
        </div>
        {/* Hero Text Content - Left Side */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.p 
              variants={itemVariants}
              className="text-secondary text-lg sm:text-xl tracking-widest font-semibold mb-2 font-mono"
            >
              Hi, my name is
            </motion.p>
            <motion.h1 
              variants={itemVariants}
              className="text-white text-4xl sm:text-6xl font-extrabold mb-2 drop-shadow-lg font-mono"
            >
              Mohamed Amine Nasfi
            </motion.h1>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-bold text-textSecondary mb-4 font-mono"
            >
              I build things for web & mobile.
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="max-w-xl text-textSecondary text-lg sm:text-xl mb-8 leading-relaxed font-mono"
            >
              I'm a full-stack developer specializing in the <span className="text-secondary font-semibold">MERN stack</span> and <span className="text-secondary font-semibold">Flutter</span>. Currently, I'm focused on building <span className="text-secondary font-semibold">responsive web applications</span> and <span className="text-secondary font-semibold">cross-platform mobile apps</span>.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              {/* Enhanced Get In Touch Button */}
              <motion.a
                href="#contact"
                className="group relative px-8 py-3 bg-gradient-to-r from-transparent to-transparent border-2 border-secondary text-secondary font-bold rounded-xl overflow-hidden transition-all duration-300 font-mono shadow-[0_0_20px_rgba(244,114,182,0.3)] hover:shadow-[0_0_30px_rgba(244,114,182,0.6)] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                
                {/* Button text with icon */}
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </span>
                
                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-secondary/60 group-hover:border-white transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-secondary/60 group-hover:border-white transition-colors duration-300" />
              </motion.a>

              {/* Enhanced View Projects Button */}
              <motion.a
                href="#projects"
                className="group relative px-8 py-3 bg-gradient-to-r from-secondary via-secondary to-secondary text-white font-bold rounded-xl overflow-hidden transition-all duration-300 font-mono shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_0_40px_rgba(244,114,182,0.8)] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Button text with icon */}
                <span className="relative z-10 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                  </svg>
                  View Projects
                </span>
                
                {/* Geometric decorations */}
                <div className="absolute top-1 left-1 w-6 h-6 border-2 border-white/30 rounded-full group-hover:border-primary/60 group-hover:rotate-180 transition-all duration-500" />
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-white/20 rounded group-hover:bg-primary/40 group-hover:rotate-45 transition-all duration-500" />
              </motion.a>

              {/* Premium Upwork Hire Me Button */}
              <motion.a
                href="https://www.upwork.com/freelancers/~017cad0a2a355873b2?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-500 font-mono shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/40"
                whileHover={{ scale: 1.1, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-green-400/50 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Button text with icon */}
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z"/>
                  </svg>
                  Hire Me
                </span>
                
                {/* Sparkle effects */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </motion.a>
            </motion.div>
            
            {/* Freelance Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center md:justify-start gap-2 mt-6"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"
              />
              <span className="text-green-400 font-semibold text-sm font-mono">Available for Freelance Projects</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-green-400"
              >
                ⚡
              </motion.span>
            </motion.div>
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
          <a href="https://github.com/medaminenasfi" target="_blank" rel="noopener noreferrer"
             className="text-textSecondary hover:text-secondary hover:-translate-y-1 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-amine-nasfi/" target="_blank" rel="noopener noreferrer"
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