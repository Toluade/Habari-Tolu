import React from "react";
import "./LastSection.css";
import "./Features.css";
import GreenButton from "./GreenButton";

function LastSection() {
  return (
    <div className="last-section">
      <div className="text">
        <p className="title green">Ready for a trial?</p>

        <h1 className="block__tagline">
          Start accepting{" "}
          <span className="highlighted-text blue">payments</span> in minutes.
        </h1>
      </div>

      <div className="button">
        <GreenButton title="Create a free Account" />
      </div>
    </div>
  );
}

export default LastSection;
