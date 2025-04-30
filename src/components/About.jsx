import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-textSecondary">
              I'm a passionate full-stack developer currently in my third year of pursuing a bachelor's degree in Business Intelligence. With a strong foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js), I specialize in creating responsive and user-friendly web applications.
            </p>
            <p className="text-textSecondary">
              My journey in web development has led me to work on various projects, from e-commerce platforms to data conversion tools. I'm particularly interested in creating intuitive user interfaces and efficient backend systems.
            </p>
            <p className="text-textSecondary">
              Currently seeking opportunities for a final-year internship (PFE), I'm eager to apply my skills in a dynamic professional environment, whether it's in front-end, back-end, or full-stack development roles.
            </p>
          </div>
          <div className="relative group">
            <div className="relative z-10">
              <img
                src="/your-image.jpg" // You'll need to add your image
                alt="Profile"
                className="rounded-lg w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-secondary/20 rounded-lg group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="absolute -inset-4 border-2 border-secondary rounded-lg z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;