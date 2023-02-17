import React from "react";
import "./SignUp.css";
import logo from "../../images/logo2.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="SignUp">
      <img className="mt-5 " src={logo} alt="" />

      <Form className="w-25 mb-4 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button className="w-100" variant="danger" type="submit">
          Sign Up
        </Button>
      </Form>
      <Link
        className="pe-auto fw-bold text-decoration-none text-danger"
        to="/Login"
      >
        Already have an account?
      </Link>
    </div>
  );
};

export default SignUp;
