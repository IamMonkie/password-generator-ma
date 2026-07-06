import React from "react";
//import { useState } from "react";
//import Signup from "./Signup";
//import Login from "./Login";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

/* --------------------------------- Import -------------------------------- */
import Login from "./Login";
import MA_Today from "./MA_Today";

/* -------------------------------------------------------------------------- */

/* ---------------------------------- Style --------------------------------- */
const containerStyle = {
  minHeight: "100vh",
};

const appContentStyle = {
  width: "100%",
  maxWidth: "500px",
};
/* -------------------------------------------------------------------------- */

const App = () => {
  console.log("App component rendered");

  /*
  const handleLogout = () => {
    // Log out the user (implement Firebase auth signOut here)
  };
  */

  return (
    <Router>
      <Container
        className="appContainer d-flex align-items-center justify-content-center"
        style={containerStyle}
      >
        <div className="appContent" style={appContentStyle}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/today" element={<MA_Today />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
};
export default App;
