import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="nav">
        <Link to={"/pages/products"}> LOGO </Link>
        <ul>
          <li>
            {" "}
            <NavLink to={"/pages/products"}> Products </NavLink>{" "}
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <NavLink to={"/pages/add-products"}> Add Products </NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
