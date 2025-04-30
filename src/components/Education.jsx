import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's degree in Business intelligence",
      school: "Higher School of Applied Sciences and Technology",
      location: "Gabes, Tunisia",
      period: "2022 - 2025",
      description: "Currently in third year, focusing on business intelligence and software development."
    },
    {
      degree: "Scientific Baccalaureate",
      school: "Abou Loubaba-Gabès High School",
      location: "Gabes, Tunisia",
      period: "2021 - 2022",
      description: "Completed scientific track with focus on mathematics and sciences."
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-primary/30 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-textPrimary">{edu.degree}</h3>
              <h4 className="text-secondary">{edu.school}</h4>
              <div className="flex justify-between text-textSecondary mb-4">
                <span>{edu.location}</span>
                <span>{edu.period}</span>
              </div>
              <p className="text-textSecondary">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;