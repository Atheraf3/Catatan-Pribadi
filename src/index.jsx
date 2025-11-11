import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import { getInitialData, showFormattedDate } from './utils';

import './styles/style.css';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');

  const onAddNote = (note) => {
    const newNote = {
      id: +new Date(),
      title: note.title,
      body: note.body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const onArchiveNote = (id) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const activeNotes = filteredNotes.filter(note => !note.archived);
  const archivedNotes = filteredNotes.filter(note => note.archived);

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Catatan Pribadi</h1>
      </header>
      <main className="note-app__body">
        <NoteInput onAddNote={onAddNote} />
        
        <div className="note-search">
          <input 
            type="text" 
            placeholder="Cari catatan..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <section className="notes-section">
          <h2>Catatan Aktif</h2>
          <NoteList 
            notes={activeNotes} 
            onDeleteNote={onDeleteNote}
            onArchiveNote={onArchiveNote}
            emptyMessage="Tidak ada catatan"
          />
        </section>
        
        <section className="notes-section">
          <h2>Catatan Arsip</h2>
          <NoteList 
            notes={archivedNotes} 
            onDeleteNote={onDeleteNote}
            onArchiveNote={onArchiveNote}
            emptyMessage="Tidak ada catatan arsip"
          />
        </section>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);