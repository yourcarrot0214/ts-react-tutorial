import React, { useState } from "react";

// 1. props type 선언
type TodoInsertProps = {
  onInsert: (text: string) => void;
};

// 2. component 선언
function TodoInsert({ onInsert }: TodoInsertProps): JSX.Element {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder='할 일을 입력해 주세요.'
          value={value}
          onChange={onChange}
        />
        <button type='submit'>등록하기</button>
      </form>
    </div>
  );
}

export default TodoInsert;
