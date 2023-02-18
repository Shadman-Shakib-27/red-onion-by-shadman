import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <nav className="header">
      <img src={logo} as={Link} to="/" alt="" />
      <div>
        <Link id="Link1" to="/Checkout">
          <FontAwesomeIcon icon="fa-regular fa-Shopping-Cart" /> Checkout
        </Link>
        <Link id="Link1" to="/Logins">
          Login
        </Link>
        {user ? (
          <button onClick={logOut} id="Link2" className="btn btn-danger">
            Sign Out
          </button>
        ) : (
          <Link id="Link2" to="/SignUp">
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
