//이 파일은 리덕스와 앱에서 사용되는 실제 저장소 객체를 포함한다.
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./AppState";

const configureStore = () => {
  return createStore(rootReducer, {});
  // createStore 메서드는 AppState 객체인 rootReducer기반의 실제 저장소를 만드는데 사용한다
};
export default configureStore;
