import "./Footer.css";
import React from "react";

function Footer() {
  // Year updates dynamically every year
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
