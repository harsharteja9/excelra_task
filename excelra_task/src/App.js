import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("0");

  const handleCounter = (el) => {
    const res =
      el > "0" && count == "0" ? String(el) : count.concat(String(el));
    setCount(res);
  };

  const handleOperation = () => {
    let s = count.replace(/^0+/, "");
    const cal = eval(s);
    setCount(String(cal));
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
        <button onClick={() => handleCounter("+")}>+</button>
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
        <button onClick={() => handleOperation()}>=</button>
        <br />
      </div>
    </div>
  );
}

export default App;
