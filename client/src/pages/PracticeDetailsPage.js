import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const practiceContent = {
  "Speaking Practice": {
    description:
      "Improve your pronunciation and fluency by practicing speaking daily.",
    tips: [
      "Repeat common phrases out loud.",
      "Record your speech and listen for mistakes.",
      "Practice with a friend or tutor.",
    ],
  },
  "Listening Practice": {
    description:
      "Enhance your understanding of native speech with audio lessons.",
    tips: [
      "Listen to short conversations or podcasts.",
      "Focus on intonation and speed.",
      "Write down what you hear and compare.",
    ],
  },
  "Writing Practice": {
    description:
      "Sharpen your grammar and expression through writing exercises.",
    tips: [
      "Write short stories or paragraphs.",
      "Practice rewriting sentences using new vocabulary.",
      "Focus on sentence structure and clarity.",
    ],
  },
  Flashcards: {
    description:
      "Build your vocabulary with flashcard memorization techniques.",
    tips: [
      "Review words daily.",
      "Use spaced repetition apps.",
      "Create custom flashcards based on what you learn.",
    ],
  },
  "Dialogue Practice": {
    description:
      "Master conversations through role-play and interactive scripts.",
    tips: [
      "Act out scenarios (shopping, travel, meeting people).",
      "Use online dialogues and fill in the blanks.",
      "Practice alternating roles with a partner.",
    ],
  },
};

const PracticeDetailsPage = () => {
  const { practiceType } = useParams();
  const content = practiceContent[practiceType];

  return (
    <div className="dashboard-page dark-theme">
      <Header />
      <div className="lesson-container">
        <h2 className="text-glow">🧠 {practiceType}</h2>
        {content ? (
          <div className="practice-detail">
            <p className="lesson-text">{content.description}</p>
            <ul className="practice-tips">
              {content.tips.map((tip, index) => (
                <li key={index} className="lesson-text">✅ {tip}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="lesson-text">No content available for this practice type.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PracticeDetailsPage;
