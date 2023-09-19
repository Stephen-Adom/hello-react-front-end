import { createSlice } from '@reduxjs/toolkit';

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
  },
  reducers: {
    setGreeting: (state, payload) => {
      state.greeting = payload.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
