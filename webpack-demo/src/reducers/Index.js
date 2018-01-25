import { combineReducers } from 'redux';
import { requestContext } from './RequestContextReducer';

const rootReducer = combineReducers({
    requestContext
});

export default rootReducer;