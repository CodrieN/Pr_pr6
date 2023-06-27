import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Location.scss";

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
    return <div>Loading...</div>;
  }

  const { title, cover, host, tags, location, rating, description, equipments } = logement;

  return (
    <section>
      <img src={cover} alt="flatPicture" />
      <div>
        <span>{title}</span>
        <div>
          <div>{host.name}</div>
          <div>
            <img src={host.picture} alt="hostPicture" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>{tags.join(", ")}</div>
          <div>{location}</div>
          <div>{rating} stars</div>
        </div>
        <div>
          {Array.from({ length: rating }, (_, index) => (
            <i key={index} className="fa-solid fa-star ic_blue"></i>
          ))}
          {Array.from({ length: 5 - rating }, (_, index) => (
            <i key={index} className="fa-solid fa-star ic_grey"></i>
          ))}
        </div>
      </div>
      <div>
        <div>
          <span>Description</span>
          <div>{description}</div>
        </div>
        <div>
          <span>Equipements</span>
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Location;
