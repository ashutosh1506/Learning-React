import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import "../styles/RestaurantCard.css";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  // Get appropriate rating color based on rating value
  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "#38b000";
    if (rating >= 4.0) return "#70e000";
    if (rating >= 3.5) return "#ff9500";
    return "#ff5252";
  };

  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          className="res-image"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="food-image"
        />
      </div>
      <div className="res-details">
        <h3>{name}</h3>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="rating">
          <span
            className="rating-badge"
            style={{ backgroundColor: getRatingColor(avgRating) }}
          >
            ★ {avgRating}
          </span>
        </p>
        <p className="cost">
          <span className="detail-icon">💰</span> {costForTwo}
        </p>
        <p className="delivery-time">
          <span className="detail-icon">🕒</span> {sla?.slaString}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
