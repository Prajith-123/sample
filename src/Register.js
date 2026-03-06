import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [extra, setExtra] = useState(""); // education or expertise
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toast state
  const [toast, setToast] = useState({ message: "", type: "" });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showToastMessage("Passwords do not match", "error");
      return;
    }

    const payload = {
      role,
      fullName,
      email,
      phone,
      extra,
      password,
    };

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        showToastMessage(data.message, "success");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        showToastMessage(data.message, "error");
      }
    } catch (error) {
      console.error("Registration error:", error);
      showToastMessage("An error occurred. Please try again.", "error");
    }
  };

  // Function to show toast
  const showToastMessage = (message, type) => {
    setToast({ message, type });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Slide in effect
  useEffect(() => {
    if (showToast) {
      const toastEl = document.querySelector(".toast");
      toastEl.classList.add("show");
    }
  }, [showToast]);

  return (
    <div className="home-page">
      {/* Toast Notification */}
      {showToast && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      {/* Navbar */}
      <header className="hero-section">
        <div className="container">
          <nav className="nav">
            <div className="logo">LearnFlow</div>
            <div className="auth-buttons">
              <button
                className="button button-secondary"
                onClick={() => navigate("/")}
              >
                <i className="fas fa-arrow-left"></i> Home
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Register Section */}
      <section className="register-section">
        <div className="register-container">
          <h1 className="register-title">Create Your Account</h1>
          <p className="register-subtitle">
            Join our learning platform and start your journey
          </p>

          <div className="register-card">
            {!role ? (
              <>
                <h3 className="register-card-title">I want to join as a:</h3>

                <div
                  className="register-option"
                  onClick={() => setRole("student")}
                >
                  <h4>Student</h4>
                  <p>Take courses and assessments</p>
                </div>

                <div
                  className="register-option"
                  onClick={() => setRole("mentor")}
                >
                  <h4>Mentor</h4>
                  <p>Create courses and guide students</p>
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    {role === "student"
                      ? "Current Education Level"
                      : "Area of Expertise"}
                  </label>
                  <input
                    type="text"
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="register-actions">
                  <button
                    type="button"
                    className="back-button"
                    onClick={() => setRole(null)}
                  >
                    Back
                  </button>

                  <button type="submit" className="create-button">
                    Create Account
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="register-login">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Log in</span>
          </p>
        </div>
      </section>
    </div>
  );
}
