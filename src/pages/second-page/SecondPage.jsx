import React from "react";
import firstImage from "../../assets/firstImage.png";
import secondImage from "../../assets/second-icon.png";
import thirdImage from "../../assets/third-icon.png";
import frameImage from "../../assets/frameImage.svg";
import Card from "../../components/card/card";

import "./SecondPage.css";
import ThirdPageCard from "../../components/thirdPageCard/thirdPageCard";
import ImageAndText from "../../components/imageAndTextCard/imageAndText";
function SecondPage() {
  return (
    <div className="main-container1">
      <div className="top-section">
        <div className="top">Manage your entire community</div>
        <div className="second-text">in a single system</div>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className="card-section">
        <Card
          img_url={firstImage}
          text="Our membership management software provides full automation of
            membership renewals and payments"
          header="Membership Organisations"
        />
        <Card
          img_url={secondImage}
          text="Our membership management software provides full automation of
            membership renewals and payments"
          header="National Associations"
        />
        <Card
          img_url={thirdImage}
          text="Our membership management software provides full automation of
            membership renewals and payments"
          header="Clubs And Groups"
        />
      </div>
      <ImageAndText
        header="The unseen of spending three years at Pixelgrade"
        img_url={frameImage}
        main_text="When joining the JustGo Community, your success becomes our success.
            In other words, our Customer Success team will be on hand from day
            one to ensure we understand your requirements, share your goals and
            work with you for a smooth adoption of our software."
      />
    </div>
  );
}

export default SecondPage;
