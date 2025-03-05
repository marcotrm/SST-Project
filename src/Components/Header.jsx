import React from "react";
import "../css/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-cnt">
        <img className="logo" src="public/logo.png" alt="" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#flights">Flights</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
