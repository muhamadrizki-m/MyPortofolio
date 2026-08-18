import "../../styles/sections/projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header scroll-reveal">
        <span className="projects-eyebrow">
          Projects
        </span>

        <h2 className="projects-title">
          Selected work
          <br />
          I'm building.
        </h2>
      </div>

      <div className="projects-empty scroll-reveal">
        <p className="projects-empty-label">
          Currently building
        </p>

        <p className="projects-empty-description">
          I'm currently working on projects that
          reflect my skills and approach to web development.
        </p>
      </div>
    </section>
  );
}

export default Projects;