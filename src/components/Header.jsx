import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <h1 className="logo">
        <a href="#" className="logo-link">Rosol Radhi</a>
        </h1>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav id="main-nav" className={`header-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Huvudmeny">
        <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

    </header>
  );
}

export default Header; 