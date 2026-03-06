import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Day.css"; // Updated CSS file

export default function Day1() {
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

        if (data.progress && data.progress["1"]) {
          setCompleted(data.progress["1"].completed === true);
        } else {
          setCompleted(false);
        }
      } catch (err) {
        console.error("Failed to fetch progress", err);
      }
    };

    fetchProgress();
  }, []);

  const handleComplete = () => {
    // Dispatch custom event so Training.js & Dashboard update immediately
    window.dispatchEvent(new Event("progressUpdate"));

    navigate("/courses/5g-training/day1/test");
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
              <button
                className="button button-secondary"
                onClick={handleBackToCourse}
              >
                <i className="fas fa-arrow-left"></i> Back To Course
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="page-header">
        <span className="page-label">Day 1</span>
        <h1>4G to 5G Evolution & Architecture</h1>
        <p className="page-subtitle">
          Learn about the transition from 4G to 5G and core concepts
        </p>
      </div>

      {/* Main Content */}
      <div className="main-container page-content">
        {/* Content Block 1 */}
        <div className="content-card">
          <div className="content-details">
            <h3>4G to 5G Evolution</h3>
            <p>
              The evolution from 4G to 5G represents a fundamental shift in
              mobile network technology. While 4G focused primarily on enhanced
              mobile broadband, 5G is designed to support three major service
              categories: Enhanced Mobile Broadband (eMBB), Ultra-Reliable
              Low-Latency Communications (URLLC), and Massive Machine Type
              Communications (mMTC).
            </p>
            <h3>5G Service Categories</h3>
            <ul>
              <li>
                <strong>eMBB:</strong> Enhanced mobile broadband for high-speed
                data and immersive experiences
              </li>
              <li>
                <strong>URLLC:</strong> Ultra-reliable low-latency for
                mission-critical applications
              </li>
              <li>
                <strong>mMTC:</strong> Massive IoT device connectivity for smart
                cities and industries
              </li>
            </ul>
            <h3>5G Spectrum</h3>
            <p>
              5G operates across three spectrum bands: Low-band (sub-1GHz) for
              wide coverage, Mid-band (1-6GHz) for capacity and coverage
              balance, and High-band/mmWave (24GHz+) for ultra-high speeds in
              dense areas.
            </p>
          </div>
        </div>

        {/* Content Block 2 */}
        <div className="content-card">
          <div className="content-details">
            <h3>5G Network Architecture</h3>
            <p>
              5G architecture introduces a service-based architecture (SBA) with
              network functions exposed through APIs. The core network is
              cloud-native, enabling network slicing and edge computing
              capabilities.
            </p>
            <h3>Key 5G Enablers</h3>
            <ul>
              <li>
                Software-Defined Networking (SDN) and Network Function
                Virtualization (NFV)
              </li>
              <li>Massive MIMO and beamforming technologies</li>
              <li>Network slicing for customized services</li>
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
            onClick={() => {
              if (!completed) {
                handleComplete(); // Only allow navigation if not completed
              }
            }}
            disabled={completed} // properly disables the button
          >
            {completed ? "Assessment Completed" : "Take Assessment"}{" "}
            <i className="fas fa-check-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
