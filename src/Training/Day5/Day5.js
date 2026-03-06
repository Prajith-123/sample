import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Day.css';

export default function Day5() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

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
        if (data.progress && data.progress["5"]) {
          setCompleted(data.progress["5"].completed === true);
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
    // Dispatch event to update Dashboard/Training
    window.dispatchEvent(new Event("progressUpdate"));

    // Navigate to test page
    navigate("/courses/5g-training/day5/test");
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
        <span className="page-label">Day 5</span>
        <h1>Standards & Future of 5G Technology</h1>
        <p className="page-subtitle">
          5G standardization, spectrum, and the vision for 6G.
        </p>
      </div>

      {/* Main Content */}
      <div className="main-container page-content">
        {/* 5G Standardization Bodies */}
        <div className="content-card">
          <h2>5G Standardization Bodies</h2>
          <div className="content-details">
            <h3>3GPP (3rd Generation Partnership Project)</h3>
            <ul>
              <li>Release 15 (2018): Initial 5G NR specifications</li>
              <li>Release 16 (2020): 5G Phase 2 enhancements</li>
              <li>Release 17 (2022): Enhanced URLLC and IoT</li>
              <li>Release 18 (2024): 5G-Advanced features</li>
            </ul>

            <h3>Other Standards Organizations</h3>
            <ul>
              <li>ITU-R: Radio spectrum allocation</li>
              <li>ETSI: European telecommunications standards</li>
              <li>IETF: Internet protocols</li>
              <li>IEEE: WiFi and wired standards</li>
            </ul>
          </div>
        </div>

        {/* 5G Spectrum Allocation */}
        <div className="content-card">
          <h2>5G Spectrum Allocation</h2>
          <div className="content-details">
            <h3>Global Spectrum Bands</h3>
            <ul>
              <li>FR1 (Sub-6 GHz): 600 MHz - 6 GHz</li>
              <li>FR2 (mmWave): 24 GHz - 100 GHz</li>
              <li>Licensed vs unlicensed spectrum</li>
              <li>Dynamic spectrum sharing (DSS)</li>
            </ul>
          </div>
        </div>

        {/* 5G-Advanced and 6G Vision */}
        <div className="content-card">
          <h2>5G-Advanced and 6G Vision</h2>
          <div className="content-details">
            <h3>5G-Advanced Features (Release 18+)</h3>
            <ul>
              <li>AI/ML integration in RAN</li>
              <li>XR (Extended Reality) optimizations</li>
              <li>Enhanced positioning accuracy</li>
              <li>Network energy savings</li>
            </ul>

            <h3>6G Vision (2030+)</h3>
            <ul>
              <li>Terabit per second speeds</li>
              <li>Microsecond latency</li>
              <li>AI-native networks</li>
              <li>Holographic communications</li>
              <li>Integrated terrestrial and satellite networks</li>
            </ul>
          </div>
        </div>

        {/* Industry Adoption */}
        <div className="content-card">
          <h2>Industry Adoption and Use Cases</h2>
          <div className="content-details">
            <h3>Vertical Industries</h3>
            <ul>
              <li>Manufacturing: Industry 4.0, digital twins</li>
              <li>Healthcare: Remote surgery, telemedicine</li>
              <li>Transportation: Autonomous vehicles, smart logistics</li>
              <li>Entertainment: Cloud gaming, immersive media</li>
            </ul>

            <h3>Global Deployment Status</h3>
            <ul>
              <li>Commercial 5G in 100+ countries</li>
              <li>SA (Standalone) core deployments increasing</li>
              <li>Private 5G networks for enterprises</li>
              <li>Open RAN adoption growing</li>
            </ul>
          </div>
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
            className="button button-secondary"
            onClick={handleTakeTest}
            disabled={completed}
          >
            <i className="fas fa-check-circle"></i>{" "}
            {completed ? "Assessment Completed" : "Take Final Test"}
          </button>
        </div>
      </div>
    </div>
  );
}
