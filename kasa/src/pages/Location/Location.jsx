import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Location.scss";
import Collapse from "../../components/Collapse/Collapse";
import Banner from "./../../components/Banner/Banner";
import { Navigate } from "react-router-dom";

function Location() {
  const [logement, setLogement] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedLogement = data.find((logement) => logement.id === id);
        setLoading(false);
        setLogement(selectedLogement);
      })
      .catch((error) => {
        console.error("Error fetching logements:", error);
      });
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  } else if (logement == undefined) {
    return <Navigate to="/not-found" />;
  }

  const {
    title,
    cover,
    host,
    tags,
    location,
    rating,
    description,
    equipments,
  } = logement;

  return (
    <section id="logementSection">
      <Banner imgSrc={cover} imgId="LogementCover" imgAlt="" />
      <div id="div1">
        <span id="logementTitle">{title}</span>
        <div id="logementHost">
          <div id="logementHostName">{host.name}</div>
          <div>
            <img src={host.picture} alt="hostPicture" />
          </div>
        </div>
      </div>
      <div id="logementLocation">{location}</div>
      <div id="div2">
        <div id="tags">
          {tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div id="logementStars">
          {Array.from({ length: 5 }, (_, index) => (
            <i
              key={index}
              className={
                index < rating
                  ? "fa-solid fa-star ic_pink"
                  : "fa-solid fa-star ic_grey"
              }
            ></i>
          ))}
        </div>
      </div>
      <div id="logementCollapse">
        <div>
          <Collapse title="Description" className="collapse">
            <div>{description}</div>
          </Collapse>
        </div>
        <div>
          <Collapse title="Equipements" className="collapse">
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </section>
  );
}

export default Location;
