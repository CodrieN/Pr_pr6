import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav>
      <Link to="/" className="logo-link">
          <h1>
            K<img alt="" src="img/Kasa.jpg" width="50" />
            sa
          </h1>
        </Link>
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/apropos">A Propos</Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
