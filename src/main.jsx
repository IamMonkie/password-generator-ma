//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
//import App from "./Components/App";

/* --------------------------------- testing -------------------------------- */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Hooks/AuthContext";
import App from "./Components/App";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
/* -------------------------------------------------------------------------- */
/*
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/
