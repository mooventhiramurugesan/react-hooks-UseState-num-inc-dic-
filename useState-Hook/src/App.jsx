import React, { useState } from "react";
import './app.css';  

const App = () => {
  let [num, setNum] = useState(0);

  const handleIncrease = () => {
    setNum((increase) => increase + 1);
  };

  const handleDecrease = () => {
    setNum((decrease) => decrease - 1);
  };

  const getNumClass = () => {
    if (num > 0) return 'num-positive';
    if (num < 0) return 'num-negative';
    return 'num-zero';  
  };

  return (
    <div className="app-container">
      <h1 className={getNumClass()}>{num}</h1>
      <h2>
        <button
          className="button button-increase"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="button button-decrease"
          onClick={handleDecrease}
        >
          Decrease
        </button>
      </h2>
    </div>
  );
};

export default App;
