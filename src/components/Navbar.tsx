import { useState, useEffect, type RefObject } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import MyResume from "C:/Users/flori/Documents/Personal_Projects/personal-website/src/assets/Orlandos_Resume.pdf";

// --- Define the types for Navbar props ---
interface NavbarProps {
  homeRef: RefObject<HTMLDivElement | null>; // RefObject to a div element
  aboutRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

// Update the Navbar component to use the defined props interface
const Navbar = ({
  homeRef,
  aboutRef,
  projectsRef,
  skillsRef,
  contactRef,
}: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      // Explicitly type observer options
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    // Explicitly type the callback parameters
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observer each section passed via refs
    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup function for the observer
    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [homeRef, aboutRef, projectsRef, skillsRef, contactRef]);

  return (
    <nav
      className="d-flex sticky-top justify-content-between align-items-center mb-5 border border-dark p-3 rounded-3 object"
      style={{ fontSize: "1.8rem" }}
    >
      <div>
        <a
          href="#home"
          className={`me-3 text-maroon navbar-link ${
            activeSection === "home" ? "active" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`me-3 text-maroon navbar-link ${
            activeSection === "about" ? "active" : ""
          }`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`me-3 text-maroon navbar-link ${
            activeSection === "projects" ? "active" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`me-3 text-maroon navbar-link ${
            activeSection === "skills" ? "active" : ""
          }`}
        >
          Skills
        </a>
        <a
          href="#contact"
          className={`me-3 text-maroon navbar-link ${
            activeSection === "contact" ? "active" : ""
          }`}
        >
          Contact
        </a>
      </div>
      <div>
        <a
          href="https://github.com/OrlandoH27"
          className="me-3 text-maroon text-decoration-none icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/orlando-haye/"
          className="me-3 text-maroon text-decoration-none icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={MyResume}
          className="me-3 text-maroon text-decoration-none icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDownload /> Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
