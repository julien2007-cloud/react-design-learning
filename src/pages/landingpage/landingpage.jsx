import React from "react";
import illustration from "../../assets/Illustration.png";
import "./landingpage.css";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import sixth from "../../assets/sixth.png";
import seventh from "../../assets/seventh.png";
function Landingpage() {
  return (
    <div className="main-section">
      <div className="container-section">
        <div className="text-section">
          <div className="main-text">
            <b>
              {" "}
              Lessons and insights <span>from 8 years</span>
            </b>
          </div>
          <p>
            Where to grow your business as a photographer: site or social media
          </p>
          <button className="register">Register</button>
        </div>
        <div className="hero-section">
          <img src={illustration} alt="Hero-image" />
        </div>
      </div>
      <div className="footer">
        <div className="header-text">
          <b>Our Clients</b>
        </div>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="sponsor-section">
          <img src={first} alt="first" />
          <img src={second} alt="second" />
          <img src={third} alt="third" />
          <img src={fourth} alt="fourth" />
          <img src={fifth} alt="fifth" />
          <img src={sixth} alt="sixth" />
          <img src={seventh} alt="seventh" />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
