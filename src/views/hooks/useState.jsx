import { useState } from "react";

const ChildComp = (props) => {
  const [count, setCount] = useState(() => {
    if (props.origin < 10) return "wsn";
    else if (props.origin > 10) return "wsz";
    return "xs";
  });

  return (
    <div>
      child component {count}
      <button onClick={() => setCount("nnn")}>+1</button>
    </div>
  );
};

const StudyState = () => {
  return (
    <div>
      <ChildComp origin={10} />
    </div>
  );
};

export default StudyState;
