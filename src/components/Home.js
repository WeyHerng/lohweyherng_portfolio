import React from "react";

export default function Home() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Loh Wey Herng</span>
          </h1>

          <p className="hero-subtitle">
            Looking for Internships / Graduate program opportunities in tech
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>

      <div
        className="scroll-indicator"
        onClick={scrollToAbout}
        role="button"
        aria-label="Scroll to About"
      >
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down" />
        </div>
      </div>
    </section>
  );
}