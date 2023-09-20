import React, { useRef } from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

const UserDisplay = React.memo(() => {
  // 몇번 호출 했는지 확인용도
  const renderCount = useRef(0);
  console.log("renders UserDisplay", renderCount.current++);

  // state 타입은 Appstate에서
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
