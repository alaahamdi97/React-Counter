import { React, useState } from "react";

export default function Reset() {
  const [counter, setCounter] = useState(0);

  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
