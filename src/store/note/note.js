import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: true,
  update: false,
  current: null,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setDisplay(state, action) {
      state.display = action.payload;
    },
    SetUpdate(state, action) {
      state.update = action.payload;
    },
    SetCurrent(state, action) {
      state.current = action.payload;
    },
  },
});

export const noteSliceActions = noteSlice.actions;

export default noteSlice;
