import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Training.css";

export default function Training() {
  const navigate = useNavigate();

  // Initialize the progress state dynamically
  const [progress, setProgress] = useState({
    dayCompleted: 0,
    totalDays: 5,
  });
  const [finalCompleted, setFinalCompleted] = useState(false);

  // Use token stored in sessionStorage (set at login)
  const fetchProgress = useCallback(async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      console.warn("token missing, redirecting to login");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/progress/progress", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        // Unauthorized - send user to login
        navigate("/login");
        return;
      }

      const data = await res.json();

      // Backend returns completedDays; update UI accordingly
      setProgress({
        dayCompleted: data.completedDays || 0,
        totalDays: 5,
      });
      // track final assessment completion
      setFinalCompleted(Boolean(data.finalAssessmentCompleted));
    } catch (err) {
      console.error("Failed to load progress", err);
    }
  }, [navigate]);

  // ADD
  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  // Re-fetch when progress is updated elsewhere in the app
  useEffect(() => {
    const handler = () => fetchProgress();
    window.addEventListener("progressUpdate", handler);
    return () => window.removeEventListener("progressUpdate", handler);
  }, [fetchProgress]);

  // Function to handle day click: only navigate, do NOT mark complete
  const handleDayClick = (day) => {
    if (day <= progress.dayCompleted + 1) {
      navigate(`/courses/5g-training/day${day}`);
    }
  };

  return (
    <div className="training-page">
      {/* Navbar (same as dashboard) */}
      <header className="hero-section">
        <div className="container">
          <nav className="nav">
            <div className="logo">LearnFlow</div>
            <div className="auth-buttons">
              <button
                className="button button-secondary"
                onClick={() => {
                  navigate("/dashboard/student");
                }}
              >
                <i className="fas fa-arrow-left"></i> Dashboard
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Training Module Content */}
      <div className="training-container">
        <h1 className="training-title">5G Technology Training</h1>
        <p className="training-subtitle">
          Complete each day to unlock the next module
        </p>

        <div className="progress-container">
          <div className="progress-bar-wrapper">
            <div
              className="progress-fill"
              style={{
                width: `${(progress.dayCompleted / progress.totalDays) * 100}%`,
              }}
            ></div>
          </div>
          <span className="progress-text">
            {Math.round((progress.dayCompleted / progress.totalDays) * 100)}%
            Complete
          </span>
        </div>

        {/* Days list */}
        <div className="days-list">
          {/* Day 1 */}
          <div
            className={`day-item ${
              progress.dayCompleted >= 1 ? "completed" : ""
            } ${progress.dayCompleted === 0 ? "clickable" : "locked"}`}
            onClick={() => handleDayClick(1)}
          >
            <div className="day-icon">
              {progress.dayCompleted >= 1 ? (
                <i className="fas fa-check-circle"></i>
              ) : (
                <div className="circle" />
              )}
            </div>
            <div className="day-info">
              <strong>Day 1: 4G to 5G Evolution & Architecture</strong>
              <p>
                {progress.dayCompleted >= 1 ? "Completed" : "Ready to start"}
              </p>
            </div>
            {progress.dayCompleted < 1 && (
              <i className="fas fa-lock lock-icon"></i>
            )}
            {progress.dayCompleted === 0 && (
              <button
                className="start-day-btn"
                onClick={() => handleDayClick(1)}
              >
                Start Day
              </button>
            )}
            {progress.dayCompleted >= 1 && (
              <span className="completed-label"></span>
            )}
          </div>

          {/* Day 2 to 5 - locked or clickable */}
          {[2, 3, 4, 5].map((day) => (
            <div
              key={day}
              className={`day-item ${
                progress.dayCompleted >= day ? "completed" : ""
              } ${day === progress.dayCompleted + 1 ? "clickable" : "locked"}`}
              onClick={() =>
                day === progress.dayCompleted + 1 ? handleDayClick(day) : null
              }
            >
              <div className="day-icon">
                {progress.dayCompleted >= day ? (
                  <i className="fas fa-check-circle"></i>
                ) : (
                  <div className="circle" />
                )}
              </div>
              <div className="day-info">
                <strong>
                  {`Day ${day}: ${
                    {
                      2: "5G RAN and Core Network",
                      3: "QoS, MEC & Network Slicing",
                      4: "5G Security, IoT & M2M",
                      5: "Standards & Future of 5G",
                    }[day]
                  }`}
                </strong>
                <p>
                  {progress.dayCompleted >= day
                    ? "Completed"
                    : "Locked - Complete previous day first"}
                </p>
              </div>
              {day !== progress.dayCompleted + 1 && (
                <i className="fas fa-lock lock-icon"></i>
              )}
              {day === progress.dayCompleted + 1 && (
                <button
                  className="start-day-btn"
                  onClick={() => handleDayClick(day)}
                >
                  Start Day
                </button>
              )}
            </div>
          ))}

          {/* Final Assessment */}
          <div className="final-assessment">
            <h3>
              <i className="fas fa-graduation-cap"></i>{" "}
              <span className="final-assessment-title">Final Assessment</span>
            </h3>
            <p className="final-assessment-desc">
              Complete all 5 days to unlock the comprehensive final assessment
            </p>
            <button
                className={finalCompleted ? "complete-attempted" : "complete-locked"}
                disabled={progress.dayCompleted < progress.totalDays || finalCompleted}
                onClick={() => {
                  if (progress.dayCompleted === progress.totalDays && !finalCompleted) {
                    navigate("/courses/5g-training/final-assessment");
                  }
                }}
                style={{
                  cursor:
                    progress.dayCompleted === progress.totalDays && !finalCompleted
                      ? "pointer"
                      : "not-allowed",
                }}
              >
                {finalCompleted ? (
                  <>
                    <i
                      className="fas fa-check-circle finish-icon"
                      style={{ marginRight: "8px" }}
                    ></i>
                    Attempted
                  </>
                ) : progress.dayCompleted === progress.totalDays ? (
                  <>
                    <i
                      className="fas fa-graduation-cap finish-icon"
                      style={{ marginRight: "8px" }}
                    ></i>
                    Take Final Assessment
                  </>
                ) : (
                  <>
                    <i
                      className="fas fa-lock finish-icon"
                      style={{ marginRight: "8px" }}
                    ></i>
                    Complete All 5 Days First ({progress.dayCompleted}/
                    {progress.totalDays} completed)
                  </>
                )}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
