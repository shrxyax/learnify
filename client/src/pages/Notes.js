import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTrash, FaStar, FaEdit, FaSave } from "react-icons/fa";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editContent, setEditContent] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("learnify_notes"));
    if (stored) setNotes(stored);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("learnify_notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() === "") return;
    setNotes([...notes, { text: newNote, favorite: false }]);
    setNewNote("");
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  const toggleFavorite = (index) => {
    const updated = [...notes];
    updated[index].favorite = !updated[index].favorite;
    setNotes(updated);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditContent(notes[index].text);
  };

  const saveEdit = () => {
    const updated = [...notes];
    updated[editIndex].text = editContent;
    setNotes(updated);
    setEditIndex(null);
    setEditContent("");
  };

  return (
    <div className="dashboard-page dark-theme">
      <Header />
      <div className="notes-container">
        <h2 className="section-heading text-glow">📝 Notes</h2>

        <div className="note-input-area">
          <input
            className="note-input"
            type="text"
            placeholder="Write your note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button className="add-btn glass-button" onClick={addNote}>
            Add Note
          </button>
        </div>

        <div className="note-list">
          {notes.map((note, index) => (
            <div key={index} className={`note-card ${note.favorite ? "fav" : ""}`}>
              {editIndex === index ? (
                <>
                  <textarea
                    className="edit-input"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <button className="save-btn" onClick={saveEdit}>
                    <FaSave />
                  </button>
                </>
              ) : (
                <>
                  <p>{note.text}</p>
                  <div className="note-actions">
                    <button onClick={() => toggleFavorite(index)} title="Favorite">
                      <FaStar color={note.favorite ? "gold" : "gray"} />
                    </button>
                    <button onClick={() => startEdit(index)} title="Edit">
                      <FaEdit />
                    </button>
                    <button onClick={() => deleteNote(index)} title="Delete">
                      <FaTrash color="red" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notes;
