import React, { useState, useEffect } from "react";
import "./App.css";
import AddNoteScreen from "./AddNoteScreen";
import ShowNotesScreen from "./ShowNotesScreen";
function App() {
  const [addNote, setAddNote] = useState(false);

  const handleAddNoteClicked = () => {
    setAddNote(!addNote);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center vw-100 vh-100 bg-dark text-light ">
        {addNote ? (
          <h1 className="m-3 p-3">Add Note</h1>
        ) : (
          <h1 className="m-3 p-3">All Notes</h1>
        )}

        {addNote ? <AddNoteScreen /> : <ShowNotesScreen />}
        <div className="d-flex justify-content-end position-absolute bottom-0 end-0 m-3">
          <button
            className="btn btn-primary rounded-circle fs-1"
            onClick={() => handleAddNoteClicked()}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
