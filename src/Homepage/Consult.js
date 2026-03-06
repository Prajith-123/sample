import React from "react";
import "./Consult.css";

export default function Consult() {
  return (
    <div className="consult-page">
      {/* HEADER */}
      <section className="consult-hero">
        <div className="consult-hero-header">
          <img
            src="/images/Page_Logo.png"
            alt="Logo"
            className="consult-hero-logo"
          />
          <h1>CONSULT</h1>
        </div>
        <h2>AI & Robotics Lab and CoE Enablement</h2>
        <p>
          RoboHub CONSULT supports universities and organisations in
          establishing and operating Robotics and AI focused labs and Centres of
          Excellence.
        </p>
        <p className="sub-text">
          We provide advisory, technical planning and execution support across
          the full lifecycle.
        </p>
      </section>

      {/* MODELS SECTION */}
      <section className="consult-models">
        {/* MODEL A */}
        <div className="model-card">
          <div className="model-header">
            <h3>Model A – Operate & Train</h3>
            <span className="model-tag">Existing Lab</span>
          </div>

          <p className="model-desc">
            For organisations with an existing lab or equipment.
          </p>

          <ul>
            <li>Operational readiness of the lab</li>
            <li>Training for students, faculty and internal teams</li>
            <li>Lab workflows and SOPs</li>
          </ul>

          <div className="outcome-box">
            <strong>Outcome:</strong> A functional and actively used lab with
            trained users.
          </div>
        </div>

        {/* MODEL B */}
        <div className="model-card">
          <div className="model-header">
            <h3>Model B – Upgrade & Deploy</h3>
            <span className="model-tag">Lab Upgrade</span>
          </div>

          <p className="model-desc">
            For organisations with an existing lab or robot fleet that needs
            upgrading.
          </p>

          <ul>
            <li>Selection of new robot platforms and tools</li>
            <li>Integration and deployment support</li>
            <li>Training pathways for the upgraded platforms</li>
          </ul>

          <div className="outcome-box">
            <strong>Outcome:</strong> An upgraded lab with applied robotics and
            AI use-cases.
          </div>
        </div>

        {/* MODEL C */}
        <div className="model-card">
          <div className="model-header">
            <h3>Model C – Build, Operate & Transfer</h3>
            <span className="model-tag">New CoE</span>
          </div>

          <p className="model-desc">
            For organisations planning a new AI & Robotics Centre of Excellence.
          </p>

          <ul>
            <li>Space planning and layout advisory</li>
            <li>Platform and vendor recommendations</li>
            <li>Deployment and hands-on training</li>
            <li>Proposal and technical support for funding and programs</li>
          </ul>

          <div className="outcome-box">
            <strong>Outcome:</strong> A fully operational and sustainable AI &
            Robotics Centre of Excellence.
          </div>
        </div>
      </section>
    </div>
  );
}
