//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
//import App from "./Components/App";

/* --------------------------------- testing -------------------------------- */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
