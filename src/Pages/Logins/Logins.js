import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";

const Logins = () => {
  return (
    <div className="SignUp">
      <img className="mt-5 mb-4" src={logo} alt="" />
      <h2 className="text-dark fw-bold ">Please Login</h2>
      <Form className="w-25 mb-4 mx-auto mt-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="w-100" variant="danger" type="submit">
          Log In
        </Button>
      </Form>
      <Link
        className="pe-auto fw-bold text-decoration-none text-danger"
        to="/SignUp"
      >
        New to Red Onion?
      </Link>
    </div>
  );
};

export default Logins;
