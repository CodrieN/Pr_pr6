import React from "react";
import './NotFound.scss';

function NotFound() {
  return (
    <section>
      <div id="_404">404</div>
      <div>Oups! La page que vous demandez n'existe pas.</div>
      <div><a href="./index.html">Retourner sur la page d’accueil</a></div>
    </section>
  );
}
export default NotFound;
