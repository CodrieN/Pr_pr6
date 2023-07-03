import React from "react";
import Gallery from "./../../components/Gallery/Gallery";
import Banner from "./../../components/Banner/Banner";
import "./Home.scss";

function Home() {
  return (
    <>
      <section id="section1">
        <Banner
          imgSrc="/img/Plage.png"
          imgId="img0"
          imgAlt="Plage"
          partoutText="Chez vous, partout et ailleurs"
        />
      </section>
      <section id="section2">
        <Gallery />
      </section>
    </>
  );
}

export default Home;
