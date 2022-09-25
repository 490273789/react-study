import { createGlobalStyle } from "styled-components";
import "./App.css";
import ProvideIndex from "./views/context";
import { toast } from "./views/tost-manager/index.jsx";
import ShowInput from "./views/input";
import StudyEffect from "./views/hooks/use-effect";

export const GlobalStyle = createGlobalStyle`
  .main-container {
    padding: 24px;
    background: #fff;
    min-height: calc(100vh - 48px - 48px)
  }
`;

function App() {
  const showTost = () => {
    toast.current(new Date().toString());
  };
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ProvideIndex />
        <ShowInput />
        <button onClick={showTost}>tost</button>

        <StudyEffect />
      </div>
    </>
  );
}

export default App;
