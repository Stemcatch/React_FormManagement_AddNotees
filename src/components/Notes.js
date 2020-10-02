import React from "react";

const Notes = (props) => {
  const handleDelete = (index) => {
    props.deleteNote(index);
  };
  return (
    <div className="note-list">
      {props.notes.map((note, index) => (
        <div className="note" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <button onClick={(event) => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Notes;
