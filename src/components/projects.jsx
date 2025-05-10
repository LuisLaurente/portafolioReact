import React, { useState } from "react";
import "../styles/projects.css";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";

const Project = () => {
    // Lista de proyectos con sus detalles
    const projectsList = [
        {
            id: 1,
            title: "Portfolio Personal",
            description: "Sitio web personal para mostrar mis proyectos y habilidades.",
            image: project2,
            technologies: ["React", "CSS", "JavaScript"],
            category: "front"
        },
        {
            id: 2,
            title: "API de Gestión",
            description: "API RESTful para gestionar usuarios y recursos.",
            image: project3,
            technologies: ["Node.js", "Express", "MongoDB"],
            category: "back"
        },
        {
            id: 3,
            title: "E-commerce",
            description: "Tienda online completa con carrito de compras.",
            image: project4,
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            category: "full"
        },
        {
            id: 4,
            title: "Landing Page",
            description: "Página de aterrizaje para una startup de tecnología.",
            image: project3,
            technologies: ["HTML", "CSS", "JavaScript"],
            category: "front"
        },
        {
            id: 5,
            title: "Sistema de Autenticación",
            description: "Backend para autenticación con JWT y OAuth.",
            image: project4,
            technologies: ["Node.js", "Express", "JWT"],
            category: "back"
        }
    ];

    // Estado para controlar el filtro activo
    const [activeFilter, setActiveFilter] = useState("all");

    // Función para filtrar proyectos según la categoría seleccionada
    const filteredProjects = activeFilter === "all" 
        ? projectsList 
        : projectsList.filter(project => project.category === activeFilter);

    return (
        <div className="projects-container">
            <h1>Proyectos</h1>
            {/* Navbar para filtrar proyectos */}
            <div className="containerMiniNavBar">
                <ul className="miniNavBar">
                    <li>
                        <button 
                            className={activeFilter === "all" ? "active" : ""}
                            onClick={() => setActiveFilter("all")}
                        >
                            All
                        </button>
                    </li>
                    <li>
                        <button 
                            className={activeFilter === "front" ? "active" : ""}
                            onClick={() => setActiveFilter("front")}
                        >
                            Front
                        </button>
                    </li>
                    <li>
                        <button 
                            className={activeFilter === "back" ? "active" : ""}
                            onClick={() => setActiveFilter("back")}
                        >
                            Back
                        </button>
                    </li>
                </ul>
            </div>
            
            {/* Grid de proyectos */}
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        {/* Imagen del proyecto */}
                        <img 
                            src={project.image} 
                            alt={`Imagen de ${project.title}`}
                            className="project-image"
                        />
                        <div className="card-content">
                            {/* Título del proyecto */}
                            <h2>{project.title}</h2>
                            
                            {/* Descripción del proyecto */}
                            <p className="project-description">{project.description}</p>
                            
                            {/* Tecnologías utilizadas */}
                            <div className="tech-stack">
                                <p className="tech-title">Tecnologías:</p>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="tech-tag"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mensaje si no hay proyectos para la categoría seleccionada */}
            {filteredProjects.length === 0 && (
                <p className="no-projects-message">
                    No hay proyectos disponibles para esta categoría.
                </p>
            )}
        </div>
    );
}

export default Project;