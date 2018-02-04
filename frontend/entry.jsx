//utils
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';

//component views
import MainView from './components/views/main_view';

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();
    const root = document.getElementById('root');
    ReactDOM.render(<MainView store={store} />, root);
});