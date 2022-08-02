import React, { Component } from "react";
import { GlobalContext, UserContext } from "../../context";
export default class Consumer extends Component {
  render() {
    return (
      <>
        <h4>Consumer</h4>
        <div>
          <GlobalContext.Consumer>
            {(theme) => (
              <div>
                theme:{theme.themeColor}
                <UserContext.Consumer>
                  {(user) => <User {...user} />}
                </UserContext.Consumer>
              </div>
            )}
          </GlobalContext.Consumer>
        </div>
      </>
    );
  }
}

const User = ({ name }) => {
  return <div>name:{name}</div>;
};
