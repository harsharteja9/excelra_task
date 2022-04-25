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
    let val = "";

    if (s.includes("+")) {
      val = s.split("+");
      val = Number(val[0]) + Number(val[1]);
    } else if (s.includes("-")) {
      val = s.split("-");
      val = Number(val[0]) - Number(val[1]);
    } else if (s.includes("*")) {
      val = s.split("*");
      val = Number(val[0]) * Number(val[1]);
    } else if (s.includes("/")) {
      val = s.split("/");
      val = Number(val[0]) / Number(val[1]);
    }
    setCount(String(val));
    setReset(true);
  };

  const resetvalues = () => {
    setCount("0");
    setReset(true);
  };
  return (
    <div className="app">
      <div className="results">
        <p>{count}</p>
      </div>
      <div>
        <div className="operator_btn">
          <button onClick={resetvalues}>
            <small>Reset</small>
          </button>
          <button onClick={() => handleCounter("+")}>+</button>
          <button onClick={() => handleCounter("-")}>-</button>
          <button onClick={() => handleCounter("*")}>x</button>
          <button onClick={() => handleCounter("/")}>/</button>
          <button onClick={() => handleOperation()}>=</button>
        </div>
        <div className="btns">
          {arr.map((el) => (
            <ButtonComp key={el} fn={() => handleCounter(el)}>
              {el}
            </ButtonComp>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
