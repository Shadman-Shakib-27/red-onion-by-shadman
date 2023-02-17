import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link id="Link1" to="/Login">
          Login
        </Link>
        <Link id="Link2" to="/Sign Up">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
