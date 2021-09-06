import React from "react";
import { useSampleState, useSampleDispatch } from "./SampleContext";

export default function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

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
