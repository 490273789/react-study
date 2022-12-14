import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToastManager from "./views/tost-manager";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const toastManage = ReactDOM.createRoot(
  document.getElementById("toast_container")
);
toastManage.render(<ToastManager />);
