import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './features/greetingSlice.js';

export default configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});
