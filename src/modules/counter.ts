import { createAction, createReducer } from "typesafe-actions";

// action 생성함수 선언
export const increase = createAction("counter/INCREASE")();
export const decrease = createAction("counter/DECREASE")();
export const increaseBy = createAction("counter/INCREASE_BY")<number>();

// redux 모듈에서 관리 할 상태의 타입을 선언
type CounterState = {
  count: number;
};

type CounterAction =
  | { type: "counter/INCREASE" }
  | { type: "counter/DECREASE" }
  | { type: "counter/INCREASE_BY"; payload: number };

// 초기 state값을 선언
const initialState: CounterState = {
  count: 0,
};

// Chain Api style
const counter1 = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({
    count: state.count + 1,
  }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

export default counter1;
