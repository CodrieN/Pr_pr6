import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <h1>
          K<img alt="" src="img/Kasa.jpg" width="50" />
          sa
        </h1>
        <div>
          <a href="./index.html">Acceuil</a>
          <a href="./A_Propos.html">A Propos</a>
        </div>
      </nav>
    </header>
  );
}
export default Header;

// todo modifier les links pour qu'ils fonctionnent avec react router dom
