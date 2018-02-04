import {
    combineReducers
} from 'redux';

import noteReducer from './notes_reducer';

export default combineReducers({
    notes: noteReducer
});