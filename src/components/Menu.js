import React from "react";
import "./Menu.css";
import flag from "../images/flag.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Menu() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">Products</li>
        <li className="nav__list-item">Pricing</li>
        <li className="nav__list-item">Support</li>
        <li className="nav__list-item">Documentation</li>
        <li className="nav__list-item">Login</li>
        <li className="nav__list-item">Create Account</li>
        <li className="nav__list-item flag">
          {" "}
          <img src={flag} alt="" /> <ArrowDropDownIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
