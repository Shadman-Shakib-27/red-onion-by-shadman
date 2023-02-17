import React, { useRef } from "react";
import "./SignUp.css";
import logo from "../../images/logo2.png";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    console.log("Form Submitted", name, email, password, confirmPassword);
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/Logins");
  }
  return (
    <div className="SignUp">
      <img className="mt-5 mb-4  " src={logo} alt="" />
      <h2 className="text-dark fw-bold">Please Sign Up</h2>
      <Form onSubmit={handleSubmit} className="w-25 mb-4 mx-auto mt-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={nameRef} type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Button className="w-100" variant="danger" type="submit">
          Sign Up
        </Button>
      </Form>
      <Link
        className="pe-auto fw-bold text-decoration-none text-danger"
        to="/Logins"
      >
        Already have an account?
      </Link>
    </div>
  );
};

export default SignUp;
