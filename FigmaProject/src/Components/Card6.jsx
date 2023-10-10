

import React from "react";
import img1 from "../images/bucket.png";
import img2 from "../images/bloks.png";
import img3 from "../images/cart 1.png";

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 ml-5 mt-5 flex gap-5">

      {/* Card 1 */}
      <div className="flex-1 bg-[#FFFFFF] border border-gray-300 rounded-lg p-4">
        <img src={img1} className="mt-5" alt="Card 1" />
        <div className="mt-5">
          <p className="font-bold">Shopping Cart</p>
          <p>Land, House, Farms</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex-1 border border-gray-300 rounded-lg p-4 bg-[#3699FF]">
        <img src={img2} className="mt-5" alt="Card 2" />
        <div className="mt-5 ">
          <p className="font-bold">Shopping Cart</p>
          <p>Land, House, Farms</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex-1 border border-gray-300 rounded-lg p-4 bg-[#212121]">
        <img src={img3} className="mt-5" alt="Card 3" />
        <div className="mt-5 text-white ">
          <p className="font-bold">Shopping Cart</p>
          <p>Land, House, Farms</p>
        </div>
      </div>

    </div>
  );
};

export default Card;

