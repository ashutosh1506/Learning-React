import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          className="res-image"
          src={IMG_CDN_URL + resData.data.cloudinaryImageId}
          alt="food-image"
        />
      </div>
      <div className="res-details">
        <h3>{resData.data.name}</h3>
        <p>{resData.data.cuisines.join(",")}</p>
        <p>{resData.data.avgRating}</p>
        <p>{resData.data.costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
