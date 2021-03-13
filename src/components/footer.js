import React from "react";
import { Link } from "gatsby";
import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div>
        <p className={styles.gowno}>Learn</p>
        <Link>HOW</Link>
      </div>
      <div>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
        </ul>
        <p>follow us</p>
        <ul>
          <li>
            <img></img>
          </li>
          <li>
            <img></img>
          </li>
          <li>
            <img></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
