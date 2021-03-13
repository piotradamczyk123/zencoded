import React from "react";
import { Link } from "gatsby";
import navbarStyles from "./modules/navbar.module.css";
import Logo from "../components/logo.js";

const Navbar = () => {
  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles.logowrapper}>
        <Logo />

        {/* <img className={navbarStyles.logo} src={window.location.origin + '/img/Logo.png'} /> */}
      </div>

      <ul className={navbarStyles.navul}>
        <li className={navbarStyles.navli}>
          <span></span>
          <Link className={navbarStyles.link} to="/what">
            What
          </Link>
        </li>
        <li className={navbarStyles.navli}>
          <span></span>
          <Link className={navbarStyles.link} to="/how">
            How
          </Link>
        </li>
        <li className={navbarStyles.navli}>
          <span></span>
          <Link className={navbarStyles.link} to="/work">
            Work
          </Link>
        </li>
        <li className={navbarStyles.navli}>
          <span></span>
          <Link className={navbarStyles.link} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
