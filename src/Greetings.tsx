import React from "react";

type GreetingsProps = {
  name: string;
  mark?: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => {
  return (
    <div>
      Helo, {name}
      {mark}
    </div>
  );
};

export default Greetings;

/*
  React.FC 사용시 얻는 이점
  1. children props가 기본으로 탑재되어 있다.
  2. contextTypes, defaultProps 등의 내장기능을 활성화 할 수 있다.

  다만 defaultProps가 제대로 동작하지 않는다는 단점이 있다.
  defaultProps를 비구조화 할당 단계에서 사용해야 에러가 발생하지 않는다.
  - 레거시가 된 부분일 수 있으니 코드 테스트 할 것.
*/
