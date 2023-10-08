import React, { useState } from "react";
import NavLinks from "./NavLinks";
const Navigation = () => {
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
    <nav className={fix ? "navbar active" : "navbar"} id="Navigation">
      <NavLinks />
    </nav>
  );
};

export default Navigation;
