import {combineReducers, createStore, applyMiddleware} from 'redux';
import { createEpicMiddleware,combineEpics } from 'redux-observable';

import {authReducer} from '../reducers';
import { loginEpic, logoutEpic } from '../epics';

const rootEpic = combineEpics(loginEpic,logoutEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

const rootReducer = combineReducers({
    auth:authReducer,
});

export default createStore(rootReducer, applyMiddleware(epicMiddleware));