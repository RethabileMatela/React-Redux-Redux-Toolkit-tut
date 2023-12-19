import React from "react";
// 1) import useDispatch hook which is used to MODIFY the value of our state
import { useDispatch } from "react-redux";
import {login} from "../features/user"

function Login() {
  // 2) create dispatch function
  const dispatch = useDispatch();
  return (
    <div>
      {/* 
    3) specify which action you are trying to take 
    4) call dispatch function on button click 
    */}

      <button
        onClick={() => {
          // 5) to change the value of our state pass the login action, then pass the payload 
          // containing new values within login action
          dispatch(login());
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
