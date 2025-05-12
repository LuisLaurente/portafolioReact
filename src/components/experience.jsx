import React from "react";
import "../styles/experience.css";
import investiImg from "../assets/images/investi.jpeg";
import ifurnitureImg from "../assets/images/ifurnuture.jpeg";

const experiences = [
  {
    company: "Investí",
    role: "Pasante de Desarrollo Web",
    date: "Marzo 2025 – Presente",
    description: [
      "Desarrollé el sitio institucional investiperu.com con React, aplicando buenas prácticas y estructura modular de componentes.",
      "Implementé diseño responsive, animaciones y mejoras visuales.",
      "Colaboré en la integración de formularios y navegación fluida."
    ],
    image: investiImg,
    isImageLeft: true
  },
  {
    company: "Ifurniture",
    role: "Pasante de Desarrollo Web",
    date: "Enero 2025 – Abril 2025",
    description: [
      "Integré Dropzone.js para carga de archivos eficiente.",
      "Implementé validación de correo en tiempo real con AJAX.",
      "Optimicé la experiencia del carrito de compras con feedback visual.",
      "Mejoré el diseño responsive y desarrollé una página one-page."
    ],
    image: ifurnitureImg,
    isImageLeft: false
  }
];

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      <h2>Experiencia</h2>
      {experiences.map((exp, index) => (
        <div
          className={`experience-item ${exp.isImageLeft ? "left" : "right"}`}
          key={index}
        >
          <div className="experience-image">
            <img src={exp.image} alt={exp.company} />
          </div>
          <div className="experience-text">
            <h3>{exp.role} <span>- {exp.company}</span></h3>
            <p className="date">{exp.date}</p>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;