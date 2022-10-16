import { React, useState } from "react";
import "./counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  let decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <div class="container">
        <h1>React Counter</h1>
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={increase}>
            +
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
          <button className="control__btn" onClick={decrease}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
