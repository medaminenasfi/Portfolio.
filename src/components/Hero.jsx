import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding" id="home">
      <div className="container mx-auto">
        <p className="text-secondary mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Mohamed Amine Nasfi
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-textSecondary mb-6">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-textSecondary mb-8">
          I'm a full-stack developer specializing in the MERN stack. Currently, I'm focused on
          building responsive and user-friendly web applications while pursuing my bachelor's
          degree in Business Intelligence.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 border-2 border-secondary text-secondary
          hover:bg-secondary/10 transition-colors rounded"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;