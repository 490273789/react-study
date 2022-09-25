import { useRef } from "react";
import MyInput from "./my-input";

const Form = () => {
  const ref = useRef(null);

  // 点击Edit聚焦输入框
  const handleFocus = () => {
    ref.current.focus();
  };

  return (
    <form>
      <MyInput label="Enter your name" ref={ref} />
      <button type="button" onClick={handleFocus}>
        Edit
      </button>
    </form>
  );
};

export default Form;
