import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-page dark-theme">
      {/* ✅ Reusable Header */}
      <Header />

      {/* 🏙️ Hero */}
      <header className="hero-section">
        <h1 className="hero-title neon-text">Welcome to Learnify</h1>
        <p className="hero-subtitle">
          Master languages with interactive lessons, quizzes & practice tools.
        </p>
        <button className="cta-btn glow-btn" onClick={() => handleNavigate("/lessons")}>
          Start Learning
        </button>
      </header>

      {/* 🌍 Language Picker */}
      <section id="language-section" className="language-section">
        <h2>
          Which <span className="text-accent">language</span> do you want to learn?
        </h2>
        <div className="language-options">
          <button>🇲🇽 Spanish (Mexico)</button>
          <button>🇪🇸 Spanish (Spain)</button>
          <button>🇫🇷 French</button>
          <button>🇩🇪 German</button>
          <button>🇮🇹 Italian</button>
          <button className="more-lang">➕ More</button>
        </div>
      </section>

      {/* 🧠 Quick Links */}
      <section className="section">
        <div className="card-grid">
          <div className="quick-card neon-card" onClick={() => handleNavigate("/lessons")}>
            <span className="emoji">📘</span>
            <h3 className="quick-title">Lessons</h3>
          </div>

          <div className="quick-card neon-card" onClick={() => handleNavigate("/quizzes")}>
            <span className="emoji">🧠</span>
            <h3 className="quick-title">Quizzes</h3>
          </div>

          <div className="quick-card neon-card" onClick={() => handleNavigate("/practice")}>
            <span className="emoji">🎯</span>
            <h3 className="quick-title">Practice</h3>
          </div>

          <div className="quick-card neon-card" onClick={() => handleNavigate("/Notes")}>
            <span className="emoji">📝</span>
            <h3 className="quick-title">Notes</h3>
          </div>

          <div className="quick-card neon-card" onClick={() => handleNavigate("/Dictionary")}>
            <span className="emoji">🔥</span>
            <h3 className="quick-title">Dictionary</h3>
          </div>
        </div>
      </section>

      

      {/* ✅ Reusable Footer */}
      <Footer />
    </div>
  );
}
