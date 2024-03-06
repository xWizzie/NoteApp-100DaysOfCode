const express = require("express");
const app = express();
app.use(express.json());

// Note object template
class Note {
  constructor(id, title, content, createdAt) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
  }
}

// Sample notes
const note1 = new Note(
  1,
  "Meeting Notes",
  "Discuss project timelines and goals.",
  new Date()
);
const note2 = new Note(
  2,
  "Shopping List",
  "Milk, eggs, bread, and fruits.",
  new Date()
);
const note3 = new Note(
  3,
  "Ideas",
  "Brainstorming for the next project.",
  new Date()
);

// Array to store notes
const notesArray = [note1, note2, note3];

app.get("/api", (req, res) => {
  res.json(notesArray);
});

app.delete("/api/:id", (req, res) => {
  const id = req.params.id;
  const index = notesArray.findIndex((note) => note.id == id);
  if (index !== -1) {
    notesArray.splice(index, 1);
    res.json(notesArray);
  } else {
    res.status(404).send("Note not found");
  }
});

let nextId = notesArray.length + 1;

app.post("/api/add", (req, res) => {
  const { title, content } = req.body;
  const createdAt = new Date();
  const newNote = new Note(nextId, title, content, createdAt);
  notesArray.push(newNote);
  nextId++;
  res.json(notesArray);
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
