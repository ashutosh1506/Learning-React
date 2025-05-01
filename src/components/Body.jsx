import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [topRatedRes, setTopRatedRes] = useState("Top Rated");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRes(restaurants);
      setFilteredRes(restaurants);
    } catch (error) {
      console.error("Error fetching Swiggy data:", error);
    }
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks Like you're offline!!! Check your connection</h1>;

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-wrap items-center justify-center p-6 bg-gray-50 rounded-lg mx-8 my-4 shadow-sm">
        <div className="flex items-center mr-4 relative flex-grow max-w-lg">
          <input
            type="text"
            className="h-[42px] w-full py-0 px-7 pl-11 border border-gray-200 rounded-full font-['Poppins',sans-serif] text-[0.95rem] text-gray-800 transition-all duration-300 shadow-sm focus:outline-none focus:border-[#ff7b54] focus:shadow-[0_2px_8px_rgba(255,123,84,0.25)]"
            value={searchText}
            placeholder="Search here"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-base text-gray-500 z-10">
            🔍
          </span>
          <button
            className="bg-[#ff7b54] text-white font-['Poppins',sans-serif] font-medium text-[15px] border-none rounded-full h-[42px] min-w-[100px] ml-2.5 cursor-pointer transition-all duration-300 shadow-sm hover:bg-[#ff6b3d] hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(255,123,84,0.3)]"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="font-['Poppins',sans-serif] bg-white border-2 border-[#ff7b54] text-[#ff7b54] text-[15px] font-medium rounded-full h-[42px] px-6 cursor-pointer transition-all duration-300 hover:bg-[#ff7b54] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(255,123,84,0.2)]"
          onClick={() => {
            if (topRatedRes === "Top Rated") {
              setTopRatedRes("Show-All");
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.3
              );

              setFilteredRes(filteredList);
            } else {
              setTopRatedRes("Top Rated");
              setFilteredRes(listOfRes);
            }
          }}
        >
          {topRatedRes} Restaurants
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <Link
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
            className="no-underline text-inherit"
          >
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
