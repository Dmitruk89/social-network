import  { createStore, combineReducers } from 'redux';
import profilesReducer from './profilesReducer';

const reducers = combineReducers({
    profilesPage: profilesReducer,
})
const store = createStore(reducers);

export default store;