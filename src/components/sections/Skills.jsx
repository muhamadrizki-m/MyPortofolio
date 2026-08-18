import "../../styles/sections/skills.css";

function Skills() {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "Backend",
      skills: ["PHP", "Laravel", "Node.js"],
    },
    {
      category: "Database",
      skills: ["MySQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header scroll-reveal">
        <span className="skills-eyebrow">
          Skills
        </span>

        <h2 className="skills-title">
          Technologies I use
          <br />
          to build things.
        </h2>
      </div>

      <div className="skills-list scroll-reveal">
        {skillGroups.map((group) => (
          <div
            className="skill-group"
            key={group.category}
          >
            <span className="skill-category">
              {group.category}
            </span>

            <div className="skill-items">
              {group.skills.map((skill) => (
                <span
                  className="skill-item"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;