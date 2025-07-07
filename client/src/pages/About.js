import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="about-page dark-theme">
      <Header />
      <section className="section">
        <h1 className="section-heading neon-text">About Learnify</h1>
        <p className="about-text">
          Learnify is your companion in mastering new languages through immersive and interactive learning experiences. Our platform offers structured lessons, quizzes, and practice tools designed to help learners of all levels.
        </p>
        <p className="about-text">
          Whether you're just starting out or looking to refine your language skills, Learnify adapts to your pace and keeps you motivated with fun challenges and beautiful UI.
        </p>
      </section>
      <Footer />
    </div>
  );
}