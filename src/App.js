
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/inicio';
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Inicio />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
