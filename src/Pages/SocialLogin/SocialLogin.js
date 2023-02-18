import React from "react";
import "./SocialLogin.css";
import google from "../../button/google.png";
import fb from "../../button/Fb.png";
import github from "../../button/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    navigate("/");
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
        <div
          style={{ height: "2px" }}
          className=" bg-danger rounded style-line"
        ></div>
        <p className="mt-2 mx-2 fw-bold">Or</p>
        <div
          style={{ height: "2px" }}
          className=" bg-danger rounded style-line"
        ></div>
      </div>
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="w-25 mb-3 btn btn-danger mx-auto d-block"
        >
          <img
            style={{ height: "20px" }}
            className="bg-dark rounded mx-1"
            src={google}
            alt=""
          />
          Google Sign In
        </button>
        <button className=" w-25 mb-3 btn btn-danger mx-auto d-block">
          <img
            style={{ height: "20px" }}
            className="rounded mx-1"
            src={fb}
            alt=""
          />
          Facebook Sign In
        </button>
        <button className="w-25 btn btn-danger mx-auto d-block">
          <img
            style={{ height: "20px" }}
            className="rounded mx-1"
            src={github}
            alt=""
          />
          Github Sign In
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
