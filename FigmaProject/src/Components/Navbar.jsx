
import React from "react";
import img1 from "../images/search.png";
import img2 from "../images/bell.png";
import img3 from "../images/setting.png";
import img4 from "../images/shopping-cart.png";
import img5 from "../images/cube.png";
import img6 from "../images/flag.png";
import img7 from "../images/initial icon.png";

const Navbar = () => {
  return (
    <div className="bg-blue-950 py-4 flex items-center mb-2 ">
      <div className="flex items-center justify-start flex-grow">
        <ul className="flex list-none gap-x-6 text-white ">
          <li className="ml-5">Dashboard</li>
          <li>Components</li>
          <li>Apps</li>
          <li>Crud</li>
          <li>Pages</li>
        </ul>
      </div>

      <div className="flex gap-x-10"> {/* Images container */}
        <div className="flex py-3">
          <img src={img1} className="h-6" />{" "}
        </div>

        <div className="flex py-3">
          <img src={img2} className="h-6" />{" "}
        </div>

        <div className="flex py-3">
          <img src={img3} className="h-6" />{" "}
        </div>
        <div className="flex py-3">
          <img src={img4} className="h-6" />{" "}
        </div>
        <div className="flex py-3">
          <img src={img5} className="h-6" />{" "}
        </div>
        <div className="flex py-3">
          <img src={img6} className="h-6" />{" "}
        </div>
        <div className="flex py-3">
          <img src={img7} className="h-6 mr-3" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
