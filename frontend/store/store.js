import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';
import thunk from '.thunk';

export default () => createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);