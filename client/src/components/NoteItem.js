import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const NoteItem = ({ note, deleteNote, updateNote }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);

  const handleEdit = () => {
    if (editing && editedTitle !== note.title) {
      updateNote(note._id, editedTitle);
    }
    setEditing(!editing);
  };

  return (
    <div className="note-item">
      {editing ? (
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <p>{note.title}</p>
      )}
      <div className="icons">
        <FaEdit className="icon" onClick={handleEdit} />
        <FaTrash className="icon delete" onClick={() => deleteNote(note._id)} />
      </div>
    </div>
  );
};

export default NoteItem;
