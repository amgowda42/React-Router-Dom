

import { useState, useEffect } from "react";

const CounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    useEffect(() => {
      console.log("clickCounter")
    document.title = `Hello World!${count}`;
  },[count]);
  document.title;
  return (
      <div>
          <input type="text" value={name} onChange={(e) => {
              setName(e.target.value);
          }}/>
      <h1>the count {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default CounterOne;
