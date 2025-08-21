import React from "react";

export default function Contact() {
  return (
    <>
      {/* Get In Touch Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-intro">
            For any work opportunities, or inquiries, feel free to reach out!
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:lohweyherng@gmail.com"
              className="btn-contact"
            >
              <i className="fas fa-envelope" /> lohweyherng@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="socials" id="socials">
        <div className="container">
          <div className="social-icons">
            <a
              href="https://github.com/WeyHerng"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github" />
            </a>

            <a
              href="https://www.linkedin.com/in/weyherng"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>

          <p className="social-footer">© Loh Wey Herng 2025</p>

        </div>
      </section>
    </>
  );
}