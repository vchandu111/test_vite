import React, { useEffect, useRef, memo } from "react";

const Child = (props) => {
  const count = useRef(0);
  return (
    <div>
      <p>Child is rendered {count.current++} times</p>
      <p>{props.details.name}</p>
    </div>
  );
};

export default memo(Child);
