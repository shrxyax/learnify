// src/pages/QuizDetailsPage.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const quizData = {
  "Vocabulary Quiz": [
    { question: "What is the synonym of 'happy'?", options: ["Sad", "Angry", "Joyful", "Scared"], answer: "Joyful" },
    { question: "Choose the opposite of 'hot'.", options: ["Cold", "Warm", "Boiling", "Burning"], answer: "Cold" },
    { question: "What’s the meaning of ‘rapid’?", options: ["Slow", "Fast", "Tired", "Bright"], answer: "Fast" },
    { question: "Find the synonym of 'tiny'.", options: ["Huge", "Little", "Massive", "Wide"], answer: "Little" },
    { question: "Which word means ‘angry’?", options: ["Mad", "Glad", "Soft", "Sharp"], answer: "Mad" },
    { question: "Choose the antonym of ‘difficult’.", options: ["Challenging", "Easy", "Tough", "Complicated"], answer: "Easy" },
    { question: "Which word means the same as ‘funny’?", options: ["Hilarious", "Serious", "Strict", "Dark"], answer: "Hilarious" },
    { question: "Find the opposite of 'strong'.", options: ["Brave", "Weak", "Smart", "Quick"], answer: "Weak" },
    { question: "What is the synonym of 'clean'?", options: ["Dirty", "Tidy", "Messy", "Ugly"], answer: "Tidy" },
    { question: "Choose the opposite of ‘fast’.", options: ["Speedy", "Swift", "Slow", "Quick"], answer: "Slow" },
  ],

  "Grammar Quiz": [
    { question: "Select the correct sentence.", options: ["He go to school.", "He goes to school."], answer: "He goes to school." },
    { question: "Identify the noun in: 'The cat slept peacefully.'", options: ["cat", "slept", "peacefully", "the"], answer: "cat" },
    { question: "Which is a verb?", options: ["Run", "Beautiful", "Quick", "Green"], answer: "Run" },
    { question: "Choose the adverb.", options: ["Quickly", "Fast", "Blue", "Tree"], answer: "Quickly" },
    { question: "Identify the preposition in: 'She sat on the chair.'", options: ["sat", "on", "chair", "she"], answer: "on" },
    { question: "Which sentence is correct?", options: ["They was late.", "They were late."], answer: "They were late." },
    { question: "Select the pronoun.", options: ["John", "Car", "He", "Book"], answer: "He" },
    { question: "Choose the conjunction.", options: ["And", "Cat", "Bright", "Run"], answer: "And" },
    { question: "Which is a proper noun?", options: ["city", "apple", "John", "car"], answer: "John" },
    { question: "Find the adjective in: 'The cake is delicious.'", options: ["cake", "is", "delicious", "the"], answer: "delicious" },
  ],

  "Listening Quiz": [
    { question: "What should you wear when listening to audio?", options: ["Gloves", "Headphones", "Shoes", "Cap"], answer: "Headphones" },
    { question: "Which one is a listening skill?", options: ["Writing", "Speaking", "Hearing", "Drawing"], answer: "Hearing" },
    { question: "What helps improve listening?", options: ["Loud music", "Practice", "Sleeping", "Eating"], answer: "Practice" },
    { question: "To understand accents, you need to?", options: ["Talk faster", "Listen more", "Ignore", "Read more"], answer: "Listen more" },
    { question: "Listening helps with?", options: ["Grammar", "Understanding", "Drawing", "Math"], answer: "Understanding" },
    { question: "Best tool for audio learning?", options: ["TV", "Notebook", "Headphones", "Pen"], answer: "Headphones" },
    { question: "Listening is important in?", options: ["Language learning", "Cooking", "Driving", "Painting"], answer: "Language learning" },
    { question: "To listen means to?", options: ["Talk", "Speak", "Pay attention to sound", "Sleep"], answer: "Pay attention to sound" },
    { question: "Listening helps improve your?", options: ["Vocabulary", "Vision", "Touch", "Taste"], answer: "Vocabulary" },
    { question: "One tip for better listening is?", options: ["Multitask", "Focus", "Ignore", "Sleep"], answer: "Focus" },
  ],

  "Translation Quiz": [
    { question: "Translate 'Hello' to Spanish.", options: ["Hola", "Bonjour", "Hallo", "Ciao"], answer: "Hola" },
    { question: "Translate 'Thank you' to French.", options: ["Gracias", "Danke", "Merci", "Grazie"], answer: "Merci" },
    { question: "Translate 'Dog' to German.", options: ["Chien", "Hund", "Perro", "Cane"], answer: "Hund" },
    { question: "Translate 'Book' to Italian.", options: ["Libro", "Buch", "Livre", "Libro"], answer: "Libro" },
    { question: "Translate 'Yes' to Spanish.", options: ["Sí", "Oui", "Ja", "Sì"], answer: "Sí" },
    { question: "Translate 'Water' to French.", options: ["Eau", "Wasser", "Acqua", "Agua"], answer: "Eau" },
    { question: "Translate 'House' to German.", options: ["Maison", "Haus", "Casa", "Casa"], answer: "Haus" },
    { question: "Translate 'No' to Italian.", options: ["Nein", "Non", "No", "Nee"], answer: "No" },
    { question: "Translate 'Goodbye' to French.", options: ["Adiós", "Ciao", "Auf Wiedersehen", "Au revoir"], answer: "Au revoir" },
    { question: "Translate 'Food' to Spanish.", options: ["Comida", "Nourriture", "Essen", "Cibo"], answer: "Comida" },
  ],

  "Pronunciation Quiz": [
    { question: "Which word is pronounced with a silent 'k'?", options: ["Kite", "Knee", "Key", "Kick"], answer: "Knee" },
    { question: "The 'ph' in 'phone' sounds like?", options: ["p", "f", "b", "v"], answer: "f" },
    { question: "Which has a silent letter?", options: ["Walk", "Talk", "Both", "None"], answer: "Both" },
    { question: "‘ough’ in ‘though’ sounds like?", options: ["off", "oo", "oh", "ow"], answer: "oh" },
    { question: "Which ends with a soft ‘g’?", options: ["Bag", "Dog", "Sing", "Pig"], answer: "Sing" },
    { question: "In ‘island’, which letter is silent?", options: ["i", "s", "l", "a"], answer: "s" },
    { question: "‘kn’ is silent in?", options: ["Knit", "Know", "Knife", "All"], answer: "All" },
    { question: "‘wr’ is silent in?", options: ["Wrap", "Wreck", "Wrist", "All"], answer: "All" },
    { question: "How is ‘queue’ pronounced?", options: ["q", "cue", "que", "kew"], answer: "cue" },
    { question: "‘ps’ in psychology is pronounced?", options: ["s", "p", "ps", "z"], answer: "s" },
  ],
};


