import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-items-ul">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { name, desc, rating, time } = props;
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          className="res-image"
          src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"
          alt="food-image"
        />
      </div>
      <div className="res-details">
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>{rating}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          name="Meghna Foods"
          desc="Biryani, North Indian, Asian"
          rating="4.4 Stars"
          time="38 minutes"
        />
        <RestaurantCard
          name="KFC"
          desc="Vegetarian, Non-Vegetarian"
          rating="4.9 Stars"
          time="30 minutes"
        />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
