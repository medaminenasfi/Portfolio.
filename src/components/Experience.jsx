import React from 'react';

const ExperienceCard = ({ title, company, date, location, descriptions }) => (
  <div className="bg-primary/30 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors">
    <h3 className="text-xl font-semibold text-textPrimary">{title}</h3>
    <h4 className="text-secondary mb-2">{company}</h4>
    <div className="flex justify-between text-textSecondary mb-4">
      <span>{date}</span>
      <span>{location}</span>
    </div>
    <ul className="space-y-2">
      {descriptions.map((desc, index) => (
        <li key={index} className="flex items-start">
          <span className="text-secondary mr-2">▹</span>
          <span className="text-textSecondary">{desc}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Tunisian Chemical Group",
      date: "07/2024 - 08/2024",
      location: "Tunisia",
      descriptions: [
        "Developed a modern e-commerce platform using React.js",
        "Designed a user-friendly interface with intuitive navigation",
        "Implemented dynamic features enhancing user engagement"
      ]
    },
    {
      title: "Designer Intern",
      company: "AYPRINT",
      date: "06/2023 - 09/2023",
      location: "Tunisia",
      descriptions: [
        "Collaborated with the design team on creative concepts",
        "Contributed to the development of visual content for print materials",
        "Managed communication with customers and partners"
      ]
    },
    {
      title: "Web Development Training",
      company: "IDEAL CLUB ESSAT",
      date: "02/2023 - 02/2024",
      location: "Gabes, Tunisia",
      descriptions: [
        "Participated in hands-on web development projects",
        "Improved communication and teamwork skills",
        "Engaged in leadership development activities"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;