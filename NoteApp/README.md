# Note Taking App

This is a simple note-taking app built using React for the frontend and Express for the backend. The app allows users to view existing notes, add new notes, mark notes as done, and delete notes.

## Features
- **Show Notes Screen**: Displays a list of all existing notes. Each note shows its title, content, creation date, and provides options to mark the note as done or delete it.
- **Add Note Screen**: Allows users to add a new note by providing a title and content. The added note is then reflected in the list of all notes.

## Project Structure

### Frontend (React)
The frontend of the app is built with React. Here are the main components:

- **App**: The root component that sets up the application routing using `react-router-dom`.
- **ShowNotesScreen**: Displays all existing notes and provides options for marking notes as done or deleting them.
- **Note**: Represents an individual note, showing its title, content, creation date, and options to mark as done or delete.
- **AddNoteScreen**: Allows users to add a new note by providing a title and content.

### Backend (Express)
The backend is a primitive Express server with a few endpoints:

- **GET /api**: Retrieves all existing notes.
- **DELETE /api/:id**: Deletes a note based on its ID.
- **POST /api/add**: Adds a new note with the provided title and content.

**Note**: The server is primitive and serves as a basic example. It uses an in-memory array to store notes, and there's no persistent storage.

## Running the App

To run the app:

1. Install dependencies: `npm install` (both in the root directory and in the `client` directory).
2. Start the server: `npm run` in the root directory.
3. Start the React app: `npm run` in the `client` directory.

The app will be accessible at [http://localhost:3000](http://localhost:3000), and the server will run on [http://localhost:5000](http://localhost:5000).

Feel free to explore, add, and manage your notes!
