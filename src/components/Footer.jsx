import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Rosol Radhi</h3>
          <p className="footer-description">Building digital experiences that make a difference.</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <nav className="footer-nav">
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#contact" className="footer-link">Contact</a>
          </nav>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <div className="footer-socials">
            <a href="https://github.com/rosolhusein8" className="social-icon"><FaGithub /></a>
            <a href="https://linkedin.com/in/dittanvn" className="social-icon"><FaLinkedinIn /></a>
            <a href="mailto:rosolhuseinradhi@hotmail.com" className="social-icon"><HiOutlineMail /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      <p className="footer-copyright">Made with <span className="heart">❤️</span> by Rosol H. © 2026</p>
    </footer>
  );
}

export default Footer;