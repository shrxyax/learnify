// ✅ Quizzes.js
import React from "react";
import { useNavigate } from "react-router-dom";


import vocabularyImg from "../assets/quiz-images/vocabulary_quiz.png";
import grammarImg from "../assets/quiz-images/grammar_quiz.png";
import listeningImg from "../assets/quiz-images/listening_quiz.png";
import translationImg from "../assets/quiz-images/translation.jpeg";
import pronunciationImg from "../assets/quiz-images/pronounciation.jpeg";


export default function Quizzes() {
  const navigate = useNavigate();
  const quizzes = [
  { title: "Vocabulary Quiz", img: vocabularyImg },
  { title: "Grammar Quiz", img: grammarImg },
  { title: "Listening Quiz", img: listeningImg },
  { title: "Translation Quiz", img: translationImg },
  { title: "Pronunciation Quiz", img: pronunciationImg },
];


  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  const startQuiz = (quiz) => {
  navigate(`/quiz/${encodeURIComponent(quiz.title)}`);
};


  return (
    <div className="dashboard-page dark-theme">
      {/* 🔷 Navbar */}
      <nav className="navbar dark-navbar">
        <div className="logo">🌍 Learnify</div>
        <div className="nav-links">
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <a href="/Dashboard">Home</a>
          <button className="logout-btn neon-button" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* 🧠 Hero Section */}
      <header className="hero-section dark-hero">
        <h1 className="text-glow">Test Your Skills</h1>
        <p>Take quizzes to reinforce and test your knowledge.</p>
      </header>

      {/* 🧪 Quizzes Grid */}
      <section className="section">
        <h2 className="section-heading text-glow">🧠 Quizzes</h2>
        <div className="card-grid">
          {quizzes.map((quiz, i) => (
            <div key={i} className="card dark-card">
              <img src={quiz.img} alt={quiz.title} />

              <div className="card-overlay">
                <h3>{quiz.title}</h3>
                <button className="card-btn glass-button" onClick={() => startQuiz(quiz)}>Start Quiz</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔻 Footer */}
      <footer className="footer dark-footer">
        <div className="footer-logo">🌍 Learnify</div>
        <p>© 2025 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
}