export default function QuizDetailsPage() {
  const { title } = useParams();
  const questions = quizData[title] || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
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

      {/* 🧠 Quiz Body */}
      <div className="quiz-container dark-theme">
        <h2 className="text-glow">{title}</h2>
        {showScore ? (
          <h3 className="text-glow">
            🎉 You scored {score} out of {questions.length}
          </h3>
        ) : (
          <div className="quiz-card">
            <p className="question text-glow">{questions[current].question}</p>
            <div className="options">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  className="option-btn"
                  onClick={() => handleAnswer(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
        <Footer />
      </div>

      {/* ✅ Inline styles for proper one-line options */}
      <style jsx="true">{`
        .quiz-container {
          padding: 2rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .quiz-card {
          background-color: #1f1f2e;
          border-radius: 12px;
          padding: 30px;
          margin-top: 20px;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }

        .question {
          font-size: 1.25rem;
          margin-bottom: 20px;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .option-btn {
          padding: 12px 20px;
          font-size: 1rem;
          border-radius: 8px;
          border: 2px solid #444;
          background-color: #333;
          color: #fff;
          text-align: left;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .option-btn:hover {
          background-color: #555;
          border-color: #0099ff;
        }

        .text-glow {
          text-shadow: 0 0 8px #0ff;
        }
      `}</style>
    </div>
  );
}
