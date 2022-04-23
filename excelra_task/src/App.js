import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount(count + 1);
  };
  
  return (
    <div className="App">
      <div>
        <p>{count}</p>
      </div>
      <button onClick={handleCounter}>1</button>
    </div>
  );
}

export default App;
