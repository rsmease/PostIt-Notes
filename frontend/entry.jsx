//utils
import React from 'react';
import ReactDOM from 'react-dom';

//component views
import MainAppView from './components/views/main_app_view';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<MainAppView />, root);
});