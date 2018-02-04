//utils
import React from 'react';
import ReactDOM from 'react-dom';

//component views
import ViewMain from './components/views/view_main';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<ViewMain />, root);
});