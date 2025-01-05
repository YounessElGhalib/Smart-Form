import { configureStore } from "@reduxjs/toolkit";
import createAccountReducer from "./createAccountSlice";

export const store = configureStore({
  reducer: {
    createAccount: createAccountReducer,
  },
});
