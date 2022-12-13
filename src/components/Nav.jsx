import React from "react";
import { Turn as Hamburger } from "hamburger-react";

function Nav() {
  return (
    <>
      <nav className="nav">
        <Hamburger
          size={26}
          distance="md"
          direction="left"
          color="#ff2679"
          rounded
        />
        <h3 className="nav-header">Persia Music</h3>
      </nav>
    </>
  );
}

export default Nav;
