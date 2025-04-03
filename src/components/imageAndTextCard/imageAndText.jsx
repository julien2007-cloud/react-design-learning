import React from "react";

function ImageAndText({ img_url, header, main_text }) {
  return (
    <div className="last-section">
      <img src={img_url} alt="Frame 35" />
      <div className="text-area">
        <div className="begin-text">{header} </div>
        <div className="context-text">{main_text}</div>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default ImageAndText;
