// 이 파일은 글로벌 상태를 제공하는 AppState타입의 rootReducer라는 통합된 리듀서 객체를
import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";

// rootReducer는 모든 리듀서를 통합한 객체를 제공한다.
// combineReducers에서는 모든 리튜서를 하나의 객체로 묶어준다.
export const rootReducer = combineReducers({
  user: UserReducer
});

//RturnType 유틸리티 타입을 사용해 rootReducer기반의 타입스크립트
//타입을 만든후 AppState이라는 새로운 타입을 내보낸다
export type AppState = ReturnType<typeof rootReducer>;
