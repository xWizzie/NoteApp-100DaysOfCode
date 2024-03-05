import React, { useState } from "react";

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

  const handleAddNote = () => {
    // Add your logic here to handle adding the note
    console.log("Note added:", note);
    setNote({
      id: "",
      title: "",
      content: "",
      createdAt: "",
    });
  };

  return (
    <div>
      <form>
        {/* <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={note.id}
            onChange={handleNoteChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
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
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={note.content}
            onChange={handleNoteChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Created At</label>
          <input
            type="text"
            className="form-control"
            id="createdAt"
            name="createdAt"
            value={note.createdAt}
            onChange={handleNoteChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNoteScreen;
