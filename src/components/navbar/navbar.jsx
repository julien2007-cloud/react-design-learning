import React from "react";
import Logo from "../../assets/Logo.png";
import "./navbar.css"
function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="links">
        <a href="">Home</a>
        <a href="">Service</a>
        <a href="">Feature</a>
        <a href="">Product</a>
        <a href="">Testimonial</a>
        <a href="">FAQ</a>
      </div>
      <div className="buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
