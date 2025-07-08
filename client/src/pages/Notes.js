// src/pages/Notes.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NoteForm from "../components/NoteForm";
import NoteItem from "../components/NoteItem";
import "./Notes.css"; // Or your custom CSS

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Fetch all notes from the backend
  const fetchNotes = async () => {
    try {
      const res = await axios.get("/api/notes");
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  // Add new note
  const addNote = async () => {
    if (newNote.trim() === "") return;
    await axios.post("/api/notes", { title: newNote, content: "" });
    setNewNote("");
    fetchNotes();
  };

  // Delete note by ID
  const deleteNote = async (id) => {
    await axios.delete(`/api/notes/${id}`);
    fetchNotes();
  };

  // Update a note
  const updateNote = async (id, updatedTitle) => {
    await axios.put(`/api/notes/${id}`, { title: updatedTitle, content: "" });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="dashboard-page dark-theme">
      <Header />
      <h2 className="section-heading text-glow">Notes</h2>

      <NoteForm newNote={newNote} setNewNote={setNewNote} addNote={addNote} />

      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Notes;
