import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="bg-primary/30 p-6 rounded-lg border border-secondary/20">
    <h3 className="text-xl font-semibold text-secondary mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-secondary/10 text-textPrimary rounded-lg
          hover:bg-secondary/20 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Oracle"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase"]
    },
    {
      title: "Machine Learning",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"]
    },
    {
      title: "Other Skills",
      skills: ["Agile", "SCRUM", "UI/UX Design", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;