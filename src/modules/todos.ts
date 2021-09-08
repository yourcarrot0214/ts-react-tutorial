/*
  1. action type 선언
  2. action 생성 함수 선언
  3. action 객체들에 대한 타입 선언
  4. redux state 타입 선언
  5. initialState 선언
  6. reducer 함수 선언
*/

import { ActionType, createReducer, createAction } from "typesafe-actions";

// 1. action type 선언
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1;

// 2. action 생성 함수 선언
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

// 3. action 객체들에 대한 타입 선언
const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;

// 4. redux state 타입 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

// 5. initialState 선언
const initialState: TodosState = [];

// 6. reducer
// function todos(
//   state: TodosState = initialState,
//   action: TodosAction
// ): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat({
//         id: action.payload.id,
//         text: action.payload.text,
//         done: false,
//       });
//     case TOGGLE_TODO:
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       );
//     case REMOVE_TODO:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({ ...action.payload, done: false }),
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

export default todos;
