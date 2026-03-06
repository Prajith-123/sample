import React from "react";
import "./Care.css";

export default function Care() {
  const courses = [
    {
      title: "Applied AI & Computer Vision Bootcamp",
      description:
        "Hands-on training on building and deploying AI, computer vision and NLP solutions.",
      duration: "25–30 Hours",
    },
    {
      title: "ROS2 Fundamentals for Robotics Engineers",
      description:
        "Hands-on introduction to ROS2, simulation, robot modelling and core robotics software workflows.",
      duration: "25–30 Hours",
    },
    {
      title: "ROS2 Advanced Bootcamp – Simulation to Hardware",
      description:
        "Hands-on training on sensor integration, robot control, perception and real robot workflows.",
      duration: "25–30 Hours",
    },
    {
      title: "Drone Technology – Assembly, Testing & Pilot Training",
      description:
        "Hands-on exposure to drone assembly, calibration, testing and supervised flight operations.",
      duration: "25–30 Hours",
    },
    {
      title: "Semi-Autonomous Wheeled Robot Systems Bootcamp",
      description:
        "Hands-on robot building, sensor integration and obstacle avoidance for mobile robots.",
      duration: "25–30 Hours",
    },
  ];

  return (
    <div className="care-page">
      {/* HERO SECTION */}
      <section className="care-hero">
        <div className="hero-header">
          <img src="/images/Page_Logo.png" alt="Logo" className="hero-logo" />
          <h1>Care – Training Programs</h1>
        </div>

        <p>
          All programs are delivered through guided labs, practical exercises
          and mini projects designed to build real-world robotics and AI skills.
        </p>
      </section>

      {/* COURSES SECTION */}
      <section className="courses-section">
        <h2>Courses Offered</h2>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>

              <div className="course-footer">
                <span className="duration-badge">⏳ {course.duration}</span>
                {/* <button className="enroll-btn">
                  Learn More →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
