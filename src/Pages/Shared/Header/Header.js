import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const logOut = () => {
    signOut(auth);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link id="Link1" to="/Checkout" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Checkout
        </Link>
        <Link id="Link1" to="/Logins" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
        {user ? (
          <button
            onClick={() => {
              logOut();
              setMenuOpen(false);
            }}
            className="buttn"
          >
            Sign Out
          </button>
        ) : (
          <Link id="Link2" to="/SignUp" onClick={() => setMenuOpen(false)}>
            Sign Up
          </Link>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
    </nav>
  );
};

export default Header;
