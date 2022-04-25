import React, { useState } from "react";
import "./App.css";
import ButtonComp from "./ButtonComp";

function App() {
  const [count, setCount] = useState("0");
  const [reset, setReset] = useState(false);
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleCounter = (el) => {
    if (reset) {
      setCount(String(el));
      setReset(false);
      return;
    }

    if (el === 0 && count === "0") return;
    const res =
      el > "0" && count == "0" ? String(el) : count.concat(String(el));
    setCount(res);
  };

  const handleOperation = () => {
    let s = count.replace(/^0+/, "");
    const cal = eval(s);
    setCount(String(cal));
    setReset(true);
  };

  const resetvalues =()=>{
    setCount(0);
    setReset(!reset)
  }
  return (
    <div className="App">
      <div>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={() => handleCounter("+")}>+</button>
        <button onClick={() => handleCounter("-")}>-</button>
        <button onClick={() => handleCounter("*")}>x</button>
        <button onClick={() => handleOperation()}>=</button>
        <button onClick={resetvalues}>Reset</button>
        <br />
        <br />
        {arr.map((el) => (
          <ButtonComp key={el} fn={() => handleCounter(el)}>{el}</ButtonComp>
        ))}
        <br />
      </div>
    </div>
  );
}

export default App;
