import React from "react";
import pseudo1 from "../../assets/pseudo1.png";
import pseudo2 from "../../assets/pseudo2.png";
import pseudo3 from "../../assets/pseudo3.png";
import pseudo4 from "../../assets/pseudo4.png";
import pana from "../../assets/pana.svg";
import "./thirdPage.css";
import ThirdPageCard from "../../components/thirdPageCard/thirdPageCard";
import ImageAndText from "../../components/imageAndTextCard/imageAndText";
function ThirdPage() {
  return (
    <div>
      <div className="very-last-section">
        <div className="left-text">
          <div>
            <div>Helping a local</div>{" "}
            <div>
              <span>business reinvent itself</span>
            </div>
          </div>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="left-image-cont">
          <div className="items">
            {" "}
            <ThirdPageCard
              img_url={pseudo1}
              number="2,245,341"
              text="Members"
            />
            <ThirdPageCard img_url={pseudo2} number="46,328" text="Clubs" />
          </div>
          <div className="items">
            <ThirdPageCard
              img_url={pseudo3}
              number="828,867"
              text="Event Bookings"
            />
            <ThirdPageCard
              img_url={pseudo4}
              number="1,926,436"
              text="Payments"
            />
          </div>
        </div>
      </div>
      <ImageAndText
        header="The unseen of spending three years at Pixelgrade"
        img_url={pana}
        main_text="When joining the JustGo Community, your success becomes our success.
            In other words, our Customer Success team will be on hand from day
            one to ensure we understand your requirements, share your goals and
            work with you for a smooth adoption of our software."
      />
    </div>
  );
}

export default ThirdPage;
