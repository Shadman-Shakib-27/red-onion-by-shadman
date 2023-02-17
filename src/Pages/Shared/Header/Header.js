import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} as={Link} to="/" alt="" />
      <div>
        <Link id="Link1" to="/Logins">
          Login
        </Link>
        <Link id="Link2" to="/SignUp">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
