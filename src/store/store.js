import { configureStore } from '@reduxjs/toolkit';
import diariesReducer from '../features/diaries/diariesSlice';

export const store = configureStore({
  reducer: {
    diaries: diariesReducer,
  },
});
