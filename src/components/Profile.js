import React from "react";
// 1) display info about our state
import { useSelector } from "react-redux";

function Profile() {
  //2) access user state using useSelector
  const user =
    useSelector();
    // 3) useSelector takes in a function which allows you to specify which state you want to access
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: </p>
      <p>Age: </p>
      <p>Email: </p>
    </div>
  );
}

export default Profile;
