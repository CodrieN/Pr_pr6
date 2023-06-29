import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  const logo = "img/Kasa.jpg";
  return (
    <header>
      <nav>
        <NavLink exact to="/" className="logo-link">
          <h1>
            K<img alt="" src={logo} width="50" />
            sa
          </h1>
        </NavLink>
        <div>
          <NavLink exact to="/" activeClassName="active-link">
            Accueil
          </NavLink>
          <NavLink exact to="/apropos" activeClassName="active-link">
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
