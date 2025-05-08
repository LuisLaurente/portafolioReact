import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
