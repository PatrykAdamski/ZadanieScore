import React from "react";
import ReactDOM from "react-dom/client";
import App from "./view/App";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
