// 1) user reducer created in this file

// 2) createSlice function allows you to create your reducer in a way that its easy to split your logic and access
// it in different parts of your app

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
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
    login: () => {

    }
  }
});
