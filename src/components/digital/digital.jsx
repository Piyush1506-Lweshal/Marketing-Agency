import React from "react";
import "./digital.css";
import Meeting from "../../assets/images/2nd.png";

const Digital = () => {
  return (
    <div className="digital">
      <div className="digital-content">
        <div className="content-1">
          <img src={Meeting} alt="Meeting" className="meeting" />
        </div>
        <div className="content-2">
          <div className="para-1">
            <span>Best Digital Marketing Agency In </span>
            <span>
              India - Driving
              <span
                style={{
                  color: " #4f200e",
                  margin: "0px 12px 0px 12px",
                  padding: "0px",
                }}
              >
                Result
              </span>
              And
              <span
                style={{
                  color: " #4f200e",
                  margin: "0px 12px 0px 12px",
                  padding: "0px",
                }}
              >
                Growth
              </span>
            </span>
          </div>
          <div className="para-2">
            <p>
              Did you know that 71% of customers who have a positive experience
              with a brand
            </p>
            <p>
              on social media tend to share it with their and family? Our
              digital
            </p>
            <p>
              collaboration ensures an immediate and lasting impact on your
              business. We're
            </p>
            <p> more than digital experts we're your growth partners.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Digital;
