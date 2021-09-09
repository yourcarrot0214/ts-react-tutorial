import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import github from "./github";

const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;

// rootReducer의 반환값을 유추한다.
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 export 한다.
export type RootState = ReturnType<typeof rootReducer>;
