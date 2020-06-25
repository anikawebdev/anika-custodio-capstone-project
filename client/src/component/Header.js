import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header container">
      <div className="header-wrapper">
        <h2>money hack</h2>

        <div className="navbar-wrapper">
          <ul className="navbar">
            <li>
              <Link to="/overview">overview</Link>
            </li>
            <li>
              <Link to="/details">details</Link>
            </li>

            <li>
              <Link to="/transactions">add transactions</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
