import React, { Component } from "react";
import { GlobalContext, UserContext } from "../../context";
import ContextType from "./ContextType";
import UseContext from "./useContext";
import Consumer from "./Consumer";

export default class ProvideIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: { themeColor: "#9966ff" },
      user: { name: "wsn" },
    };
  }
  render() {
    const { theme, user } = this.state;
    return (
      <div className="model-wrap">
        <h3>Context Use</h3>
        <GlobalContext.Provider value={theme}>
          <UserContext.Provider value={user}>
            <ContextType />
            <UseContext />
            <Consumer />
          </UserContext.Provider>
        </GlobalContext.Provider>
      </div>
    );
  }
}
