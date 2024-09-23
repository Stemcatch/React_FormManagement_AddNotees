
import * as serviceWorker from './serviceWorker';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import "./styles.scss";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
    }
  ]);

  const deleteNote = (index) => {
    const originalNotes = [...notes];
    originalNotes.splice(index, 1);
    setNotes(originalNotes);
  };

  const addNewNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body
    };

    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      <NoteForm addNewNote={addNewNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.unregister();
