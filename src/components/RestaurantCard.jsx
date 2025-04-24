import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
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
        <p>{cuisines.join(",")}</p>
        <p>⭐ {avgRating}</p>
        <p>{costForTwo}</p>
        <p>{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
