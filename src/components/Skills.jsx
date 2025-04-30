import React from 'react';

const SkillCard = ({ title, icon, level }) => (
  <div className="bg-primary/30 p-4 rounded-lg border border-secondary/20 hover:border-secondary/50 
                  transition-all transform hover:-translate-y-1 hover:shadow-lg">
    <div className="flex flex-col items-center space-y-3">
      <img 
        src={icon} 
        alt={title} 
        className="w-10 h-10 object-contain filter brightness-90 hover:brightness-100" 
      />
      <h3 className="text-sm font-medium text-textPrimary">{title}</h3>
      <div className="w-full bg-primary/50 rounded-full h-1.5">
        <div 
          className="bg-secondary h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        {
          title: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
          level: 90
        },
        {
          title: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          level: 90
        },
        {
          title: "TypeScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          level: 80
        },
        {
          title: "HTML5",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
          level: 95
        },
        {
          title: "CSS3",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
          level: 90
        }
      ]
    },
    {
      category: "Backend",
      skills: [
        {
          title: "Node.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
          level: 85
        },
        {
          title: "Python",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
          level: 75
        },
        {
          title: "PHP",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
          level: 80
        },
        {
          title: "Java",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
          level: 75
        }
      ]
    },
    {
      category: "Database",
      skills: [
        {
          title: "MongoDB",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
          level: 85
        },
        {
          title: "MySQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
          level: 80
        },
        {
          title: "PostgreSQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
          level: 75
        }
      ]
    },
    {
      category: "Tools & Design",
      skills: [
        {
          title: "Git",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
          level: 85
        },
        {
          title: "Figma",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
          level: 85
        },
        {
          title: "VS Code",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
          level: 90
        }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-primary/5">
      <div className="container mx-auto">
        <h2 className="heading text-center mb-12">Skills & Technologies</h2>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-secondary ml-2 flex items-center">
                <span className="text-sm text-secondary opacity-70 mr-2">0{index + 1}.</span>
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-secondary mb-6">Other Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "RESTful APIs",
              "Responsive Design",
              "UI/UX Design",
              "Agile/Scrum",
              "Problem Solving",
              "Team Collaboration",
              "Clean Code",
              "Testing",
              "CI/CD",
              "Performance Optimization"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/30 rounded-full text-sm text-textSecondary
                         border border-secondary/20 hover:border-secondary/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;