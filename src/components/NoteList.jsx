import React from 'react';
import NoteItem from './NoteItem';
import { showFormattedDate } from '../utils';

const NoteList = ({ notes, onDeleteNote, onArchiveNote, emptyMessage }) => {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            date={showFormattedDate(note.createdAt)}
            archived={note.archived}
            onDelete={onDeleteNote}
            onArchive={onArchiveNote}
          />
        ))
      ) : (
        <div className="notes-list__empty-message">
          {emptyMessage}
        </div>
      )}
    </div>
  );
};

export default NoteList;