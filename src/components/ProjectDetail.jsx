import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';

const ProjectDetail = () => {
  // const { id } = useParams();
  useParams(); // Call useParams if you need to trigger route updates, otherwise remove this line.
  const location = useLocation();
  const navigate = useNavigate();
  
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Project not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div className="min-h-screen bg-primary text-white">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-secondary/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="container mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-textPrimary mb-8 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium border border-secondary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Image */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 p-6 bg-primary/50 rounded-xl border border-secondary/10"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-textPrimary">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Challenges Section */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl p-8 border border-secondary/20">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Technical Challenges</h2>
            <p className="text-lg text-textPrimary leading-relaxed">
              {project.challenges}
            </p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-primary/50 rounded-2xl p-12 border border-secondary/10">
            <h2 className="text-3xl font-bold mb-6">Interested in This Project?</h2>
            <p className="text-lg text-textPrimary mb-8 max-w-2xl mx-auto">
              Want to learn more about the technical implementation or discuss similar projects? Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-secondary/20 hover:bg-secondary/30 text-secondary rounded-lg transition-colors font-semibold"
                >
                  <Github size={20} />
                  <span>View Source Code</span>
                </a>
              )}
              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-secondary hover:bg-secondary/90 text-primary rounded-lg transition-colors font-semibold"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default ProjectDetail;