import React from "react";

const NoteForm = ({ newNote, setNewNote, addNote }) => {
  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Write your note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default NoteForm;