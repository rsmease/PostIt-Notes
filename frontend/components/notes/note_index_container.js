//utils
import {
    connect
} from 'react-redux';

//actions
import * as NoteActions from '../../actions/note_actions';

//component
import NoteIndex from './note_index';


const mapStateToProps = (state, ownProps) => ({
    notes: Object.values(state.notes)
});

const mapDispatchToProps = (dispatch) => ({
    requestAllNotes: () => dispatch(NoteActions.requestAllNotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);