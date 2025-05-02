import { useState } from "react";
import ItemList from "./ItemList";
import { downArrow, rightArrow } from "../utils/constants";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="mx-auto my-4 p-4 bg-white">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <img
              src={showItems ? downArrow : rightArrow}
              alt="expand arrow"
              className="w-4 h-4"
            />
          </span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
