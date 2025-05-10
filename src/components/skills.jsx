import React from 'react';
import "../styles/skills.css";

const techSkills = [
// Frontend esencial
  { id: 'html', name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 'css', name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id: 'js', name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  
  // Frameworks principales
  { id: 'laravel', name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { id: 'react', name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  
  // Backend y herramientas clave
  { id: 'php', name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  
  // Herramientas de desarrollo
  { id: 'git', name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { id: 'firebase', name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  
  // Diseño/otros
  { id: 'photoshop', name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          Skills
        </h2>
        
        <div className="skills-bar">
          {techSkills.map((tech) => (
            <div key={tech.id} className="skill-item">
              <div className="skill-icon-container">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="skill-icon"
                  loading="lazy"
                />
              </div>
              <span className="skill-name">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;