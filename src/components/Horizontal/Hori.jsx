import React from "react";
import "./Hori.css";
import Brand from "../../assets/images/brand.png";
import Growth from "../../assets/images/growth.png";
import leadership from "../../assets/images/leadership.png";
import Share from "../../assets/images/share.png";

const Hori = () => {
  return (
    <div className="horizonatl">
      <div className="btn">
        <img src={Growth} alt="growth" className="img" />
        <div className="para">
          <span>Boosting Revenue</span>
          <p>2x to 6X</p>
        </div>
      </div>
      <div className="btn">
        <img src={leadership} alt="" className="img" />
        <div className="para">
          <span>Improved leades</span>
          <p>3X to 8X</p>
        </div>
      </div>
      <div className="btn">
        <img src={Share} alt="" className="img" />
        <div className="para">
          <span>Social Media Management</span>
          <p>2x to 6X</p>
        </div>
      </div>
      <div className="btn">
        <img src={Brand} alt="" className="img" />
        <div className="para">
          <span>Brand Exposure</span>
          <p>100 to 1000%</p>
        </div>
      </div>
    </div>
  );
};
export default Hori;
