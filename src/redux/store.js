// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';  // Make sure the import path is correct

const store = configureStore({
  reducer: {
    counter: counterReducer,  // The key should match how you're accessing state in the component
  },
});

export default store;
