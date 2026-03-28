function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        <span className="hero-greeting">Hi, I'm</span>
        <br/>
        <span className="hero-name">Rosol Radhi</span>
      </h1>
      <h2 className="hero-subtitle">Full Stack Developer & Creative Problem Solver</h2>
      <p className="hero-description">
        I build exceptional digital experiences that combine beautiful design with powerful
        functionality. Passionate about creating solutions that make a difference.
      </p>
      <div className="social-icons">
        <a href="#" className="social-icon">GH</a>
        <a href="#" className="social-icon">in</a>
        <a href="#" className="social-icon">@</a>
      </div>
      <button className="myWork-button">View My Work</button>
    </section>
  );
}

export default Hero;