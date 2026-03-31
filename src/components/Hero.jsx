import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowDown } from 'react-icons/fi';

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
        <a href="https://github.com/dittanvn" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/dittanvn" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="mailto:din@email.com" className="social-icon">
          <HiOutlineMail />
        </a>
      </div>
      <a href="#projects" className="cta-button">
        View My Work <FiArrowDown className="arrow-icon" />
      </a>
    </section>
  );
}

export default Hero;