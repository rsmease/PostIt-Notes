//utils
import React from 'react';
import ReactDOM from 'react-dom';

//component views
import MainAppView from './components/views/main_app_view';

//testing suite
import { fetchNotes } from './rails_api/notes_api';


document.addEventListener('DOMContentLoaded', () => {
    window.fetchNotes = fetchNotes;
    const root = document.getElementById('root');
    ReactDOM.render(<MainAppView />, root);
});