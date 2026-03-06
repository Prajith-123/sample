import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Login.css";

export default function Login({ setToken }) {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  // Toast state
  const [toast, setToast] = useState({ message: "", type: "" });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload =
      role === "student"
        ? { role, email: email.trim(), password }
        : { role, fullName: fullName.trim(), password };

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        // backend returned HTTP error
        setToast({ message: data.message || "Login failed", type: "error" });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        return;
      }

      if (data.token) {
        // Show success toast
        setToast({
          message: `Welcome ${data.fullName || "User"}!`,
          type: "success",
        });
        setShowToast(true);

        // Save token
        setToken(data.token);
        sessionStorage.setItem("token", data.token);
        // Save full name for display in dashboard
        if (data.fullName) {
          sessionStorage.setItem("fullName", data.fullName);
        }

        // Save role
        sessionStorage.setItem("role", data.role);

        // Save full name
        if (data.fullName) {
          sessionStorage.setItem("fullName", data.fullName);
        }

        // Redirect based on role
        if (data.role === "student") {
          navigate("/dashboard/student");
        } else if (data.role === "mentor") {
          navigate("/dashboard/mentor");
        }

        // Hide toast after 1 second
        setTimeout(() => setShowToast(false), 1000);
      } else {
        setToast({ message: data.message || "Login failed", type: "error" });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setToast({
        message: "An error occurred. Please try again.",
        type: "error",
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  // Effect to toggle show class for sliding animation
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
        <div className={`toast ${toast.type}`}>{toast.message}</div>
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

      {/* Login Section */}
      <section className="register-section">
        <div className="register-container">
          <h1 className="register-title">Welcome Back</h1>
          <p className="register-subtitle">
            Log in to continue your learning journey
          </p>

          <div className="register-card">
            {/* Role Selection */}
            <div className="role-label">I am a</div>
            <div className="role-toggle">
              <button
                type="button"
                className={`role-btn ${role === "student" ? "active" : ""}`}
                onClick={() => setRole("student")}
              >
                Student
              </button>
              <button
                type="button"
                className={`role-btn ${role === "mentor" ? "active" : ""}`}
                onClick={() => setRole("mentor")}
              >
                Mentor
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Conditional Field */}
              {role === "student" ? (
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              ) : (
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <span className="forgot-password">Forgot password?</span>
              </div> */}

              <button type="submit" className="login-button">
                Log In
              </button>
            </form>
          </div>

          <p className="register-login">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Sign up</span>
          </p>
        </div>
      </section>
    </div>
  );
}
