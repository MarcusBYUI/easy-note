import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
  update: false,
  current: null,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setDisplay(state, action) {
      state.display = action.payload;
      if (!action.payload) {
        state.current = null;
      }
    },
    setUpdate(state, action) {
      state.update = action.payload;
    },
    setCurrent(state, action) {
      state.current = action.payload;
      state.display = true;
    },
  },
});

export const noteSliceActions = noteSlice.actions;

export default noteSlice;
