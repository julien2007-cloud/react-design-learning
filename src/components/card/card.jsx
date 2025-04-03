
import React from "react";

function Card({ img_url, header, text }) {
  return (
    <div>
      <div className="card">
        <img src={img_url} alt="second Image" />
        <div className="text">{header}</div>
        <div className="card-text">{text}</div>
      </div>
      ;
    </div>
  );
}

export default Card;
