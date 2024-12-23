import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";
const Counter = () => {
  const [count, setCount] = useState(0);
  const details = useMemo(() => {
    return {
      name: "masai",
      place: "Visakahpatnam",
    };
  }, []);

  const test = useCallback(() => {
    () => {
      return "hi";
    };
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child details={details} test={test} />
    </div>
  );
};

export default Counter;

//onClick -> setCount
