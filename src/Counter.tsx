import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = (): void => setCount(count + 1);
  const onDecrease = (): void => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;

/*
  Generic을 생략해도 타입 추론이 이루어 진다.
  다만, 실수를 방지하기 위해 명시해 주도록 하자.
*/
