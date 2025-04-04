// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0, // The initial value should be defined as 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
