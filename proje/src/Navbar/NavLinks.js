import { HashLink as Link } from "react-router-hash-link";

const NavLinks = (props) => {
  return (
    <ul>
      <li
        className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/#home" className="links">
          <span>Home</span>
        </Link>
      </li>

      <li
        className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/#about" className="links">
          <span>About</span>
        </Link>
      </li>
      <li
        className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/#shop" className="links">
          <span>Shop</span>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
