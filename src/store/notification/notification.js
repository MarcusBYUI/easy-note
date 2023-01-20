import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "Processing...",
  display: false,
  contractAction: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setUpdateState(state) {
      state.contractAction = !state.contractAction;
    },
    setDisplay(state, action) {
      state.display = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
