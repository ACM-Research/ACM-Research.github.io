import React, { useEffect } from "react";
import "../styles/navbar.css";
import "../styles/main.css";
import banner from "../assets/banner-final.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="banner" src={banner} alt="Banner" />
      <p className="title">ACM Research Symposium Fall 2023</p>
    </nav>
  );
};

export default Navbar;
