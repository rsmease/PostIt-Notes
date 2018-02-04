//utils
import React from 'react';
import ReactDOM from 'react-dom';

//component views
import MainAppView from './components/views/main_app_view';

//testing suite
import * as RailsAPI from './rails_api/notes_api';


document.addEventListener('DOMContentLoaded', () => {
    window.fetchNoteById = RailsAPI.fetchNoteById;
    window.fetchNotes = RailsAPI.fetchNotes;
    window.postNote = RailsAPI.postNote;
    window.patchNote = RailsAPI.patchNote;
    window.deleteNote = RailsAPI.deleteNote;
    const root = document.getElementById('root');
    ReactDOM.render(<MainAppView />, root);
});