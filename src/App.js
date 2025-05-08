
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <h2>Inicio</h2>
          <p>Contenido de la sección de inicio.</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <p>Contenido de la sección de habilidades.</p>
        </section>
        <section id="projects">
          <h2>Proyectos</h2>
          <p>Contenido de la sección de proyectos.</p>
        </section>
        <section id="contact">
          <h2>Contacto</h2>
          <p>Contenido de la sección de contacto.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Luis Laurente. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
