//utils
import {
    connect
} from 'react-redux';

//actions
import * as NoteActions from '../../actions/note_actions';

//components
import NoteModal from './note_modal';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    note: ownProps.note,
    modalAction: ownProps.modalAction,
    closeModal: ownProps.closeModal
});

const mapDispatchToProps = (dispatch) => ({
    removeAllNoteFormErrors: () => dispatch(NoteActions.removeAllNoteFormErrors),
    createNewNote: (formNote) => dispatch(NoteActions.createNewNote(formNote)),
    requestUpdateToNote: (formNote) => dispatch(NoteActions.requestUpdateToNote(formNote)),
    requestToDeleteNote: (noteId) => dispatch(NoteActions.requestToDeleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteModal);