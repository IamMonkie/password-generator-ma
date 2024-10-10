import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Hooks/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* --------------------------------- testing -------------------------------- */
const App = () => {
  console.log("App component rendered");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Log out the user (implement Firebase auth signOut here)
  };

  /* -------------------------------------------------------------------------- */

  /*
  function App() {
    return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <Switch>
              <Route path="./Signup.jsx" component={Signup} />
              <Route path="./Login.jsx" component={Login} />
            </Switch>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
  */
  return (
    /* --------------------------------- testing -------------------------------- */
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
    /*
    <Container className="mt-5">
      <h2>Welcome to the App</h2>
      <Button variant="secondary" onClick={() => navigate("/Login")}>
        Go to Login
      </Button>
      <Button variant="primary" onClick={() => navigate("/Signup")}>
        Request Access
      </Button>
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
    */
    /* -------------------------------------------------------------------------- */
  );
};
export default App;
