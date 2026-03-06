import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import founderImage from "./founder.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-page dark-theme">
      {/* HEADER */}
      <header className="main-header">
        <div className="container header-flex">
          <div className="logo-section">
            <div className="logo-icon">
              <img
                src="/images/robohub-Photoroom.png"
                alt="ROBOHUB Logo"
                className="logo-image"
              />
            </div>
          </div>

          <div className="auth-pill-group">
            {/* <button
              className="pill-btn"
              onClick={() => handleNavigation("/login")}
            >
              <i className="fas fa-user-circle"></i> Login
            </button>
            <button
              className="pill-btn active"
              onClick={() => handleNavigation("/register")}
            >
              <i className="fas fa-user-plus"></i> Get Started
            </button> */}
          </div>
        </div>
      </header>

      {/* SUB-NAV */}
      <nav className="sub-navbar">
        <div className="container nav-links">
          <a href="#home" className="nav-item active">
            Home
          </a>
          <a href="#about" className="nav-item">
            About
          </a>
          <a href="#programs" className="nav-item">
            Programs
          </a>
        </div>
      </nav>

      <main className="container main-content">
        {/* HERO GRID */}
        <div className="hero-grid">
          {/* Main Info */}
          <div className="content-card">
            <span className="card-tag">Initiative</span>
            <h1 className="hero-title">RoboHub</h1>
            <p className="hero-description">
              Robohub is a technology initiative focused on robotics and AI. We
              aim to connect learners, innovators, and industry by providing
              practical training, project support, and expert guidance to build
              real-world skills.
            </p>
          </div>

          {/* FLIPPING FOUNDER CARD */}
          <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card-inner">
              {/* FRONT SIDE */}
              <div className="flip-card-front content-card">
                <span className="card-tag">Founder</span>
                <div className="founder-body">
                  <div className="founder-avatar">
                    <img
                      src={founderImage}
                      alt="Dr. Josephine Selvarani Ruth D"
                    />
                  </div>
                  <div className="founder-text">
                    <h3>Dr. Josephine Selvarani Ruth D</h3>
                    <p>Lead Technical Liaison</p>
                  </div>
                  <button
                    className="info-link-btn"
                    onClick={() => setIsFlipped(true)}
                  >
                    Read Biography <i className="fas fa-sync-alt"></i>
                  </button>
                </div>
              </div>

              {/* BACK SIDE (Biography) */}
              <div className="flip-card-back content-card">
                <span className="card-tag">Biography</span>
                <div className="bio-scroll-content">
                  <p className="bio-text">
                    I am a distinguished professional in the field of
                    instrumentation and control, with a passion for bridging the
                    gap between academic research and industry application.
                    After earning my Bachelor's and Master's degrees at Anna
                    University, I completed my doctoral degree at NIT Trichy in
                    2015, where my research focused on "Shared Sensing and
                    Actuation by Shape Memory Alloy Wires for Haptic Control
                    Robotic Applications."
                    <br />
                    <br />
                    My journey has taken me from serving as a faculty member at
                    NIT Trichy to an Inspire Faculty Fellowship at IISc
                    Bangalore. During my time there, I led the "Open Science
                    Stack with Automated Labs" project, aimed at revolutionizing
                    research methodologies through automation.
                    <br />
                    <br />
                    Currently, as the Lead Technical Liaison at ArtPark, I focus
                    on developing impactful modules and courses designed to
                    empower diverse audiences. I am dedicated to upskilling the
                    next generation of technical experts and fostering
                    collaboration across the technical landscape.
                  </p>
                </div>
                <button
                  className="info-link-btn"
                  onClick={() => setIsFlipped(false)}
                >
                  Back to Profile <i className="fas fa-undo"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* INITIATIVES SECTION */}
        <section id="about" className="initiatives-section">
          <h2 className="section-title">Our Pillars</h2>
          <div className="pillars-grid">
            <div
              className="pillar-card"
              data-aos="fade-up"
              data-aos-delay="100"
              onClick={() => handleNavigation("/care")}
            >
              <div className="pillar-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Care</h3>
              <p>
                RoboHub delivers hands-on training programs in robotics and AI,
                with practical lab sessions on real robots. The courses are
                designed to build participants problem-solving ability, system
                thinking and technical orientation required for real-world
                robotics roles.
              </p>
            </div>

            <div
              className="pillar-card"
              data-aos="fade-up"
              data-aos-delay="300"
              onClick={() => handleNavigation("/consult")}
            >
              <div className="pillar-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Consult</h3>
              <p>
                RoboHub bridges trained students and professionals with industry
                partners seeking entry-level and deployment-ready talent.
                Companies can view participants completed courses, skills and
                performance profiles on the platform.
              </p>
            </div>

            <div
              className="pillar-card"
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={() => handleNavigation("/connect")}
            >
              <div className="pillar-icon">
                <i className="fas fa-link"></i>
              </div>
              <h3>Connect</h3>
              <p>
                RoboHub supports organisations in establishing robotics and
                AI-focused labs by advising on platform and robot selection,
                infrastructure planning, and team capability building. We also
                work with organisations to design proposals and execution plans
                for sustainable technology initiatives.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <p>© 2026 RobotHub Technology Initiative</p>
      </footer>
    </div>
  );
}
