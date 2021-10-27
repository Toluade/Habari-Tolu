import React from "react";
import "./Support.css";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import earth from "../images/earth.png";
import man from "../images/mann.png";
import money from "../images/money.png";

function Support() {
  return (
    <div className="support">
      <div className="support__header">
        <p className="title blue-text">Support</p>
        <h3 className="subtitle">Trusted by businesses all over Africa</h3>
        <p className="text">
          Our platform provides a resource of scalable and reliable technology
          optimized to drive growth in new markets and dominate in older ones.{" "}
        </p>
      </div>

      <div className="support__options">
        <div className="support__option-item">
          <div>
            <img src={earth} alt="" />
            <p className="support-title">Scuad for Global Brands</p>
            <p className="desc">
              We help brands accept payments from accross Afica
            </p>
          </div>
          <p className="support-link">
            Learn More <PlayCircleFilledWhiteOutlinedIcon />{" "}
          </p>
        </div>

        <div className="support__option-item">
          <div>
            <img src={man} alt="" />
            <p className="support-title">Scuad for Entrepreneurs</p>
            <p className="desc">
              From startup to scale-up, we can support you at every stage of
              your businesses' growth.
            </p>
          </div>
          <p className="support-link">
            Learn More <PlayCircleFilledWhiteOutlinedIcon />{" "}
          </p>
        </div>

        <div className="support__option-item">
          <div>
            <img src={money} alt="" />
            <p className="support-title">Scuad for Large Organizations</p>
            <p className="desc">
              Paystack helps many of the largest corporate and government
              organizatio
            </p>
          </div>
          <p className="support-link">
            Learn More <PlayCircleFilledWhiteOutlinedIcon />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Support;
