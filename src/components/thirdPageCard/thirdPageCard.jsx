import React from "react";
import "./thirdPageCard.css";
function ThirdPageCard({ img_url, number, text }) {
  return (
    <div className="left-images">
      <div className="section-1">
        <img src={img_url} alt="pseudo1" />
      </div>
      <div className="section-2">
        <span>{number}</span>
        <section>{text}</section>
      </div>
    </div>
  );
}

export default ThirdPageCard;
