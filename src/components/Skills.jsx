import React from "react";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";

const SkillCard = ({ title, icon, level }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-primary/30 p-4 rounded-lg border border-secondary/20 hover:border-secondary/50 
              transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
  >
    <div className="flex flex-col items-center space-y-3">
      <div className="relative group">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 object-contain filter brightness-90 group-hover:brightness-100
                     transition-all duration-300 transform group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-secondary/10 rounded-full blur-xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>
      <h3 className="text-base font-medium text-textPrimary group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <div className="w-full h-1.5 bg-primary/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-secondary rounded-full"
        />
      </div>
      <span className="text-sm text-textSecondary">{level}%</span>
    </div>
  </motion.div>
);

const SkillSection = ({ category, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="space-y-6"
  >
    <div className="flex items-center space-x-4">
      <h3 className="text-xl font-semibold text-secondary">
        <span className="text-sm opacity-50 mr-2">0{index + 1}.</span>
        {category}
      </h3>
      <div className="h-px flex-grow bg-secondary/20"></div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, skillIndex) => (
        <SkillCard key={skillIndex} {...skill} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        {
          title: "HTML5",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
          level: 95,
        },
        {
          title: "CSS3",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
          level: 90,
        },
        {
          title: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          level: 90,
        },
        {
          title: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
          level: 90,
        },

        {
          title: "TypeScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          level: 80,
        },

        {
          title: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/tailwindcss/tailwindcss-original.svg",
          level: 85,
        },
        {
          title: "Bootstrap",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
          level: 88,
        },
        {
          title: "Leafler.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
          level: 90,
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          title: "Node.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
          level: 85,
        },
        {
          title: "Express.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/express/express-original-wordmark.svg",
          level: 85,
        },
        {
          title: "Python",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
          level: 75,
        },
        {
          title: "PHP",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
          level: 80,
        },
        {
          title: "Java",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
          level: 75,
        },
      ],
    },
    {
      category: "Database",
      skills: [
        {
          title: "MongoDB",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
          level: 85,
        },
        {
          title: "MySQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
          level: 80,
        },
        {
          title: "PostgreSQL",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
          level: 75,
        },
      ],
    },
    {
      category: "Tools & Design",
      skills: [
        {
          title: "Git",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
          level: 85,
        },
        {
          title: "Figma",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
          level: 85,
        },
        {
          title: "VS Code",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
          level: 90,
        },
        {
          title: "XAMPP",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
          level: 90,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center section-padding relative"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Title */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="heading">Skills & Technologies</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              levels across different domains.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, index) => (
              <SkillSection key={index} {...category} index={index} />
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/30 p-8 rounded-lg border border-secondary/20"
          >
            <h3 className="text-xl font-semibold text-secondary mb-6">
              Other Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                  "Frontend",
                "Backend",
                "Full Stack",
                "RESTful APIs",
                "Responsive Design",
                "UI/UX Design",
                "Agile/Scrum",
                "Problem Solving",
                "Team Collaboration",
                "Clean Code",
                "Testing",
                "CI/CD",
                "Performance Optimization",
                "Cross-Browser Compatibility",
                "Mobile-First Design",
              
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-secondary/10 rounded-full text-sm text-textSecondary
                           border border-secondary/20 hover:border-secondary/50 transition-all
                           hover:text-secondary cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 -z-10">
          <motion.div
            className="w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>

      {/* Scroll Down Button */}
      <ScrollDown targetId="education" />
    </section>
  );
};

export default Skills;
