import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feautres/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
