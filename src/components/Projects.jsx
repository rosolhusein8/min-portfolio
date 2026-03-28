import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

const projects = [
  {
    id: 1,
    name: "p1",
    description: "...",
    image: project1,
    tags: ["React", "Styled-Components", "Design Systems"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    name: "p2",
    description: "...",
    image: project2,
    tags: ["React", "Node.js", "MongoDB"],
    codeLink: "#",
    demoLink: "#"
  },
{
    id: 3,
    name: "p3",
    description: "..",
    image: project3,
    tags: ["React", "Node.js", "MongoDB"],
    codeLink: "#",
    demoLink: "#"
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
    <section className="projects"> 
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
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.codeLink} className="project-link">View Code</a>
              <a href={project.demoLink} className="project-link">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
export default Projects;