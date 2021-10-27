import React from "react";
import "./Solutions.css";
import man from "../images/ffg.jpg";
import "./Features.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Solutions() {
  return (
    <div className="solutions">
      <img src={man} alt="A man in an apron holding a bobile tablet." />
      <div>
        <p className="title orange">Solutions</p>
        <h3 className="solutions__subtitle">
          Better payments, unlimited opportunities
        </h3>
        <p className="text">
          Get some more reliable transactions. Higher conversions. Ubeaten
          insight and flexibility. So you can delight your customers and
          unlocknew revenue streams.
        </p>

        <div className="solutions__list">
          <p className="solutions__list-item">
            <CheckBoxOutlinedIcon /> Debit and Credit cards
          </p>
          <p className="solutions__list-item">
            <CheckBoxOutlinedIcon /> USSD
          </p>
        </div>

        <div className="solutions__list">
          <p className="solutions__list-item">
            <CheckBoxOutlinedIcon /> Bank Account
          </p>
          <p className="solutions__list-item">
            <CheckBoxOutlinedIcon /> Soft POS
          </p>
        </div>

        <div className="solutions__list">
          <p className="solutions__list-item">
            <CheckBoxOutlinedIcon /> Bank Transfer
          </p>
          <p className="solutions__list-item">
            <CheckBoxOutlinedIcon /> Mobile Money
          </p>
        </div>

        <div className="link">
          <a href="/">Creat a free account</a>
          <ArrowCircleUpIcon />
        </div>
      </div>
    </div>
  );
}

export default Solutions;
