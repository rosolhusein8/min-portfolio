function About() {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        Passionate developer with a love for creating elegant solutions to complex
        problems.
      </p>

      <div className="about-content">
        <div className="about-left">
          <p>
            I'm a full-stack developer with experience building
            web applications. I specialize in creating responsive, user-friendly
            interfaces and scalable backend systems.
          </p>

          <p>
            My journey in tech started with a curiosity about how websites work,
            and it has evolved into a career dedicated to crafting exceptional
            digital experiences. I believe in writing clean, maintainable code and
            staying up-to-date with the latest technologies.
          </p>

          <p>
            When I'm not coding, you'll find me contributing to open source
            projects, writing technical blogs, or exploring new frameworks and
            tools.
          </p>
        </div>

        <div className="about-right">
          <div className="feature-card">
            <div className="feature-icon blue">
              {"</>"}
            </div>
            <div className="feature-text">
              <h3>Clean Code</h3>
              <p>
                Writing maintainable, efficient, and well-documented code is my
                priority.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">🚀</div>
            <div className="feature-text">
              <h3>Fast Performance</h3>
              <p>
                Optimizing for speed and performance to deliver the best user
                experience.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple">👥</div>
            <div className="feature-text">
              <h3>Team Collaboration</h3>
              <p>
                Working effectively with designers, developers, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;