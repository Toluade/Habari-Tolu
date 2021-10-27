import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./Hero.css";
import GreenButton from "./GreenButton";

function Hero() {
  return (
    <div>
      <div className="block">
        <div>
          <h1 className="block__tagline">
            A faster & easier way to receive{" "}
            <span className="highlighted-text blue">payments</span> online.
          </h1>
          <p className="block__description">
            Scuad buildsinnovative pathwaysto enableall types of businesses and
            individuals from around the world make and receive payments smarter
            and simpler{" "}
          </p>
          <GreenButton title="Create an Account" />
        </div>
        <div></div>
      </div>

      <div className="pros">
        <ul className="pros__list">
          <div>
            <CheckCircleOutlineIcon />
            <li className="pros__list-item">
              Quick setup.{" "}
              <span className="grey-text">
                Begin accepting payment in 15 minutes.
              </span>{" "}
            </li>
          </div>
          <div>
            <CheckCircleOutlineIcon />
            <li className="pros__list-item">
              Honest pricing.{" "}
              <span className="grey-text">
                Only pay for successful transactions.
              </span>{" "}
            </li>
          </div>
          <div>
            <CheckCircleOutlineIcon />
            <li className="pros__list-item">
              All leading payment method.{" "}
              <span className="grey-text">The best localised experience.</span>{" "}
            </li>
          </div>
        </ul>
        <p>
          Fees range between 0.10-2.4NGN (+ additional fees based on %
          transaction of value). More pricing details per payment method here.
        </p>
      </div>
    </div>
  );
}

export default Hero;
