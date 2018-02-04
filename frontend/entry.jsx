//utils
import React from 'react';
import ReactDOM from 'react-dom';

//component views
import MainView from './components/views/main_view';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<MainView />, root);
});