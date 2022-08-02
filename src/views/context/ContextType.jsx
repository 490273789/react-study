import React, { Component } from "react";
import { GlobalContext } from "../../context";

export class ContextType extends Component {
  static contextType = GlobalContext;
  // 一个类中只能使用一个contextType
  // static contextType = UserContext
  render() {
    return (
      <>
        <h4>contextType</h4>
        <div>themeColor: {this.context.themeColor}</div>
        <div>name:</div>
      </>
    );
  }
}

export default ContextType;
