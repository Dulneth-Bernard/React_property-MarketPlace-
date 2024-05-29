import React from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyDetail.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Carousal from "@itseasy21/react-elastic-carousel";

function PropertyDetail(props) {
  // Making the carousel responsive based
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  return props.trigger ? (
    <div className="detail-container">
      <div className="popup">
        <div className="popup-inner">
          <div className="closebtn">
            <button
              className="close-btn "
              onClick={() => props.setTrigger(false)}
            >
              Close
            </button>
          </div>

          <div className="property-details">
            {/* Carousal using react carousal dependency */}
            <Carousal breakPoints={breakPoints} className="carouselContainer">
              <img
                className="carousal-imgs"
                src={props.cardimage}
                alt="Propert images"
              />
              <img
                className="carousal-imgs"
                src={props.img1}
                alt="Propert images"
              />
              <img
                className="carousal-imgs"
                src={props.img2}
                alt="Propert images"
              />
              <img
                className="carousal-imgs"
                src={props.img3}
                alt="Propert images"
              />
              <img
                className="carousal-imgs"
                src={props.img4}
                alt="Propert images"
              />
              <img
                className="carousal-imgs"
                src={props.img5}
                alt="Propert images"
              />
              <img
                className="carousal-imgs"
                src={props.img5}
                alt="Propert images"
              />
              <img
                className="carousal-imgs"
                src={props.img5}
                alt="Propert images"
              />
            </Carousal>

            <h4> Bedrooms : {props.cardBeds} </h4>
            <h4> Type of property : {props.cardType} </h4>
            <h4> Price : £ {props.cardPrice} </h4>
            <h4> Location : {props.cardLocation} </h4>
            <Tabs>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Floor plan</Tab>
                <Tab>Map</Tab>
              </TabList>
              <TabPanel>{props.cardDescription}</TabPanel>
              <TabPanel>
                <img
                  src={props.cardFloorplan}
                  alt="Floor plan image "
                  className="plan-img"
                />
              </TabPanel>
              <TabPanel>{props.cardMap}</TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PropertyDetail;
