import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navElements = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>;
  });

  return <nav>{navElements}</nav>;
}

export default NavBar;
