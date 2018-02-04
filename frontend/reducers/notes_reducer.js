import {
    RECEIVE_NOTE,
    RECEIVE_ALL_NOTES,
    REMOVE_NOTE
} from '../actions/note_actions';

import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_NOTES:
            return _.merge({}, state, action.notes);
        case RECEIVE_NOTE:
            return _.merge({}, state, {
                [action.note.id]: action.note
            });
        case REMOVE_NOTE:
            let newState = _.merge({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};