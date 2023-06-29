import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Location.scss";
import Collapse from "../../components/Collapse/Collapse";
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
