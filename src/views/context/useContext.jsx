import React, { useContext } from "react";
import { GlobalContext, UserContext } from "../../context";
export default function UseContext() {
  const context = useContext(GlobalContext);
  const userContext = useContext(UserContext);
  
  return (
    <>
      <h4>useContext</h4>
      <div>theme: {context.themeColor}</div>
      <div>name: {userContext.name}</div>
    </>
  );
}
