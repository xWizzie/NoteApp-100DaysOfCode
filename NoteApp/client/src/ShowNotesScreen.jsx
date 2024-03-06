import React from "react";
import Note from "./Note";
import { useState, useEffect } from "react";
import BottomRightButton from "./BottomRightButton";

const ShowNotesScreen = () => {
  const [notes, setNotes] = useState([{}]);

  const handleDelete = async (id) => {
    console.log("Deleting note with id:", id);
    try {
      const response = await fetch(`/api/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Note deleted successfully");
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
      } else {
        console.error("Error deleting note:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  return (
    <>
      <div className="d-flex flex-column align-items-center vw-100 vh-100 bg-dark text-light">
        <h1 className="m-3 p-3">All Notes</h1>
        <div className="d-flex flex-align justify-content-evenly flex-wrap">
          {notes.length > 0 ? (
            notes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                createdAt={note.createdAt}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p>No notes available</p>
          )}
        </div>
      </div>

      <BottomRightButton target={"add"} icon={"bi bi-plus"} />
    </>
  );
};

export default ShowNotesScreen;
