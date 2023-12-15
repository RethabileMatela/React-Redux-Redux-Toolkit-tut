import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
// 2) to make store exist inside our application import provider
import { Provider } from "react-redux";

const store = configureStore({
  // 1) inside of function parameters pass a collection of reducers
  // Reducers built-in to redux; take in the previous state and an action and return the newly updated state
  reducer: {},
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 3) wrap provider around app component */}
    {/* 4) give provider access to store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
