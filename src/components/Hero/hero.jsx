import React from "react";
import "./Hero.css";
import photo from "../../assets/images/home.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="section-1">
          <div className="sec">
            <div className="sec-a">
              <p>AI-Driven Performance</p>
              <p>Marketing Agency</p>
              <div className="sec-b">
                <span>Powering Growth With Precision And AI</span>
              </div>
            </div>
          </div>
          <button className="talk">Let's Talk !</button>
        </div>
        <div className="section-2">
          <img src={photo} alt=" office photo" height={390} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
