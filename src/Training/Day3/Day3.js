import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Day.css';

export default function Day3() {
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
        if (data.progress && data.progress["3"]) {
          setCompleted(data.progress["3"].completed === true);
        }
      } catch (err) {
        console.error("Failed to fetch progress", err);
      }
    };

    fetchProgress();
  }, []);

  const handleComplete = () => {
    // Dispatch event to update progress in Dashboard/Training
    window.dispatchEvent(new Event("progressUpdate"));

    navigate("/courses/5g-training/day3/test");
  };

  const handleBackToCourse = () => {
    navigate("/courses/5g-training");
  };

  return (
    <div className="page-container">
      {/* Header / Navbar */}
      <header className="hero-section">
        <div className="container">
          <nav className="nav">
            <div className="logo">LearnFlow</div>
            <div className="auth-buttons">
              <button className="button button-secondary" onClick={handleBackToCourse}>
                <i className="fas fa-arrow-left"></i> Back To Course
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="page-header">
        <span className="page-label">Day 3</span>
        <h1>QoS, MEC & Network Slicing</h1>
        <p className="page-subtitle">
          Advanced 5G features and optimization
        </p>
      </div>

      {/* Main Content */}
      <div className="main-container page-content">
        {/* Content Block 1 */}
        <div className="content-card">
          <h2>Learning Content</h2>
          <div className="content-details">
            <h3>Quality of Service (QoS)</h3>
            <p>
              5G QoS framework provides differentiated treatment for different services:
            </p>
            <ul>
              <li>
                <strong>5QI (5G QoS Identifier):</strong> Standardized QoS profiles
              </li>
              <li>
                <strong>GBR (Guaranteed Bit Rate):</strong> For mission-critical applications
              </li>
              <li>
                <strong>Non-GBR flows:</strong> For best-effort traffic
              </li>
              <li>
                <strong>Packet delay budget and error rate</strong> parameters
              </li>
            </ul>

            <h3>Multi-Access Edge Computing (MEC)</h3>
            <p>
              MEC brings computation and storage closer to users:
            </p>
            <ul>
              <li>Ultra-low latency for real-time applications</li>
              <li>Local data processing and caching</li>
              <li>Reduced backhaul traffic</li>
              <li>Edge analytics and AI processing</li>
            </ul>

            <h3>Network Slicing</h3>
            <p>
              Network slicing creates multiple virtual networks on a single infrastructure:
            </p>
            <ul>
              <li>Dedicated slices for different services (eMBB, URLLC, mMTC)</li>
              <li>Isolated resources and SLAs</li>
              <li>Dynamic slice orchestration</li>
              <li>End-to-end network customization</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button className="button button-primary" onClick={handleBackToCourse}>
            <i className="fas fa-arrow-left"></i> Back to Course
          </button>
          <button
            className="button button-secondary"
            onClick={() => { if (!completed) handleComplete(); }}
            disabled={completed}
          >
            {completed ? "Assessment Completed" : "Take Assessment"} <i className="fas fa-check-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
