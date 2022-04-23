import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div>
        <p>{count}</p>
      </div>
      <button>1</button>
    </div>
  );
}

export default App;
