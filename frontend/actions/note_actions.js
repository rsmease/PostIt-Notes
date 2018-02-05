import * as RailsAPI from '../rails_api/notes_api';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_ALL_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE_FORM_ERRORS = 'RECEIVE_NOTE_FORM_ERRORS';
export const REMOVE_NOTE_FORM_ERRORS = 'REMOVE_NOTE_FORM_ERRORS';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note: note
});

const receiveAllNotes = (notes) => ({
    type: RECEIVE_ALL_NOTES,
    notes
});

const removeNote = (note) => ({
    type: REMOVE_NOTE,
    id: note.id
});

const receiveNoteFormErrors = (errors) => ({
    type: RECEIVE_NOTE_FORM_ERRORS,
    errors: errors
});

const removeNoteFormErrors = () => ({
    type: REMOVE_NOTE_FORM_ERRORS
});

export const requestAllNotes = () => (dispatch) =>
    RailsAPI.fetchNotes().then(foundNotes =>
        dispatch(receiveAllNotes(foundNotes)));

export const requestNoteById = (noteId) => (dispatch) =>
    RailsAPI.fetchNoteById(noteId).then(foundNote =>
        dispatch(receiveNote(foundNote)));

export const createNewNote = (formNote) => (dispatch) =>
    RailsAPI.postNote(formNote).then(createdNote =>
        dispatch(receiveNote(createdNote)),
        err => (dispatch(receiveNoteFormErrors(err.responseJSON))));

export const requestUpdateToNote = (formNote) => (dispatch) => (
    RailsAPI.patchNote(formNote)
    .then(updatedNOTE => dispatch(receiveNote(updatedNOTE)),
        err => (dispatch(receiveNoteFormErrors(err.responseJSON))))
);

export const requestToDeleteNote = (noteId) => (dispatch) =>
    RailsAPI.deleteNote(noteId).then((deletedNote) =>
        dispatch(removeNote(deletedNote)));

export const removeAllNoteFormErrors = () => (dispatch) =>
    dispatch(removeNoteFormErrors());