import React from "react";
import { useState } from "react";
function Note({ id, title, content, createdAt, onDelete }) {
  const [done, setDone] = useState(false);

  const markDone = () => {
    if (done) {
      setDone(false);
    } else {
      setDone(true);
    }
  };

  return (
    <div key={id} className="card text-bg-light m-2 p-2 w-auto">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-1">
          <h5 className="card-title m-0">{title}</h5>
          {done ? (
            <div className="btn bg-success p-0 mx-1 my-0 text-light">Done</div>
          ) : null}
        </div>

        <p className="card-text">{content}</p>
        <p className="card-text">
          <small className="text-muted">Created at: {createdAt}</small>
        </p>

        <div className="d-flex justify-content-between align-content-center">
          <button className="btn btn-primary" onClick={markDone}>
            Mak Done
          </button>

          {done ? (
            <div className="d-flex">
              <button
                className="btn btn-danger px-2 text-light"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Note;
