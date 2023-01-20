import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth";
import notificationSlice from "./notification/notification";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
