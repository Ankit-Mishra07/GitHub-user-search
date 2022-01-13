import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import { Logreducer } from '../Login/reducer';
import { regreducer } from '../Register/reducer';

const rootReducer = combineReducers({
    regState : regreducer,
    logState : Logreducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))






