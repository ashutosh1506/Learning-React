import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);

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
    <div className="m-2.5 flex flex-col justify-between items-center w-[250px] h-[500px] bg-[#fff8f3] rounded-lg shadow-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-2 hover:border-[rgb(168,94,94)] hover:transform hover:-translate-y-[5px] hover:shadow-lg">
      <div className="m-2.5 p-2.5 w-[220px] h-[220px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-md shadow-[0_8px_16px_rgb(168,94,94)] hover:scale-105"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="food-image"
        />
      </div>
      <div className="font-['Poppins',sans-serif] flex flex-col items-center w-[90%] h-[250px] normal-case break-words p-[15px] mb-3 transition-all duration-300 ease-in-out relative hover:shadow-[0_4px_15px_rgba(168,94,94,0.15)] hover:transform hover:-translate-y-[3px]">
        <h3 className="text-lg font-bold text-gray-800 mt-0 mb-2.5 text-center tracking-wider text-shadow-sm overflow-hidden text-ellipsis line-clamp-1 h-[25px] w-full">
          {name}
        </h3>
        <p className="w-full text-sm my-1 text-center transition-all duration-300 ease-in-out mb-2.5 leading-normal text-gray-600 italic px-[5px] overflow-hidden text-ellipsis line-clamp-2 h-[42px] hover:text-gray-800">
          {cuisines.join(", ")}
        </p>
        <p className="flex justify-center mb-2 w-full">
          <span
            className="text-white font-semibold py-1 px-2 rounded-lg inline-flex items-center shadow-sm text-[15px]"
            style={{ backgroundColor: getRatingColor(avgRating) }}
          >
            ★ {avgRating}
          </span>
        </p>
        <p className="flex items-center justify-center text-gray-600 font-medium my-1.5 w-full hover:text-gray-800">
          <span className="mr-1.5 text-base">💰</span> {costForTwo}
        </p>
        <p className="flex items-center justify-center text-gray-600 font-medium my-1.5 w-full hover:text-gray-800">
          <span className="mr-1.5 text-base">🕒</span> {sla?.slaString}
        </p>
      </div>
    </div>
  );
};

export const withTopLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute  left-1 z-10 inline-flex items-center rounded-md bg-gray-50  px-2 py-1.5 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
          Top Rated
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
