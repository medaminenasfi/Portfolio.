import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ScrollDown = ({ targetId }) => {
  const scrollToNext = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shouldReduceMotion = useReducedMotion();

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="absolute bottom-4 sm:bottom-3 left-1/2 transform -translate-x-1/2 z-40"
      onClick={scrollToNext}
      role="button"
      tabIndex={0}
      onKeyDown={handleKey}
      aria-label="Scroll to next section"
    >
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [0, 8, 0],
        }}
        transition={shouldReduceMotion ? {} : {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex flex-col items-center space-y-1.5 sm:space-y-2 cursor-pointer touch-target"
      >
        <span className="text-[10px] sm:text-xs tracking-[0.2em] font-mono text-secondary/80">Scroll Down</span>
        <div className="flex h-[34px] w-[22px] items-center justify-center rounded-full border border-secondary/70 p-1 sm:h-9 sm:w-6 sm:border-2">
          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [0, 6, 0],
            }}
            transition={shouldReduceMotion ? {} : {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="h-2 w-1 rounded-full bg-secondary sm:h-2.5 sm:w-1.5"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollDown;