import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import { Logreducer } from '../Login/reducer';
import { pageReducer } from '../Pages/reducer';
import { regreducer } from '../Register/reducer';
import { reducer as gitreducer } from '../State/reducer';
import { searchReducer } from '../Github/reducer';
import { SearchpageReducer } from '../SearchPage/reducer';
const rootReducer = combineReducers({
    regState : regreducer,
    logState : Logreducer,
    gitState : gitreducer,
    pageState : pageReducer,
    searchState : searchReducer,
    SearchPageState : SearchpageReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))






