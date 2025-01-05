import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultFakeForm: [
    { message: "What is your first name?", key: "firstName" },
    { message: "What is your last name?", key: "lastName" },
    { message: "What is your address?", key: "address" },
    { message: "What is your email?", key: "email" },
    { message: "What is your telephone?", key: "telephone" },
  ],
  fakeForm: [],
};

export const createAccountSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {
    initFakeForm: (state) => {
      state.fakeForm = state.defaultFakeForm.map((item, idx) => {
        return { id: idx + 1, message: item.message, key: item.key, val: "" };
      });
    },
    setKeyName: (state, action) => {
      state.fakeForm[action.payload.idx].val = action.payload.val;
    },
  },
});

export const { setKeyName, initFakeForm } = createAccountSlice.actions;

export default createAccountSlice.reducer;
