import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth";
import notificationSlice from "./notification/notification";
import noteSlice from "./note/note";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
    note: noteSlice.reducer,
  },
});

export default store;
