import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Day.css';

export default function Day4() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  // Load completion state from localStorage
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) return;

        const res = await fetch("http://localhost:5000/progress/progress", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401 || res.status === 403) return;

        const data = await res.json();
        if (data.progress && data.progress["4"]) {
          setCompleted(data.progress["4"].completed === true);
        }
      } catch (err) {
        console.error("Failed to fetch progress", err);
      }
    };

    fetchProgress();
  }, []);

  const handleBackToCourse = () => {
    navigate("/courses/5g-training");
  };

  const handleTakeTest = () => {
    window.dispatchEvent(new Event("progressUpdate"));
    // Navigate to test page without marking complete
    navigate("/courses/5g-training/day4/test");
  };

  return (
    <div className="page-container">
      {/* Header / Navbar */}
      <header className="hero-section">
        <div className="container">
          <nav className="nav">
            <div className="logo">LearnFlow</div>
            <div className="auth-buttons">
              <button
                className="button button-secondary"
                onClick={handleBackToCourse}
              >
                <i className="fas fa-arrow-left"></i> Back to Course
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="page-header">
        <span className="page-label">Day 4</span>
        <h1>5G Security, IoT & M2M Communications</h1>
        <p className="page-subtitle">
          Security features, IoT integration, and M2M communications in 5G.
        </p>
      </div>

      {/* Main Content */}
      <div className="main-container page-content">
        {/* 5G Security */}
        <div className="content-card">
          <h2>5G Security Architecture</h2>
          <div className="content-details">
            <h3>Security Principles</h3>
            <ul>
              <li>Enhanced encryption algorithms (256-bit)</li>
              <li>Subscriber privacy protection</li>
              <li>Network slicing isolation</li>
              <li>End-to-end security</li>
            </ul>

            <h3>Authentication Methods</h3>
            <ul>
              <li>5G-AKA (Authentication and Key Agreement)</li>
              <li>EAP-AKA' for non-3GPP access</li>
              <li>SUPI/SUCI (Subscriber concealment)</li>
            </ul>
          </div>
        </div>

        {/* IoT and 5G Integration */}
        <div className="content-card">
          <h2>IoT and 5G Integration</h2>
          <div className="content-details">
            <h3>Massive IoT (mMTC)</h3>
            <ul>
              <li>Support for 1 million devices per km²</li>
              <li>Low power consumption (10+ years battery)</li>
              <li>NB-IoT and LTE-M technologies</li>
              <li>Use cases: Smart cities, agriculture, logistics</li>
            </ul>

            <h3>Critical IoT (URLLC)</h3>
            <ul>
              <li>Ultra-low latency (1ms)</li>
              <li>99.999% reliability</li>
              <li>Industrial automation</li>
              <li>Autonomous vehicles</li>
            </ul>
          </div>
        </div>

        {/* M2M Communications */}
        <div className="content-card">
          <h2>M2M Communications</h2>
          <div className="content-details">
            <h3>M2M Architecture</h3>
            <ul>
              <li>Device-to-device (D2D) communication</li>
              <li>MEC-enabled edge processing</li>
              <li>API-based service exposure</li>
            </ul>

            <h3>Applications</h3>
            <ul>
              <li>Smart manufacturing</li>
              <li>Healthcare monitoring</li>
              <li>Energy management</li>
              <li>Fleet management</li>
            </ul>
          </div>
        </div>

        {/* Security Challenges */}
        <div className="content-card">
          <h2>Security Challenges</h2>
          <ul>
            <li>Increased attack surface from IoT devices</li>
            <li>Network slicing security isolation</li>
            <li>Privacy in densely connected environments</li>
            <li>Quantum computing threats</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button
            className="button button-primary"
            onClick={handleBackToCourse}
          >
            <i className="fas fa-arrow-left"></i> Back to Course
          </button>
          <button
            className={`button button-secondary`}
            onClick={handleTakeTest}
            disabled={completed}
          >
            <i className="fas fa-check-circle"></i>{" "}
            {completed ? "Assessment Completed" : "Take Assessment"}
          </button>
        </div>
      </div>
    </div>
  );
}
