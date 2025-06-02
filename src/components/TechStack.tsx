import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiFigma,
  SiFlask,
  SiFormspree,
  SiHaskell,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiR,
  SiSharp,
  SiTypescript,
} from "react-icons/si";

const techStackData = [
  { icon: <SiPython size={40} color="Black" />, label: "Python" },
  { icon: <FaJava size={40} color="Black" />, label: "Java" },
  { icon: <SiCplusplus size={40} color="Black" />, label: "C++" },
  { icon: <SiSharp size={40} color="Black" />, label: "C#" },
  { icon: <SiHaskell size={40} color="Black" />, label: "Haskell" },
  { icon: <SiR size={40} color="Black" />, label: "R Programming Language" },
  { icon: <SiJavascript size={40} color="Black" />, label: "JavaScript" },
  { icon: <SiHtml5 size={40} color="Black" />, label: "HTML" },
  { icon: <SiCss3 size={40} color="Black" />, label: "CSS" },
  { icon: <SiTypescript size={40} color="Black" />, label: "TypeScript" },
  { icon: <FaReact size={40} color="Black" />, label: "React" },
  { icon: <FaNodeJs size={40} color="Black" />, label: "Node.js" },
  { icon: <SiFlask size={40} color="Black" />, label: "Flask" },
  { icon: <SiFigma size={40} color="Black" />, label: "Figma" },
  { icon: <SiBootstrap size={40} color="Black" />, label: "Bootstrap" },
  { icon: <SiFormspree size={40} color="Black" />, label: "Formspree" },
  { icon: <SiMongodb size={40} color="Black" />, label: "MongoDB" },
];

const TechStack = () => {
  return (
    <section id="skills" className="mb-5">
      <h2>Tech Stack</h2>
      <div className="d-flex flex-wrap gap-3 tech-grid-container">
        {techStackData.map(({ icon, label }, i) => (
          <div key={i} className="bg-light rounded object text-center p-3">
            {icon}
            <div className="font-weight-bold">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
