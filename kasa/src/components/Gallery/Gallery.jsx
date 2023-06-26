import React, { useEffect, useState } from "react";
import Card from "./../../components/Card/Card";
import "./Gallery.scss";



function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => {
        console.error("Error fetching logements:", error);
      });
  }, []);

  return (
    <div className="Gallery">
    {logements.map((logement) => (
      <Card className="Card"
        key={logement.id}
        id={logement.id}
        title={logement.title}
        cover={logement.cover}
      />
    ))}
  </div>
  );
}
export default Gallery;
