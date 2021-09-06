import React, { useReducer, useContext, createContext, Dispatch } from "react";

// 필요한 타입들을 미리 선언한다.

type Color = "red" | "yellow" | "green";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

// dispatch를 위한 타입설정
type SampleDispatch = Dispatch<Action>;

// Context 생성
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return { ...state, count: action.count };
    case "SET_TEXT":
      return { ...state, text: action.text };
    case "SET_COLOR":
      return { ...state, color: action.color };
    case "TOGGLE_GOOD":
      return { ...state, isGood: !state.isGood };
    default:
      throw new Error("Unhandled type Error");
  }
}

// SampleProvider에서 useReducer를 사용하고 Children에 Provider를 연결한다.
export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// state, dispatch를 쉽게 사용하기 위한 커스텀 hooks
export function useSampleState() {
  const state = useContext(SampleStateContext);
  // null check를 해서 hooks의 반환값을 보장
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
