import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import AddNoteScreen from "./AddNoteScreen";
import ShowNotesScreen from "./ShowNotesScreen";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  return (
    <div className="d-flex flex-column align-items-center vw-100 vh-100 bg-dark text-light ">
      <Routes>
        <Route path="/" element={<ShowNotesScreen />} />
        <Route path="/add" element={<AddNoteScreen />} />
      </Routes>
    </div>
  );
}

export default App;
