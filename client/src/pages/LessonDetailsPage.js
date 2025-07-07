// ✅ LessonDetailsPage.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const lessonContent = {
  English: {
    Greetings: "Hello! Hi! Good Morning! Nice to meet you!",
    Numbers: "One, Two, Three, Four, Five...",
    Phrases: "How are you? I'm fine. Thank you!",
    "Common Vocabulary": "Book, Apple, School, Water...",
    "Basic Grammar": "Subject + Verb + Object",
    "Useful Verbs": "Go, Eat, Drink, Read, Write...",
    "Daily Conversations": "What’s your name? Where are you from?"
  },
  Spanish: {
    Greetings: "¡Hola! ¡Buenos días! ¡Encantado de conocerte!",
    Numbers: "Uno, Dos, Tres, Cuatro, Cinco...",
    Phrases: "¿Cómo estás? Estoy bien. ¡Gracias!",
    "Common Vocabulary": "Libro, Manzana, Escuela, Agua...",
    "Basic Grammar": "Sujeto + Verbo + Objeto",
    "Useful Verbs": "Ir, Comer, Beber, Leer, Escribir...",
    "Daily Conversations": "¿Cómo te llamas? ¿De dónde eres?"
  },
  French: {
    Greetings: "Bonjour! Salut! Enchanté!",
    Numbers: "Un, Deux, Trois, Quatre, Cinq...",
    Phrases: "Comment ça va? Ça va bien. Merci!",
    "Common Vocabulary": "Livre, Pomme, École, Eau...",
    "Basic Grammar": "Sujet + Verbe + Objet",
    "Useful Verbs": "Aller, Manger, Boire, Lire, Écrire...",
    "Daily Conversations": "Comment tu t’appelles? Tu viens d’où?"
  }
};

const lessonOrder = [
  "Greetings",
  "Numbers",
  "Phrases",
  "Common Vocabulary",
  "Basic Grammar",
  "Useful Verbs",
  "Daily Conversations"
];

export default function LessonDetailsPage() {
  const { topic } = useParams();
  const [selectedLang, setSelectedLang] = useState("");
  const navigate = useNavigate();

  const languages = Object.keys(lessonContent);

  const handleLanguageSelect = (e) => {
    setSelectedLang(e.target.value);
  };

  const goToNextLesson = () => {
    const currentIndex = lessonOrder.indexOf(topic);
    const nextTopic = lessonOrder[currentIndex + 1];
    if (nextTopic) {
      navigate(`/lessons/${nextTopic}`);
    } else {
      alert("🎉 You've completed all lessons!");
    }
  };

  const goToQuiz = () => {
    navigate("/quizzes");
  };

  

  return (
    <div className="dashboard-page dark-theme">
      <Header />
      <div className="lesson-container">
        <h2 className="text-glow">📖 {topic}</h2>

        {!selectedLang ? (
          <div className="lang-select-box">
            <h3 className="text-glow">Select a Language to Learn:</h3>
            <select onChange={handleLanguageSelect} className="lang-dropdown">
              <option value="">-- Choose Language --</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="lesson-content">
            <h3 className="text-glow">📚 {selectedLang} - {topic}</h3>
            <p className="lesson-text">
              {lessonContent[selectedLang][topic] || "No content available for this lesson."}
            </p>
            <div className="lesson-actions">
              <button className="card-btn glass-button" onClick={goToNextLesson}>Next Lesson</button>
              <button className="card-btn rainbow-button" onClick={goToQuiz}>Go to Quiz</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
