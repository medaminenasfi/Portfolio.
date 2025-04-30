import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-textSecondary mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-6">
              <a href="mailto:medaminenasfy@gmail.com" 
                 className="flex items-center text-textPrimary hover:text-secondary transition-colors">
                <span className="mr-2">📧</span>
                medaminenasfy@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <a href="tel:+21627711810" 
                 className="flex items-center text-textPrimary hover:text-secondary transition-colors">
                <span className="mr-2">📱</span>
                +216 27711810
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;