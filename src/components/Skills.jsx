function Skills() {
  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 70 },
        { name: "JavaScript", level: 75 },
        { name: "CSS", level: 90 },
        { name: "HTML", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Python", level: 75 },
        { name: "C#", level: 70 },
        { name: "Java", level: 70 },
        { name: "Authentication (JWT)", level: 80 },
        { name: "REST APIs", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "SQL", level: 85 },
      ],
    },
      {
      title: "Data Structures & Algorithms",
      skills: [
        { name: "Object-Oriented Programming", level: 90 },
        { name: "Functional Programming", level: 75 },
        { name: "Agile Development (Scrum)", level: 95 },
      ],
    },
      {
      title: "Bonus Skills",
      skills: [
        { name: "Big Data Analytics", level: 90 },
        { name: "Machine Learning", level: 75 },
        { name: "Cybersecurity Fundamentals", level: 95 },
      ],
    },
    
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Figma", level: 75 },
        { name: "VS Code", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Expertise</h2>
      <p className="skills-description">
        Technologies and tools I work with to bring ideas to life.
      </p>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-name">{category.title}</h3>

            {category.skills.map((skill, i) => (
              <div key={i} className="skill-bar">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
