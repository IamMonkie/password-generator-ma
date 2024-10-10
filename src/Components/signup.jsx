import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

//export default function Signup() {
const Signup = () => {
  console.log("Signup component rendered");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value; // Access email input value
    const password = passwordRef.current.value; // Access password imput value
    const passwordConfirm = passwordRef.current.value;

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError();
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); //Redirect to login page after signup success
    } catch {
      setError("Failed to create an account. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Sign Up</h2>
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

        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            ref={passwordRef}
            required
          />
        </Form.Group>

        <Form.Group id="password-confirm">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
            required
          />
        </Form.Group>

        <Button disabled={loading} className="w-100" type="submit">
          Sign Up
        </Button>
      </Form>

      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/Login">Log In</Link>
      </div>
    </Container>
  );
};

export default Signup;
