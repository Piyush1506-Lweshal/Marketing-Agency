import React from "react";
import "./marketing.css";

const Marketing = () => {
  return (
    <div className="marketing-container">
      <div className="cont">
        <div className="plan">
          <p>Get your Free Perfornance Marketing Plan Now!</p>
          <span>
            Fill In Your Details Below And Unlock Your Personalized Performance
            Marketing Strategey!{" "}
          </span>
        </div>
        <div className="prop">
          <div className="web" aria-placeholder="Enter Your Website">
            Enter Your Website
          </div>
          <div className="proposal" aria-placeholder="Send Me a Proposal">
            Send Me a Proposal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
