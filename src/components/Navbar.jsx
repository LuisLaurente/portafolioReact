import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div 
        className={`hamburger ${isActive ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <ul className={`navbar-links ${isActive ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsActive(false)}>Inicio</a></li>
        <li><a href="#skills" onClick={() => setIsActive(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsActive(false)}>Proyectos</a></li>
        <li><a href="#contact" onClick={() => setIsActive(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;