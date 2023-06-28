import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Location.scss";
import Collapse from "../../components/Collapse/Collapse";

function Location() {
  const [logement, setLogement] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedLogement = data.find((logement) => logement.id === id);
        setLogement(selectedLogement || {}); // Assign an empty object if logement is not found
      })
      .catch((error) => {
        console.error("Error fetching logements:", error);
      });
  }, [id]);

  if (!logement || !logement.host) {
    return <div>Chargement...</div>;
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
      <img id="LogementCover" src={cover} alt="flatPicture" />
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
            <FontAwesomeIcon
              key={index}
              icon={index < rating ? faStar : faStar}
              className={index < rating ? "ic_pink" : "ic_grey"}
            />
          ))}
        </div>
      </div>
      <div id="logementCollapse">
        <div>
          <Collapse className="collapse">
            <span>Description</span>
            <div>{description}</div>
          </Collapse>
        </div>
        <div>
          <Collapse className="collapse">
            <span>Equipements</span>
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
