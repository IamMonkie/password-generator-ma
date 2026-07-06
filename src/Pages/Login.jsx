import React, { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/* ---------------------------------- Style --------------------------------- */
const loginStyle = {
  textAlign: "center",
};
const formStyle = {
  marginTop: "10px",
};

const buttonStyle = {
  marginTop: "10px",
};

const passwordStyle = {
  marginTop: "10px",
};
/* -------------------------------------------------------------------------- */

//export default function Login() {
const Login = () => {
  console.log("Login component rendered");

  const emailRef = useRef();
  const passwordRef = useRef();
  //const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value; // Access email input value
    const password = passwordRef.current.value; // Access password input value

    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userName", email); // Store email in localStorage
      navigate("/today"); // Redirect to content after login success
    } catch (err) {
      setError("Failed to Login. Please check your credentials.");
    }
    setLoading(false);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Log In</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            ref={emailRef}
            required
          />
        </Form.Group>

        <Form.Group id="password" style={passwordStyle}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </Form.Group>

        <Button
          disabled={loading}
          className="w-100"
          type="submit"
          style={buttonStyle}
        >
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
