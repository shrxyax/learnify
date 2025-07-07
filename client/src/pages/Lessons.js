// ✅ Lessons.js
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Lessons() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();
  const sectionRef = useRef();

  useEffect(() => {
    setLessons([
      {
        title: "Greetings",
        image: "lesson-images/greetings.jpeg",
        content: "Learn how to greet people in different situations, say hello and goodbye, and express basic pleasantries like 'thank you', 'please', and 'you’re welcome'.",
      },
      {
        title: "Numbers",
        image: "lesson-images/numbers.jpeg",
        content: "Master counting from 1 to 100, understand ordinal numbers, and use numbers in dates, times, and shopping scenarios.",
      },
      {
        title: "Phrases",
        image: "lesson-images/phrases.png",
        content: "Common travel and everyday phrases including asking for directions, ordering food, and basic questions/answers.",
      },
      {
        title: "Common Vocabulary",
        image: "lesson-images/vocabulary.png",
        content: "Expand your word bank with commonly used nouns, adjectives, and verbs used in daily interactions.",
      },
      {
        title: "Basic Grammar",
        image: "lesson-images/basic grammar.png",
        content: "Understand sentence structure, subject-verb agreement, tenses, and more essential grammar rules.",
      },
      {
        title: "Useful Verbs",
        image: "lesson-images/verbs.jpeg",
        content: "Learn the most used action words and how to conjugate them in present, past, and future tenses.",
      },
      {
        title: "Daily Conversations",
        image: "lesson-images/dailychat.png",
        content: "Practice realistic conversations for real-life situations like shopping, meeting new people, or making appointments.",
      },
    ]);
  }, []);

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  const handleScrollToLessons = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const startLesson = (title) => {
  navigate(`/lessons/${encodeURIComponent(title)}`);
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
          <button className="logout-btn neon-button" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* 🏙️ Hero */}
      <header className="hero-section dark-hero">
        <h1 className="text-glow">Explore Language Lessons</h1>
        <p>Start learning essential language skills with interactive topics.</p>
        <button className="cta-btn rainbow-button" onClick={handleScrollToLessons}>Start a Lesson</button>
      </header>

      {/* 📚 Lessons Section */}
      <section className="section" ref={sectionRef}>
        <h2 className="section-heading text-glow">📘 Lessons</h2>
        <div className="card-grid">
          {lessons.map((lesson, i) => (
            <div key={i} className="card dark-card">
              <img src={lesson.image} alt={lesson.title} className="lesson-image" />
              <div className="card-overlay">
                <h3>{lesson.title}</h3>
                <p>{lesson.content}</p>
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="50"
                    src={lesson.video}
                    title={`Lesson video for ${lesson.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <button className="card-btn glass-button" onClick={() => startLesson(lesson.title)}>
                  Start Lesson
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧩 Footer */}
      <footer className="footer dark-footer">
        <div className="footer-logo">🌍 Learnify</div>
        <p>© 2025 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
}
