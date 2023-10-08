import React, { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { HashLink as Link } from "react-router-hash-link";
import { BsCart3 } from "react-icons/bs";

const NavBar = ({ cartItems }) => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 80) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <div className="navBar" id="classes.NavBar">
      <MobileNavigation />
      <Navigation />

      <li className="cartLink">
        <Link smooth to="/#cart" className="links">
          <span className="cart-length">
            {cartItems.length === 0 ? " " : cartItems.length}
          </span>
          <BsCart3 className="cart-icon" />
        </Link>
      </li>
    </div>
  );
};

export default NavBar;
