import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const data = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-white shadow-md py-3 px-8 sticky top-0 z-100 border-none">
      <div className="flex items-center">
        <img
          className="w-20 h-auto transition-transform duration-300 hover:scale-105"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center list-none text-lg font-['Poppins',sans-serif]">
          <li className="flex items-center text-sm bg-gray-50 rounded-full py-1.5 px-3 text-gray-600 mr-3">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 py-2 mx-1 cursor-pointer transition-all duration-300 ease-in-out">
            <Link
              to={"/"}
              className="text-gray-800 font-medium relative py-1 no-underline hover:text-[#ff7b54] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#ff7b54] after:transition-width after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li className="px-4 py-2 mx-1 cursor-pointer transition-all duration-300 ease-in-out">
            <Link
              to={"/about"}
              className="text-gray-800 font-medium relative py-1 no-underline hover:text-[#ff7b54] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#ff7b54] after:transition-width after:duration-300 hover:after:w-full"
            >
              About Us
            </Link>
          </li>
          <li className="px-4 py-2 mx-1 cursor-pointer transition-all duration-300 ease-in-out">
            <Link
              to={"/contact"}
              className="text-gray-800 font-medium relative py-1 no-underline hover:text-[#ff7b54] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#ff7b54] after:transition-width after:duration-300 hover:after:w-full"
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4 py-2 mx-1 cursor-pointer transition-all duration-300 ease-in-out">
            <Link
              to={"/grocery"}
              className="text-gray-800 font-medium relative py-1 no-underline hover:text-[#ff7b54] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#ff7b54] after:transition-width after:duration-300 hover:after:w-full"
            >
              Grocery
            </Link>
          </li>
          <li className="px-4 py-2 mx-1 cursor-pointer transition-all duration-300 ease-in-out font-medium flex items-center">
            Cart
          </li>
          <li className="px-4 py-2 mx-1 cursor-pointer transition-all duration-300 ease-in-out font-medium flex items-center">
            {data.loggedInUser}
          </li>
          <button
            className="ml-4 bg-[#ff7b54] text-white text-[15px] border-none rounded-full h-9 w-[100px] cursor-pointer transition-all duration-300 font-medium hover:bg-[#ff6b3d] hover:translate-y-[-2px] hover:shadow-[0_4px_8px_rgba(255,123,84,0.3)]"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
