import React, { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import { useDrop } from "react-dnd";
import "../DraggedDropped/dragdrop.css";
import "./PropertyList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTrash } from "@fortawesome/free-solid-svg-icons";

function PropertyList(props) {
  console.log("Props", props.property);

  const [favorites, setFavorites] = useState([]);

  const [board, setBoard] = useState([]);
  // Maintaing a set keeps track of added carrd id to ensure no more same items can be added
  const [addedProperties, setAddedProperties] = useState(new Set());

  const [draggedProperty, setDraggedProperty] = useState(null);

  const [addedToFavorites, setAddedToFavorites] = useState([]);

  // Adding the card to the board
  const addCardToBoard = (id) => {
    const isInFavorites = favorites.some((fav) => fav.id === id);
    if (!addedProperties.has(id) && id !== draggedProperty) {
      const cardList = props.property.filter((card) => id === card.id);
      setBoard((board) => [...board, cardList[0]]);
      setAddedProperties(new Set(addedProperties.add(id))); // Add the ID to the set
    }
  };

  useEffect(() => {
    // Retrieve favorites from local storage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Filter properties to display those in favorites
  const favoriteProperties = props.property.filter((property) =>
    favorites.includes(property.id)
  );

  const [{ isOver }, drop] = useDrop(() => ({
    // Arrow function that returns an object

    // What objects to accept , we set dragging of type image
    accept: "cards",
    // Function that is called whenever you drop item
    //drop function we get the item we dropped
    drop: (item) => {
      console.log("DroppedItem", item);
      addCardToBoard(item.id);
      //adding the cards id to Set
      setAddedProperties(new Set([...addedProperties, item.id]));
      setDraggedProperty(item.id); // Update the dragged property ID
    }, //identifying which image to add to board list
    collect: (monitor) => ({
      // this isnt mandatory but we can use it for styling to check if it is over
      isOver: !!monitor.isOver(),
    }),
  }));

  function clearList() {
    setBoard(() => []);
    // setFavoriteProperties([]);
    setFavorites([]);
  }

  console.log("Favorites:", favorites);
  console.log("Property List:", props.property);

  // Function to remove a card from favorites when dropped into the delete div
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);

    const updatedFavoriteProperties = favoriteProperties.filter(
      (property) => property.id !== id
    );
    setFavoriteProperties(updatedFavoriteProperties);
  };

  //fucntion to remove the card from the favourite list container
  const removeCardFromBoard = (id) => {
    console.log("Removing card with ID:", id);
    console.log("Current Board:", board);
    const updatedBoard = board.filter((property) => property.id !== id);
    console.log("Updated Board after removal:", updatedBoard);
    setBoard(updatedBoard);
    setAddedProperties(new Set(updatedBoard.map((property) => property.id)));
    if (id === draggedProperty) {
      setDraggedProperty(null); // Reset dragged property when removed from board
    }
  };

  // Add a drop target for the "Remove from board" area
  const [{ isOverDelete }, dropDelete] = useDrop(() => ({
    accept: "cards",
    drop: (item) => {
      //Removing the droped card
      removeCardFromBoard(item.id);
      //Removing the favourite card
      removeFromFavorites(item.id);
    },
    collect: (monitor) => ({
      isOverDelete: !!monitor.isOver(),
    }),
  }));

  const [favoritesProperties, setFavoriteProperties] = useState([]);

  const handleAddToFavorites = (property) => {
    const existsInFavorites = favorites.some((fav) => fav.id === property.id);

    if (!existsInFavorites && property.id !== draggedProperty) {
      const updatedFavorites = [...favorites, property];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      // Update favoriteProperties state
      setFavoriteProperties([...favoriteProperties, property]);
    }
  };

  return (
    <div className="cards-cardrop-container">
      <div className="cards">
        <div>
          <div className="card-section">
            {props.property.map((property) => (
              <Card
                id={property.id}
                key={property.id}
                image={property.picture}
                description={property.description}
                price={property.price}
                bedrooms={property.bedrooms}
                type={property.type}
                location={property.location}
                date={
                  property.added.day +
                  "-" +
                  property.added.month +
                  "-" +
                  property.added.year
                }
                button={true}
                handleAddToFavorites={handleAddToFavorites}
                propertyArray={property}
                googlemap={property.maps}
                floorplan={property.floorplan}
                img1={property.img1}
                img2={property.img2}
                img3={property.img3}
                img4={property.img4}
                img5={property.img5}
                img6={property.img6}
                img7={property.img7}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Div where the droping cards goes into */}
      <div className="favlist-container">
        <div
          className=""
          ref={drop}
          style={{ border: isOver ? "5px solid green" : "0px" }}
        >
          <h2 style={{ textAlign: "center" }} className="fav-list-heading">
            Favourite list{" "}
            <button className="close-btn" onClick={clearList}>
              Clear List
            </button>
          </h2>

          {/* Logic to display filtered poroperty using click */}
          {/* {console.log("favourite maps"+props.favorites)} */}
          {console.log("Fav list : " + favorites)}
          {/* Working favourite list */}
          {props.property.map((property) => {
            if (favorites.some((fav) => fav.id === property.id)) {
              return (
                <Card
                  key={property.id}
                  id={property.id}
                  image={property.picture}
                  description={property.description}
                  price={property.price}
                  bedrooms={property.bedrooms}
                  type={property.type}
                  location={property.location}
                  date={`${property.added.day}-${property.added.month}-${property.added.year}`}
                  button={false}
                  deletebuttonPresent={true}
                />
              );
            }
            return null;
          })}

          {/* Loop through everything in board array */}
          {board.map((property) => {
            console.log("Property: " + property);
            return (
              <Card
                id={property.id}
                key={property.id}
                image={property.picture}
                description={property.description.slice(0, 100) + "..."}
                price={property.price}
                bedrooms={property.bedrooms}
                type={property.type}
                location={property.location}
                date={
                  property.added.day +
                  "-" +
                  property.added.month +
                  "-" +
                  property.added.year
                }
                deletebuttonPresent={true}
              />
            );
          })}

          {/* {favoriteProperties.map((property) => (
          <Card
            key={property.id}
              image={property.picture}
              description={property.description.slice(0, 100) + "..."}
              price={property.price}
              bedrooms={property.bedrooms}
              type={property.type}
              location={property.location}
              date={
                property.added.day +
                "-" +
                property.added.month +
                "-" +
                property.added.year}
                addFavButton={true}
            // Render property details as needed
            deletebuttonPresent={true}
          />
        ))} */}
        </div>
        <div
          style={{ border: isOverDelete ? "5px solid pink" : "0px" }}
          className="remove-board-container"
          ref={dropDelete}
        >
          <p>Drop card here to delete</p>
          <FontAwesomeIcon icon={faTrash} className="delete-icon" />
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
