import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I’m Loh Wey Herng, a third year Computer Science student at the University of Birmingham.
            </p>
            <p>
              Over the course of my studies, I’ve gained hands-on experience in full-stack
              development, software engineering practices, and collaborative group projects.
              I enjoy solving real-world problems with technology and continuously improving
              my skills by experimenting with new frameworks and tools.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-graduation-cap" />
                <span>Computer Science Undergraduate</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-code" />
                <span>Full-Stack Developer</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-lightbulb" />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}