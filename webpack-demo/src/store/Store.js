import {createStore} from 'redux';
import rootReducer from '../reducers/Index';

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

const store = createStore(rootReducer, initValues);

export default store;
