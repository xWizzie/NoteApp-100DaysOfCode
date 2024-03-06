import React, { useState } from "react";
import BottomRightButton from "./BottomRightButton";

const AddNoteScreen = () => {
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: "",
    createdAt: "",
  });

  const handleNoteChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNote = async () => {
    await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: note.title, content: note.content }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error adding note:", error.message);
      });
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div>
        <h1 className="m-3 p-3">Add Note</h1>

        <form>
          <div className="form-group">
            <label htmlFor="title" className="fs-1">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              onChange={handleNoteChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="fs-1">
              Content
            </label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              value={note.content}
              onChange={handleNoteChange}
            ></textarea>
          </div>

          <button
            type="button"
            className="btn btn-primary mt-3 btn-lg"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </form>
      </div>

      <BottomRightButton target={""} icon={"bi bi-arrow-left"} />
    </>
  );
};

export default AddNoteScreen;
