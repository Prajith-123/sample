import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Day.css";

export default function Day2() {
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
        if (data.progress && data.progress["2"]) {
          setCompleted(data.progress["2"].completed === true);
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

    navigate("/courses/5g-training/day2/test");
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
        <span className="page-label">Day 2</span>
        <h1>5G RAN and Core Network</h1>
        <p className="page-subtitle">
          Understanding the architecture and network functions
        </p>
      </div>

      {/* Main Content */}
      <div className="main-container page-content">
        {/* Morning Session */}
        <div className="content-card">
          <div className="content-details">
            <h3>5G RAN Architecture</h3>
            <p>
              The 5G Radio Access Network (RAN) uses a disaggregated
              architecture split into three main components:
            </p>
            <ul>
              <li>
                <strong>RU (Radio Unit):</strong> Handles radio signal
                processing
              </li>
              <li>
                <strong>DU (Distributed Unit):</strong> Manages real-time layer
                2 processing
              </li>
              <li>
                <strong>CU (Central Unit):</strong> Controls non-real-time layer
                2 and layer 3
              </li>
            </ul>

            <h3>Key Concepts</h3>
            <ul>
              <li>
                Cloud-native design enables efficient resource utilization
              </li>
              <li>Network slicing provides dedicated virtual networks</li>
              <li>
                Service-based interfaces enable flexibility and scalability
              </li>
            </ul>
          </div>
        </div>

        {/* Afternoon Session */}
        <div className="content-card">
          <div className="content-details">
            <h3>5G Core Network Functions</h3>
            <p>
              The 5G Core uses a Service-Based Architecture (SBA) with key
              network functions:
            </p>
            <ul>
              <li>
                <strong>AMF:</strong> Access and Mobility Management Function
              </li>
              <li>
                <strong>SMF:</strong> Session Management Function
              </li>
              <li>
                <strong>UPF:</strong> User Plane Function
              </li>
              <li>
                <strong>PCF:</strong> Policy Control Function
              </li>
              <li>
                <strong>UDM:</strong> Unified Data Management
              </li>
              <li>
                <strong>AUSF:</strong> Authentication Server Function
              </li>
            </ul>

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
              if (!completed) handleComplete();
            }}
            disabled={completed}
          >
            {completed ? "Assessment Completed" : "Take Assessment"}{" "}
            <i className="fas fa-check-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
