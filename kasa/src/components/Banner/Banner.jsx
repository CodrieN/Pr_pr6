import React from "react";
import "./Banner.scss";

function Banner({ imgSrc, imgId, imgAlt, partoutText }) {
  return (
    <section id="section1">
      <img id={imgId} alt={imgAlt} src={imgSrc} />
      <div id="partout">{partoutText}</div>
    </section>
  );
}

export default Banner;
