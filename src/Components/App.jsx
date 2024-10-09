import { useState } from "react";
import { Signup } from "../Components/signup";
import { Login } from "../Components/login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Contexts/AuthContext";
import { browserrouter as Router, Switch, Route } from "react-router-dom";

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
              <Route path="./signup" component={Signup} />
              <Route path="./login" component={Login} />
            </Switch>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}
export default App;
