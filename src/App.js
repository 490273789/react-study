import { createGlobalStyle } from "styled-components";

// import { toast } from "./views/tost-manager/index.jsx";
import router from "./route/index.js";
import { RouterProvider } from "react-router";
export const GlobalStyle = createGlobalStyle`
  .main-container {
    padding: 24px;
    background: #fff;
    min-height: calc(100vh - 48px - 48px)
  }

  html,body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  // const showTost = () => {
  //   toast.current(new Date().toString());
  // };

  // <button onClick={showTost}>tost</button>
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
