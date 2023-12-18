// 1) user reducer created in this file

// 2) createSlice function allows you to create your reducer in a way that its easy to split your logic and access
// it in different parts of your app

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  // 3) contains info about the slice
  name: "user",
  initialState: {
    value: {
      name: "",
      age: 0,
      email: "",
    },
  },
  reducers: {
    // 4) reducers functions alter values of our app

    // 5) login function takes in two parameters: state and action
    // state = info about previous and current state
    // action = an object containing payload and type
    // payload - info you might want to use when changing your state
    login: (state, action) => {
      // 5) take previous state and change it to whatever we get from the payload
      state.value = action.payload;
    },
  },
});
// 6) access actions you created in order to change state using userSlice.actions
// 7) access login action/function
export const {login} = userSlice.actions
export default userSlice.reducer;