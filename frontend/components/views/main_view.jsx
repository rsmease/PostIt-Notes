//import
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import MainHeader from '../headers/main_header';
import NoteIndexContainer from '../notes/note_index_container';

export default () => (
    <React.Fragment>
        <MainHeader />
        <NoteIndexContainer />
    </React.Fragment>
);