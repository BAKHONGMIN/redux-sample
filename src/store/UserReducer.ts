// 먼저 USER_TYPE이라는 액션타입 상수를 만든다.
export const USER_TYPE = "USER_TYPE";

export interface User {
  id: number;
  username: string;
  email: string;
  city: string;
}

//액션은 일반적으로 타입과 페이로드를 멤버로 가진다. 이러한 멤버를 갖는 UserAction타입을 만든다.
export interface UserAction {
  type: string;
  payload: User | null;
}

// 리듀서는 항상 state와 action을 파라미터로 가진다. state는 전체 상태가 아니라 특정 리듀서와 연관이 있는
// 부분적인 상태라는 것을 기억한다. 이 리듀서는 action 타입에 따라 전달된 state가 자신의 상태인지 여부를 알수 있다.
// 그리고 원래의 상태는 절대 변경되지 않는다
export const UserReducer = (
  state: User | null = null,
  action: UserAction
): User | null => {
  switch (action.type) {
    case USER_TYPE:
      return action.payload;
    default:
      return state;
  }
};
