import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import recepthub from '../assets/recepthub.png';

const projects = [
  {
    id: 1,
    name: "Recepthub",
    description: "A modern, responsive recipe web app that lets users create, update, and delete recipes, browse a curated recipe page, and submit inquiries through a contact form.",
    image: recepthub,
    tags: ["node.js", "express", "react", "mongoDB", "Mongoose", "doten", "docker", "REST API", "JavaScript", "CSS", "HTML5", "JSON"],
    codeLink: "https://github.com/rosolhusein8/recepthub.git",
    demoLink: "https://rosolhusein8.github.io/recepthub/"
  },
  {
    id: 2,
    name: "p2",
    description: "...",
    image: project2,
    tags: ["React", "Node.js", "MongoDB"],
    codeLink: "https://github.com/rosolhusein8/portfolio",
    demoLink: "https://rosolhusein8.github.io/portfolio/"
  },
{
    id: 3,
    name: "p3",
    description: "..",
    image: project3,
    tags: ["React", "Node.js", "MongoDB"],
    codeLink: "https://github.com/rosolhusein8/portfolio",
    demoLink: "https://rosolhusein8.github.io/portfolio/"
    
  },
  /*
{    
    id: 4,
    name: "p4",
    description: "..",
    image: project4,
    tags: ["React", "Node.js", "MongoDB"],
    codeLink: "#",
    demoLink: "#"
  }
    */

];
function Projects() {
  return (
    <section className="projects" id="projects"> 
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-description">
        A showcase of my recent work and personal projects that demonstrate my
        skills and passion for development.
      </p>    
      
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-image"/>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-text">{project.description}</p>
            <div className="project-card-footer">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink className="project-link-icon" aria-hidden />
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project-link-icon" aria-hidden />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
export default Projects;