import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { MdMenu, MdClose } from "react-icons/md";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <MdMenu className="hamburger" onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <MdClose className="hamburger" onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="NavBar">
      <nav id="MobileNavigation">
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      </nav>
    </div>
  );
};

export default MobileNavigation;
