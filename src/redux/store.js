import  { createStore, combineReducers } from 'redux';
import profilesReducer from './profilesReducer';
import profilePageReducer from './profilePageReducer';

const reducers = combineReducers({
    profilesPage: profilesReducer,
    profilePage: profilePageReducer,
})
const store = createStore(reducers);

export default store;