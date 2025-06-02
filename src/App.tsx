import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="full-bg">
      <div className="container py-4">
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
        />
        <div id="home" ref={homeRef}>
          <Hero />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div id="skills" ref={skillsRef}>
          <TechStack />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
