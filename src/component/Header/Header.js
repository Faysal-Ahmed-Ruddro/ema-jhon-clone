import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/orderReview">Order Review</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
      </nav>
    </div>
  );
};

export default Header;
