import React from "react";
import "../styles/inicio.css";
import profileImage from "../assets/images/laurentz.png"; // Asegúrate de tener una imagen de perfil en esta ubicación

const Inicio = () => {
  return (
    <div className="hero">
        <div className="disponible">
            <p>Disponible para trabajar</p>
        </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hola, soy <span>Luis Laurente</span>
          </h1>
          <h2>Desarrollador Web Full Stack</h2>
          <p>
            Especializado en crear experiencias web únicas y funcionales.<br></br>
            Transformo ideas en aplicaciones dinámicas y atractivas.
          </p>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Luis Laurente" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
