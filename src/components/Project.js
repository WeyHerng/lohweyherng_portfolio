import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.description}</p>
                <div className="project-role"><strong>My Role:</strong> {p.role}</div>
                <div className="project-tech">
                  {p.tech.map((t, i) => <span className="tech-tag" key={i}>{t}</span>)}
                </div>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt" /> Project Site
                  </a>
                ) : (
                  <span className="project-link disabled"><i className="fas fa-lock" /> Private Project</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}