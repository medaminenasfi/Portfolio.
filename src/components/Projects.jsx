import React from 'react';

const ProjectCard = ({ title, description, technologies, link, image }) => (
  <div className="group relative rounded-lg overflow-hidden">
    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors z-10"></div>
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-textPrimary mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-secondary text-primary rounded-lg
        hover:bg-secondary/90 transition-colors text-center"
      >
        View Project
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
        {
      title: "Ecotourisme TN",
      description: "Application for converting Excel files and SQL queries to XML format",
      technologies: ["React.js", "Node.js", "Express.js"],
      link: "#",
      image: "/xml-preview.jpg"
    },
    {
      title: "XML Generator",
      description: "Application for converting Excel files and SQL queries to XML format",
      technologies: ["React.js", "Node.js", "Excel API"],
      link: "#",
      image: "/xml-preview.jpg"
    },
    {
      title: "Glooms E-Commerce",
      description: "A modern e-commerce platform for clothing across all age groups",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "#",
      image: "/glooms-preview.jpg" // You'll need to add project images
    },
    {
      title: "TraduCode",
      description: "Web application for converting algorithms into code seamlessly",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      image: "/traducode-preview.jpg"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;