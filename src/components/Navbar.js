import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">WH</span>
        </div>
        <ul className="nav-menu" id="nav-menu">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="/resume.pdf"target="_blank"rel="noopener noreferrer"className="nav-link">Resume</a></li>
          </ul>
      </div>
    </nav>
  );
}