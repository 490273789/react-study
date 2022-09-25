import { useEffect } from "react";
import { useState } from "react";

const StudyEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
    console.log(count, "useEffect");
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default StudyEffect;
