import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import "../styles/RestaurantMenu.css";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines } = info || {};

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1 className="res-main-name">{name}</h1>
      <h2 className="res-cuisines">{cuisines?.join(", ")}</h2>
      <h2 className="res-menu-heading">Menu</h2>
      <ul className="menu-list-items">
        {itemCards.map((item) => (
          <li className="menu-item" key={item.card.info.id}>
            <div className="menu-item-details">
              <span className="menu-item-name">{item.card.info.name}</span>
              <span className="menu-item-price">
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
