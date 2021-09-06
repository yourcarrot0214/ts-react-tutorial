import React, { useReducer } from "react";

type Color = "red" | "orange" | "yellow";

// reducer에서 사용하는 state, action의 type을 설정한다.
// typed을 사전에 정의하면, 자동완성기능을 통해 오타방지, 다른 타입의 값이 들어오는 에러 등을 방지할 수 있다.

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

// reducer 함수의 반환값은 State type이다.
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

export default function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "orange",
    isGood: true,
  });

  const setCount = () => dispatch({ type: "SET_COUNT", count: 10 });
  const setText = () => dispatch({ type: "SET_TEXT", text: "Bye" });
  const setColor = () => dispatch({ type: "SET_COLOR", color: "yellow" });
  const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? "Good" : "Bad"}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_Text</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}
