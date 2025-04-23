import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
