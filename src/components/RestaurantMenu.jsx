import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines } = info || {};

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="max-w-[800px] mx-auto p-10 font-['Segoe UI',Tahoma,Geneva,Verdana,sans-serif] text-gray-800 bg-white rounded-xl shadow-xl">
      <h1 className="text-4xl font-bold m-0 pb-2 text-[#1d1d1d] border-b-2 border-gray-100">
        {name}
      </h1>
      <h2 className="text-base font-normal text-gray-500 my-2.5 mb-6 italic">
        {cuisines?.join(", ")}
      </h2>
      <h2 className="text-3xl my-7 mb-4 pb-2.5 border-b-2 border-gray-100 text-[#1d1d1d] relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-[60px] after:h-0.5 after:bg-[#fc8019]">
        Menu
      </h2>
      <ul className="list-none p-0 my-5">
        {itemCards.map((item) => (
          <li
            className="py-4 px-5 mb-3 bg-gray-50 border-l-4 border-[#fc8019] rounded-md text-lg flex justify-between items-center transition-all duration-300 ease-in-out shadow-sm hover:bg-[#fff8f2] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(252,128,25,0.15)]"
            key={item.card.info.id}
          >
            <div className="flex justify-between items-center w-full">
              <span className="font-medium text-gray-700">
                {item.card.info.name}
              </span>
              <span className="font-semibold text-[#fc8019]">
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
