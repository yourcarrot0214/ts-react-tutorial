import React from "react";
import "./App.css";
// import Greetings from "./Greetings";
// import Counter from "./Counter";
// import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  // const handleButton = (name: string) => console.log(name);
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  return (
    <div className='App'>
      {/* <Greetings name='carrot' onClick={handleButton} /> */}
      {/* <Counter /> */}
      {/* <MyForm onSubmit={onSubmit} /> */}
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </div>
  );
}

export default App;
