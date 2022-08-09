import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 id="logo">Math Magicians</h1>
        <ul className="navlist">
          <li>
            <NavLink to="/" className="navitem">Home</NavLink>
          </li>
          <li>
            <NavLink to="/calculator" className="navitem">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/quote" className="navitem">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;