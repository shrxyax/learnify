import React from "react";
import { useNavigate } from "react-router-dom";

// Local images
import speakingImg from "../assets/practice-images/speaking.jpeg";
import listeningImg from "../assets/practice-images/listening.png";
import writingImg from "../assets/practice-images/writing.png";
import flashcardsImg from "../assets/practice-images/cards.jpeg";
import dialogueImg from "../assets/practice-images/dialogue.png";

export default function Practice() {
  const navigate = useNavigate();

  const practices = [
    { title: "Speaking Practice", img: speakingImg },
    { title: "Listening Practice", img: listeningImg },
    { title: "Writing Practice", img: writingImg },
    { title: "Flashcards", img: flashcardsImg },
    { title: "Dialogue Practice", img: dialogueImg },
  ];

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  const startPractice = (activity) => {
    navigate(`/practice/${encodeURIComponent(activity)}`);
  };

  return (
    <div className="dashboard-page dark-theme">
      {/* 🔷 Navbar */}
      <nav className="navbar dark-navbar">
        <div className="logo text-glow">🌍 Learnify</div>
        <div className="nav-links">
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <a href="/Dashboard">Home</a>
          <button className="logout-btn neon-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* 🏙️ Hero */}
      <header className="hero-section dark-hero">
        <h1 className="text-glow">Practice Makes Perfect</h1>
        <p>Sharpen your skills with daily practice tools.</p>
      </header>

      {/* 🎯 Practice Activities */}
      <section className="section">
        <h2 className="section-heading text-glow">🎯 Practice</h2>
        <div className="card-grid">
          {practices.map((item, i) => (
            <div key={i} className="card dark-card">
              <img src={item.img} alt={item.title} className="lesson-image" />
              <div className="card-overlay">
                <h3>{item.title}</h3>
                <button
                  className="card-btn glass-button"
                  onClick={() => startPractice(item.title)}
                >
                  Start Practice
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔻 Footer */}
      <footer className="footer dark-footer">
        <div className="footer-logo text-glow">🌍 Learnify</div>
        <p>© 2025 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
}
