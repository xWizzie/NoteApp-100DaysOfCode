import React from "react";
import Note from "./Note";
import { useState, useEffect } from "react";

function ShowNotesScreen() {
  const [notes, setNotes] = useState([{}]);

  const handleDelete = async (id) => {
    console.log("Deleting note with id:", id);
    try {
      const response = await fetch(`/api/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Note deleted successfully");
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
        console.log(data);
        setNotes(data);
      });
  }, []);

  return (
    <>
      <div className="d-flex flex-align justify-content-evenly flex-wrap">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            createdAt={note.createdAt}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default ShowNotesScreen;
