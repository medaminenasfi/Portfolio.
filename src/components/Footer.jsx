import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary/90 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/medaminenasfi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="http://linkedin.com/in/mohamed-amine-nasfi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-secondary transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-textSecondary text-sm">
          Built with React & Tailwind CSS by Mohamed Amine Nasfi
        </p>
      </div>
    </footer>
  );
};

export default Footer;