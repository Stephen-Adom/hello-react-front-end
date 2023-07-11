import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './features/greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});
