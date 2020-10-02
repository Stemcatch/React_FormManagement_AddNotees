import React, { useState } from "react";

const NoteForm = (props) => {
  const [note, setNote] = useState({ title: "", body: "" });

  const handleChanges = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter Title"
        onChange={handleChanges}
        value={note.title}
        name="title"
      />
      <label htmlFor="note">Note</label>
      <textarea
        id="note"
        placeholder="Add your note here."
        value={note.body}
        onChange={handleChanges}
        name="body"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};
export default NoteForm;
