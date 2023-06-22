import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <h1>
          K<img alt="" src="img/Kasa.jpg" width="50" />
          sa
        </h1>
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/apropos">A Propos</Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;


