const Note = require("../models/Note");

const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

const createNote = async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content });
  const savedNote = await note.save();
  res.status(201).json(savedNote);
};

const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};
