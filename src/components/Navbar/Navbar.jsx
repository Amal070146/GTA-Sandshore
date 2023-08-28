import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <a href="">ABOUT</a>
      <a href="">TIMELINE</a>
      <a href="">FAQS</a>
      <a href="">CONTACT</a>
      <a className={styles.navbarButton} href="">REGISTER</a>
    </div>
  );
};

export default Navbar;
