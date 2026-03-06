import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Day.css";
import "../Test/Test.css";

/* ---------- UI Components ---------- */
const Button = ({ onClick, children, disabled, style }) => (
  <button
    className="btn"
    onClick={!disabled ? onClick : undefined}
    disabled={disabled}
    style={style}
  >
    {children}
  </button>
);

const Textarea = ({ value, onChange, disabled }) => (
  <textarea
    className="textarea"
    value={value}
    onChange={onChange}
    disabled={disabled}
    placeholder="Write your answer here"
  />
);

export default function Final() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(false);
  // Support tokens saved in either sessionStorage or localStorage
  const token = sessionStorage.getItem("token") || localStorage.getItem("token");

  /* ---------- FETCH FINAL QUESTIONS ---------- */
  useEffect(() => {
    const fetchFinalQuestions = async () => {
      try {
        // 🔒 Check progress first
        const progressRes = await fetch(
          "http://localhost:5000/progress/progress",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const progressData = await progressRes.json();

        if (progressData?.finalAssessmentCompleted) {
          setLocked(true);
          setSubmitted(true);
          setLoading(false);
          return;
        }

        // ✅ Fetch questions only if not completed
        const res = await fetch("http://localhost:5000/api/final-assessment");
        const data = await res.json();

        setQuestions(data.theory || []);
        setAnswers(Array(data.theory.length).fill(""));
        setLoading(false);
      } catch (err) {
        console.error("Failed to load final assessment", err);
        setLoading(false);
      }
    };

    fetchFinalQuestions();
  }, [token]);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const allAnswered =
    answers.length > 0 && answers.every((ans) => ans.trim().length > 0);

  const handleSubmit = async () => {
    if (!allAnswered || locked) return;

    try {
      // ✅ Update DB
      await fetch("http://localhost:5000/progress/final", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // (Optional) local session storage — harmless to keep
      sessionStorage.setItem(
        "finalAssessment",
        JSON.stringify({
          completedAt: new Date().toISOString(),
          answers,
        })
      );
      sessionStorage.setItem("finalAssessmentCompleted", "true");

      setSubmitted(true);
      setLocked(true);
    } catch (err) {
      console.error("Final assessment submission failed", err);
    }
  };

  /* ---------- LOADING STATE ---------- */
  if (loading) {
    return (
      <div className="page-container">
        <header className="hero-section">
          <div className="container">
            <nav className="nav">
              <div className="logo">LearnFlow</div>
            </nav>
          </div>
        </header>

        <div className="page-header">
          <h1>Loading Final Assessment...</h1>
          <p className="page-subtitle">
            Please wait while we load your questions
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <i
            className="fas fa-spinner fa-spin"
            style={{ fontSize: 30, color: "#2979ff" }}
          ></i>
        </div>
      </div>
    );
  }

  /* ---------- RESULT VIEW ---------- */
  if (submitted) {
    return (
      <div className="page-container">
        <header className="hero-section">
          <div className="container">
            <nav className="nav">
              <div className="logo">LearnFlow</div>
            </nav>
          </div>
        </header>

        <div className="page-header">
          <h1>Final Assessment Completed</h1>
          <p className="page-subtitle">
            Thank you for taking the Final Assessment
          </p>
        </div>

        <div
          className="test-test-container"
          style={{
            maxWidth: 800,
            margin: "40px auto",
            padding: 40,
            background: "#161616",
            borderRadius: 14,
            boxShadow: "0 0 40px rgba(0,0,0,0.6)",
          }}
        >
          {questions.map((q, idx) => (
            <div
              key={idx}
              style={{
                background: "#1f1f1f",
                padding: 20,
                borderRadius: 10,
                marginBottom: 25,
                textAlign: "left",
              }}
            >
              <h3>Question {idx + 1}</h3>
              <p>{q.question}</p>

              <div style={{ fontWeight: "bold", marginTop: 10 }}>
                Your Answer:
              </div>
              <div
                style={{
                  background: "#2c2c2c",
                  padding: 12,
                  borderRadius: 8,
                  marginBottom: 10,
                }}
              >
                {answers[idx]}
              </div>

              <div style={{ fontWeight: "bold", color: "#4caf50" }}>
                Correct Answer:
              </div>
              <div
                style={{
                  background: "#0a522f",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                {q.answer}
              </div>

              {q.keyPoints?.length > 0 && (
                <>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "#f5a623",
                      marginTop: 10,
                    }}
                  >
                    Expected Keywords:
                  </div>
                  <ul style={{ color: "#aaa" }}>
                    {q.keyPoints.map((kw, i) => (
                      <li key={i}>{kw}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Button
              onClick={() => navigate("/dashboard/student")}
              // Enable the button after submission as well — keep disabled only
              // when the user hasn't answered all questions and hasn't submitted.
              disabled={!submitted && !allAnswered}
              style={{
                background: "linear-gradient(90deg, #2979ff, #8e2de2)",
                color: "white",
                padding: "12px 30px",
                borderRadius: 8,
                // If submitted, show full opacity. Otherwise require answers and
                // not locked to show full opacity.
                opacity: submitted || (allAnswered && !locked) ? 1 : 0.5,
              }}
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- QUESTION ENTRY VIEW ---------- */
  return (
    <div className="page-container">
      <header className="hero-section">
        <div className="container">
          <nav className="nav">
            <div className="logo">LearnFlow</div>
          </nav>
        </div>
      </header>

      <div className="page-header">
        <span className="page-label">Final Assessment</span>
        <h1>5G Technology Final Assessment</h1>
        <p className="page-subtitle">
          Answer all questions to complete the 5G training program
        </p>
      </div>

      <div
        className="test-test-container"
        style={{
          maxWidth: 800,
          margin: "40px auto",
          padding: 40,
          background: "#161616",
          borderRadius: 14,
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
        }}
      >
        {questions.map((q, idx) => (
          <div
            key={idx}
            style={{
              background: "#1f1f1f",
              padding: 20,
              borderRadius: 10,
              marginBottom: 25,
            }}
          >
            <h3>Question {idx + 1}</h3>
            <p>{q.question}</p>

            <Textarea
              value={answers[idx]}
              onChange={(e) => handleChange(idx, e.target.value)}
            />
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            style={{
              background: "linear-gradient(90deg, #2979ff, #8e2de2)",
              color: "white",
              padding: "12px 30px",
              borderRadius: 8,
              opacity: allAnswered ? 1 : 0.5,
            }}
          >
            Submit <i className="fas fa-paper-plane"></i>
          </Button>
        </div>

        {!allAnswered && (
          <p style={{ textAlign: "center", color: "#f5a623", marginTop: 10 }}>
            Please answer all questions before submitting.
          </p>
        )}
      </div>
    </div>
  );
}
