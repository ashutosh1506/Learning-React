import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines } = info || {};

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-[800px] mx-auto p-10 font-['Segoe UI',Tahoma,Geneva,Verdana,sans-serif] text-gray-800 bg-white rounded-xl shadow-xl">
      <h1 className="text-4xl font-bold m-0 pb-2 text-[#1d1d1d] border-b-2 border-gray-100">
        {name}
      </h1>
      <h2 className="text-base font-normal text-gray-500 my-2.5 mb-6 italic">
        {cuisines?.join(", ")}
      </h2>
      {categories.map((category, index) => (
        // Restaurant Category is controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
