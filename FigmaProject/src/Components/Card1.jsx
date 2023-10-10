import React from "react";
import img1 from "../images/sale stat.png";
import img2 from "../images/cart 1.png";
import img3 from "../images/cart 2.png";
import img4 from "../images/cart 3.png";
import img5 from "../images/cart 4.png";

const Card = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 w-80 ml-5  border-gray-600 border">
      <div className="">
        <img src={img1} alt="Sale Stat" />

        <div className="flex gap-x-1 gap-y-3 mb-2">
          <img src={img2} alt="Cart"  />
          <img src={img3} alt="Cart" />
        </div>

        <div className="flex gap-x-1  ">
          <img src={img4} alt="Cart" />
          <img src={img5} alt="Cart" />
        </div>
      </div>
    </div>
  );
};

export default Card;
