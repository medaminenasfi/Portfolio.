import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  // Inside the Contact component:
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-primary/30">
      <div className="container mx-auto">
        <h2 className="heading text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-primary/40 p-6 rounded-lg border border-secondary/20">
              <h3 className="text-xl font-semibold text-secondary mb-4">Contact Information</h3>
              <div className="space-y-3">
                <a href="mailto:medaminenasfy@gmail.com" 
                   className="flex items-center text-textPrimary hover:text-secondary transition-colors">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  medaminenasfy@gmail.com
                </a>
                <a href="tel:+21627711810" 
                   className="flex items-center text-textPrimary hover:text-secondary transition-colors">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +216 27711810
                </a>
                <div className="flex items-center text-textPrimary">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" />
                  </svg>
                  Gabes, Tunisia
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary/40 p-6 rounded-lg border border-secondary/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-textPrimary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-secondary/20 rounded-lg 
                           focus:outline-none focus:border-secondary text-textPrimary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textPrimary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-secondary/20 rounded-lg 
                           focus:outline-none focus:border-secondary text-textPrimary"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-textPrimary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-primary/50 border border-secondary/20 rounded-lg 
                           focus:outline-none focus:border-secondary text-textPrimary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textPrimary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-primary/50 border border-secondary/20 rounded-lg 
                           focus:outline-none focus:border-secondary text-textPrimary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-secondary text-primary font-semibold rounded-lg
                         hover:bg-secondary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;