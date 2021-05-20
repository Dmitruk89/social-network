import  { createStore, combineReducers } from 'redux';
import profilesReducer from './profilesReducer';
import profilePageReducer from './profilePageReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
    profilesPage: profilesReducer,
    profilePage: profilePageReducer,
    auth: authReducer,
})
const store = createStore(reducers);

export default store;