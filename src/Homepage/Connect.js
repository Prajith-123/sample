import React from "react";
import "./Connect.css";

export default function Connect() {
  return (
    <div className="connect-page">
      {/* HERO */}
      <section className="connect-hero">
        <div className="connect-hero-header">
          <img
            src="/images/Page_Logo.png"
            alt="Logo"
            className="connect-hero-logo"
          />
          <h1>CONNECT</h1>
        </div>

        <h2>Industry & Talent Bridge Platform</h2>
        <p>
          RoboHub CONNECT acts as a bridge between trained participants and
          industry or institutional partners.
        </p>
        <p className="sub-text">
          The platform helps organisations identify deployment-ready talent and
          helps learners move faster into real projects and roles.
        </p>
      </section>

      {/* PARTICIPANTS SECTION */}
      <section className="connect-section">
        <div className="section-header">
          <h3>For Participants</h3>
        </div>

        <ul className="feature-list">
          <li>Create and manage their personal profile</li>
          <li>View enrolled courses and certifications</li>
          <li>Track hands-on performance and assessments</li>
          <li>Showcase skills and completed programs to employers</li>
        </ul>

        <div className="note-box">
          Each participant receives a secure login to access their learning and
          profile dashboard.
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <section className="connect-section alt-bg">
        <div className="section-header">
          <h3>For Companies & Partner Organisations</h3>
        </div>

        <ul className="feature-list">
          <li>Create an organisation account</li>
          <li>View verified candidate profiles</li>
          <li>Filter candidates based on courses, skills and performance</li>
          <li>
            Identify suitable candidates for internships, projects and
            entry-level roles
          </li>
        </ul>

        <div className="note-box">
          Each company receives a secure login to access the hiring and talent
          discovery dashboard.
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="value-section">
        <h3>Value of the RoboHub CONNECT Platform</h3>
        <div className="value-grid">
          <div className="value-card">
            Faster access to trained and validated candidates
          </div>
          <div className="value-card">
            Reduced recruitment and onboarding effort
          </div>
          <div className="value-card">
            Better visibility of real hands-on capability
          </div>
          <div className="value-card">
            Stronger alignment between training and industry needs
          </div>
        </div>
      </section>

      {/* WHY ROBOHUB */}
      <section className="why-section">
        <h3>Why RoboHub</h3>
        <ul>
          <li>
            Integrated ecosystem covering training, lab enablement and industry
            connection
          </li>
          <li>Strong hands-on and deployment-oriented approach</li>
          <li>Scalable framework for universities and enterprises</li>
          <li>Designed from real ecosystem gaps and operational experience</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <h3>Contact</h3>
        <p>RoboHub – Care | Consult | Connect</p>
        <p>(Proprietorship)</p>
        <p className="contact-email">✉️ <a href="mailto:djsruth@gmail.com">djsruth@gmail.com</a></p>
      </section>
    </div>
  );
}
