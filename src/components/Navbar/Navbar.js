import React from "react";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";
import MenuItems from "../../Data";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState();

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <nav className="nav">
      <div className="nav-center container">
        <h1 className="logo">LOGO NAME......</h1>
        <ul className={click ? "nav-list active" : "nav-list"}>
          {MenuItems.map(({ id, title, cName }) => (
            <li key={id} className="nav-item">
              <Link className={cName}>{title}</Link>
            </li>
          ))}
        </ul>
        {/* <div onClick={clickHandler} className="hamburger">
          {click ? <FaTimes /> : <FaBars />}
        </div> */}
      </div>
      <div>
        <button className="shop" onClick={clickHandler}>
          <i class="fas fa-shopping-cart"></i> Your shopping cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
