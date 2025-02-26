// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // Your individual reducer

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
