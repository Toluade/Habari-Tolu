import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "./Features.css";
import box from "../images/box.png";

function Features() {
  return (
    <div className="features">
      <div>
        <p className="title purple">Features</p>
        <h3 className="subtitle">Create Payment Requests</h3>
        <p className="text">
          Make a simple payment link in 5 seconds.Use our powerful features to
          customizeyour request.
        </p>
        <div className="link">
          <a href="/">Learn More</a>
          <ArrowCircleUpIcon />
        </div>
      </div>

      <div>
        <img src={box} alt="" />
      </div>
    </div>
  );
}

export default Features;
