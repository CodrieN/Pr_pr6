import React from "react";
import "./Banner.scss";

function Banner({ imgSrc, imgId, imgAlt, partoutText }) {
  return (
    <section>
      <img id={imgId} alt={imgAlt} src={imgSrc} />
      <div id="partout">{partoutText}</div>
    </section>
  );
}

export default Banner;
