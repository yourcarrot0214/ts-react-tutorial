import React from "react";
import "./App.css";
import Greetings from "./Greetings";

function App() {
  const handleButton = (name: string) => console.log(name);
  return (
    <div className='App'>
      <Greetings name='carrot' onClick={handleButton} />
    </div>
  );
}

export default App;
