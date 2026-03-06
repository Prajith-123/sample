import React from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Courses.css"; // reuse the same CSS

export default function Courses() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container">
          {/* Navbar */}
          <nav className="nav">
            <div className="logo">LearnFlow</div>
            <div className="auth-buttons">
              <button
                className="button button-secondary"
                onClick={() => handleNavigation("/")}
              >
                <i className="fas fa-arrow-left"></i> Back to Home
              </button>
            </div>
          </nav>

          <hr className="separator" />

          {/* Course Content */}
          <div className="hero-content">
            <br />
            <div className="course-details">
              <div className="course-tags">
                <span className="course-tag">Professional Training</span>
              </div>
            </div>
            <h1 className="title">5G Technology Training</h1>
            <p className="hero-description">
              Comprehensive 5-day intensive training covering all aspects of 5G
              technology, from fundamentals to advanced <br /> implementation.
            </p>

            <div className="course-details">
              <div className="course-tags">
                <span>
                  <i className="fas fa-briefcase"></i> 5 Days
                </span>
                <span>
                  <i className="fas fa-clock"></i> 35 Hours
                </span>
                <span>
                  <i className="fas fa-map-marker-alt"></i> ARTPARK Lab
                </span>
                <span>
                  <i className="fas fa-users"></i> Expert Trainers
                </span>
              </div>
            </div>

            <button
              className="button button-primary"
              onClick={() => handleNavigation("/register")}
            >
              Enroll Now
            </button>
            <br />
            <br />
            <hr className="separator" />
          </div>
        </div>
      </header>
      <div className="container">
        <div className="course-content">
          <h1 className="course-title">Training Schedule</h1>
        </div>

        <section className="features-section">
          <div className="container">
            <div className="day-card">
              {/* Header */}
              <div className="day-header">
                <div>
                  <h2>
                    Day 1 <span className="day-badge">Monday</span>
                  </h2>
                  <p className="day-date">19-Jan-26</p>
                </div>

                <div className="day-instructor">
                  <i className="fas fa-user"></i> Devadas Pai - Instructor
                </div>
              </div>

              {/* Sessions */}
              <div className="day-sessions">
                {/* Morning Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Morning Session
                    <span>(10am - 1pm)</span>
                  </h4>
                  <ul>
                    <li>4G to 5G Evolution</li>
                    <li>5G Overview</li>
                    <li>5G Service Categories</li>
                    <li>Use Cases</li>
                    <li>5G Spectrum</li>
                  </ul>
                </div>

                {/* Afternoon Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Afternoon Session
                    <span>(2pm - 5pm)</span>
                  </h4>
                  <ul>
                    <li>5G Network Architecture</li>
                    <li>5G Enablers</li>
                    <li>5G Status</li>
                    <li>5G Lab Visit</li>
                    <li>ARTPARK 5G Lab Access Post Training</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="day-card">
              {/* Header */}
              <div className="day-header">
                <div>
                  <h2>
                    Day 2 <span className="day-badge">Tuesday</span>
                  </h2>
                  <p className="day-date">20-Jan-26</p>
                </div>

                <div className="day-instructor">
                  <i className="fas fa-user"></i> Devadas Pai - Instructor
                </div>
              </div>

              {/* Sessions */}
              <div className="day-sessions">
                {/* Morning Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Morning Session
                    <span>(10am - 1pm)</span>
                  </h4>
                  <ul>
                    <li>5G RAN Overview</li>
                    <li>ORAN Overview</li>
                    <li>5G ORAN Lab Visit</li>
                  </ul>
                </div>

                {/* Afternoon Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Afternoon Session
                    <span>(2pm - 5pm)</span>
                  </h4>
                  <ul>
                    <li>5G Core Network Functions</li>
                    <li>5G OSS/BSS Overview</li>
                    <li>Intro to IMS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="day-card">
              {/* Header */}
              <div className="day-header">
                <div>
                  <h2>
                    Day 3 <span className="day-badge">Wednesday</span>
                  </h2>
                  <p className="day-date">21-Jan-26</p>
                </div>

                <div className="day-instructor">
                  <i className="fas fa-user"></i> Devadas Pai - Instructor
                </div>
              </div>

              {/* Sessions */}
              <div className="day-sessions">
                {/* Morning Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Morning Session
                    <span>(10am - 1pm)</span>
                  </h4>
                  <ul>
                    <li>5G QoS Overview</li>
                    <li>QoS Mapping to Use cases</li>
                    <li>5G MEC and Network Slicing Overview</li>
                  </ul>
                </div>

                {/* Afternoon Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Afternoon Session
                    <span>(2pm - 5pm)</span>
                  </h4>
                  <ul>
                    <li>5G and AI – How AI is applied in 5G</li>
                    <li>5G Private Networks</li>
                    <li>Various 5G Private Network Implementations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="day-card">
              {/* Header */}
              <div className="day-header">
                <div>
                  <h2>
                    Day 4 <span className="day-badge">Thursday</span>
                  </h2>
                  <p className="day-date">22-Jan-26</p>
                </div>

                <div className="day-instructor">
                  <i className="fas fa-user"></i> Subhra Prakash - Instructor
                </div>
              </div>

              {/* Sessions */}
              <div className="day-sessions">
                {/* Morning Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Morning Session
                    <span>(10am - 1pm)</span>
                  </h4>
                  <ul>
                    <li>5G Security</li>
                    <li>5G in IoT</li>
                    <li>5G in M2M</li>
                  </ul>
                </div>

                {/* Afternoon Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Afternoon Session
                    <span>(2pm - 5pm)</span>
                  </h4>
                  <ul>
                    <li>5G Deployment Scenarios</li>
                    <li>5G KPIs</li>
                    <li>5G Troubleshooting and Optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="day-card">
              {/* Header */}
              <div className="day-header">
                <div>
                  <h2>
                    Day 5 <span className="day-badge">Friday</span>
                  </h2>
                  <p className="day-date">23-Jan-26</p>
                </div>

                <div className="day-instructor">
                  <i className="fas fa-user"></i> Devadas Pai &amp; Subhra
                  Prakash
                </div>
              </div>

              {/* Sessions */}
              <div className="day-sessions">
                {/* Morning Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Morning Session
                    <span>(10am - 1pm)</span>
                  </h4>
                  <ul>
                    <li>5G Standards and Regulations</li>
                    <li>Future of 5G</li>
                    <li>6G Preview</li>
                  </ul>
                </div>

                {/* Afternoon Session */}
                <div className="session-card">
                  <h4>
                    <i className="fas fa-clock"></i> Afternoon Session
                    <span>(2pm - 5pm)</span>
                  </h4>
                  <ul>
                    <li>Course Review</li>
                    <li>Q&amp;A Session</li>
                    <li>Assessment</li>
                    <li>Certificate Distribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="separator" />

      <div className="what-you-learn-section">
        <div className="container">
          <h1 className="learn-title">What You'll Learn</h1>

          <div className="learn-grid">
            {/* Left Column */}
            <div className="learn-item">
              <h3>5G Fundamentals</h3>
              <p>
                Understand the evolution from 4G to 5G, core architecture, and
                key enablers.
              </p>
            </div>

            <div className="learn-item">
              <h3>Network Implementation</h3>
              <p>
                Learn RAN, core functions, OSS/BSS, and private network
                deployments.
              </p>
            </div>

            <div className="learn-item">
              <h3>Advanced Topics</h3>
              <p>
                Explore AI integration, network slicing, MEC, and security
                protocols.
              </p>
            </div>

            {/* Right Column */}
            <div className="learn-item">
              <h3>Hands-On Experience</h3>
              <p>
                Access ARTPARK 5G lab for practical implementation and testing.
              </p>
            </div>

            <div className="learn-item">
              <h3>Industry Applications</h3>
              <p>Apply 5G in IoT, M2M, and various real-world use cases.</p>
            </div>

            <div className="learn-item">
              <h3>Future Technologies</h3>
              <p>
                Get insights into future of 5G and preview of 6G technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="separator" />

      <div className="join-section">
        <div className="container">
          <h1 className="join-title">Ready to Join?</h1>
          <p>
            Start your journey in 5G technology with industry-leading experts.
          </p>
          <button
            className="button button-primary"
            onClick={() => handleNavigation("/register")}
          >
            Enroll In Course
          </button>
        </div>
      </div>
    </div>
  );
}
