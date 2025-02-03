import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  diaries: [],  // Array of diary entries
};

const diariesSlice = createSlice({
  name: 'diaries',
  initialState,
  reducers: {
    addDiary: (state, action) => {
      state.diaries.push(action.payload);
    },
    deleteDiary: (state, action) => {
      state.diaries = state.diaries.filter(diary => diary.id !== action.payload);
    }
  }
});

export const { addDiary, deleteDiary } = diariesSlice.actions;
export default diariesSlice.reducer;
