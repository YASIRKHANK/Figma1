import React from "react";
import img1 from "../images/button.png";
import img2 from "../images/calender.png";
import img3 from "../images/file icon.png";

const Navbar = () => {
  return (
    <div className="bg-white py-3 flex items-center ">
      <div className="flex items-center justify-start flex-grow">
        <ul className="flex list-none gap-x-6 text-black font-bold">
          <li className="ml-5 ">Dashboard</li>
          <li>#XRS-45670</li>
          <img src={img1} className="w-13 h-7" />
        </ul>
      </div>

      <div className="flex gap-x-10 font-bold ">
        {" "}
        {/* Images container */}
        <div className="flex py-3 text-black">Today</div>
        <div className="flex py-3 text-black">Months</div>
        <div className="flex py-3 text-black">Year</div>
        <div className="flex py-3 ">
          <img src={img2} className="h-6 " />{" "}
        </div>
        <div className="flex py-3">
          <img src={img3} className="h-6 mr-3" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
