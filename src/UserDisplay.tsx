import React, { useRef } from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

const UserDisplay = React.memo(() => {
  const renderCount = useRef(0);
  console.log("renders UserDisplay", renderCount.current++);
  const user = useSelector((state: AppState) => state.user);

  if (user) {
    console.log("user", user);
    return (
      <>
        <div>
          <label>username: {user.username}</label>
        </div>
        <div>
          <label>email: {user.email}</label>
        </div>
        <div>
          <label>city: {user.city}</label>
        </div>
      </>
    );
  } else {
    return null;
  }
});

export default UserDisplay;
