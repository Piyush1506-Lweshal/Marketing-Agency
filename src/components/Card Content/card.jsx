import React from "react";
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="card-content">
        <div className="paga">
          <div className="paga-1">
            <span className="span">
              Our Proven Track Record as the Leading Digital
            </span>
            <span className="span"> Marketing Agency in India</span>
          </div>
          <div className="paga-2">
            <p className="p">
              <p>
                Discover how the best digital marketing company helped
                businesses achieve their digital marketing goals through our
                case
              </p>
              <p>
                studies. From increasing online visibility to boosting sales,
                Leads and agency revenue, we've delivered measurable results
              </p>
              <p>
                across various industries. Read on to see how we can help grow
                our clients businesses.
              </p>
            </p>
          </div>
        </div>
        <div className="card-section">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </>
  );
};
export default Card;
