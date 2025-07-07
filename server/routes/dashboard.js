const express = require("express");
const router = express.Router();

// Dummy data for now
router.get("/", (req, res) => {
  res.json({
    lessons: ["Intro to Spanish", "German Basics", "French for Travelers"],
    quizzes: ["Spanish Quiz 1", "German Practice", "French Grammar"],
    practice: ["Flashcards", "Speaking Practice", "Listening Drills"],
    trending: ["Daily Word Challenge", "Top Scorers", "New Features!"],
  });
});

module.exports = router;
