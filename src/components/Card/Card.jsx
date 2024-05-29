import React, { useEffect, useState } from "react";
import "./Card.css";
import { useDrag } from "react-dnd";
import PropertyDetail from "../PropertyDetail/PropertyDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faStar,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    // Type determines what we are dragging, wheteht irs an image, card , it sour own name
    type: "cards",
    item: { id: props.id },
    // This collect is optional , but if you want dragging info like it it is dragging or not then its usefull
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), //IS DRAGGING RETURNS true or false
    }),
  }));

  const [favorites, setFavorites] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleAddToFavorites = () => {
    props.handleAddToFavorites(props.propertyArray); // Assuming `props.property` contains the property data

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existsInFavorites = storedFavorites.some(
      (fav) => fav.id === props.id
    );

    if (!existsInFavorites) {
      const updatedFavorites = [...storedFavorites, { id: props.id }];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const handleDelete = () => {
    setDeleted(true);
    const updatedFavorites = favorites.filter((fav) => fav.id !== props.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (deleted) {
    return null; // Render nothing if the card is deleted
  }

  return (
    <div
      ref={drag}
      className="card-container"
      style={{ border: isDragging ? "5px solid green" : "0px" }}
    >
      <img className="card-img" src={props.image} />
      <h1 className="card-title"> {"£ " + props.price} </h1>

      <div className="card-summary"></div>

      <p className="card-description">
        {props.description.slice(0, 50) + "..."}
      </p>

      <p className="post-date">posted : {props.date} </p>

      <button className="card-btn" onClick={() => setButtonPopup(true)}>
        View Details{" "}
      </button>
      <PropertyDetail
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        cardDescription={props.description}
        cardMap={props.googlemap}
        cardType={props.type}
        cardPrice={props.price}
        cardBeds={props.bedrooms}
        cardDate={props.date}
        cardLocation={props.location}
        cardFloorplan={props.floorplan}
        cardimage={props.image}
        img1={props.img1}
        img2={props.img2}
        img3={props.img3}
        img4={props.img4}
        img5={props.img5}
        img6={props.img6}
        img7={props.img7}
      />

      {/* Conditional rendering button */}

      {props.button && (
        <button className="favourite-btn" onClick={handleAddToFavorites}>
          <FontAwesomeIcon icon={faStar} />{" "}
        </button>
      )}

      {props.deletebuttonPresent && (
        <button onClick={handleDelete} className="delete-btn">
          {" "}
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      )}
    </div>
  );
}

export default Card;
