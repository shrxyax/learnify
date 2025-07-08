const express = require('express');
const router = express.Router();
const Note = require('../models/Note'); // ✅ ADD THIS LINE

const {
  getNotes,
  createNote,
  deleteNote,
} = require('../controllers/noteController');

// Get all notes
router.get('/', getNotes);

// Create a new note
router.post('/', createNote);

// Delete a note
router.delete('/:id', deleteNote);

// Update a note
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Failed to update note" });
  }
});

module.exports = router;
