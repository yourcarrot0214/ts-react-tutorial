import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/index";
import { increase, decrease, increaseBy } from "../modules/counter";
import Counter from "../components/Counter";

export default function CounterContainer() {
  // state 상태 조회
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  // action dispatch 함수 생성
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onIncreaseBy = (diff: number) => dispatch(increaseBy(diff));

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}
