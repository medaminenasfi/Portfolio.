import React from 'react';
import { motion } from 'framer-motion';

const ScrollDown = ({ targetId }) => {
  const scrollToNext = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={scrollToNext}
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

export default ScrollDown;