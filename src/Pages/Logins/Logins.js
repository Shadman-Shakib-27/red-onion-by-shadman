import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo2.png";
import SocialLogin from "../SocialLogin/SocialLogin";

const Logins = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("Form Submitted", email, password);

    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/");
  }
  return (
    <div className="SignUp">
      <img className="mt-5 mb-4" src={logo} alt="" />
      <h2 className="text-dark fw-bold ">Please Login</h2>
      <Form onSubmit={handleLogin} className="w-25 mb-4 mx-auto mt-4">
        <Form.Group className="mb-3 name-field " controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3 name-field" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className="w-100 button" variant="danger" type="submit">
          Log In
        </Button>
      </Form>
      <Link
        className="pe-auto fw-bold text-decoration-none text-danger"
        to="/SignUp"
      >
        New to Red Onion?
      </Link>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Logins;
