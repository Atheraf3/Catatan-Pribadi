import React, { useState } from 'react';

const NoteInput = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return;
    }
    
    const newNote = {
      title: title,
      body: body,
    };
    
    onAddNote(newNote);
    
    setTitle('');
    setBody('');
  };

  const remainingChars = maxTitleLength - title.length;

  return (
    <div className="note-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="note-input__title"
          placeholder="Masukkan judul..."
          value={title}
          onChange={(e) => {
            if (e.target.value.length <= maxTitleLength) {
              setTitle(e.target.value);
            }
          }}
          maxLength={maxTitleLength} 
        />
        <div className="note-input__title__char-limit">
          Sisa karakter: {remainingChars}
        </div>
        <textarea
          className="note-input__body"
          placeholder="Masukkan isi catatan..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Buat Catatan</button>
      </form>
    </div>
  );
};

export default NoteInput;