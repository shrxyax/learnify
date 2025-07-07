import React from "react";
import { Routes, Route } from "react-router-dom";
//import Login from "./pages/Login";
//import Signup from "./pages/Signup";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import Quizzes from "./pages/Quizzes";
import Practice from "./pages/Practice";
import About from './pages/About';
import Contact from './pages/Contact';
import DictionaryPage from "./pages/DictionaryPage";
import QuizDetailsPage from "./pages/QuizDetailsPage"; // 🆕 Import this!
import './style.css';
import LessonDetailsPage from "./pages/LessonDetailsPage";
import PracticeDetailsPage from "./pages/PracticeDetailsPage";
import Notes from "./pages/Notes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dictionary" element={<DictionaryPage />} />
      
      {/* 🧠 New dynamic route for quiz solving */}
      <Route path="/quiz/:title" element={<QuizDetailsPage />} />
      <Route path="/lessons/:topic" element={<LessonDetailsPage />} />
      <Route path="/practice/:practiceType" element={<PracticeDetailsPage />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
}

export default App;
