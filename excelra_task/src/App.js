import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCounter = (el) => {
    setCount(el);
  };

  return (
    <div className="App">
      <div>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={() => handleCounter(7)}>7</button>
        <button onClick={() => handleCounter(8)}>8</button>
        <button onClick={() => handleCounter(9)}>9</button>
        <br />
        <button onClick={() => handleCounter(4)}>4</button>
        <button onClick={() => handleCounter(5)}>5</button>
        <button onClick={() => handleCounter(6)}>6</button>
        <br />
        <button onClick={() => handleCounter(1)}>1</button>
        <button onClick={() => handleCounter(2)}>2</button>
        <button onClick={() => handleCounter(3)}>3</button>
        <br />
        <button onClick={() => handleCounter(0)}>0</button>
        <br />
      </div>
    </div>
  );
}

export default App;
