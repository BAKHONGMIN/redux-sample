import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStrore";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // {/* Provider는 리액트 컴포넌트로 모든 컴포넌트의 부모 컴포넌트처럼 동작하며 저장소 데이터를 제공한다
  //   더불어, Provider는 configureStore함수의 반환값을 받아서 초기화된 저장소를 전달받는다.
  // */}
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
