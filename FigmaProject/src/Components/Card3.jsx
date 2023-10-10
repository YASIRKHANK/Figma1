import React from "react";
import img1 from "../images/p icon.png";
import img2 from "../images/airplane.png";
import img3 from "../images/puzzl.png";

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 ml-5 border border-gray-600">
      <div className="font-bold flex gap-x-60 mb-10">
        <p>Trend</p>
        <p className="font-extrabold">..</p>
      </div>

      <div className="flex-col">
        <div className="flex gap-x-2 mb-10">
          <img src={img1} className="w-10 h-10" />
          <div>
            <p>Top Authors</p>
            <p>Most successful fellas</p>
          </div>
          <div className="flex ml-20">
            <p>+82$</p>
          </div>
        </div>

        <div className="flex gap-x-2 mb-10">
          <img src={img2} className="w-10 h-10" />
          <div>
            <p>Top Authors</p>
            <p>Most successful fellas</p>
          </div>
          <div className="flex ml-20">
            <p>+280$</p>
          </div>
        </div>

        <div className="flex gap-x-2">
          <img src={img3} className="w-10 h-10" />
          <div>
            <p>Top Authors</p>
            <p>Most successful fellas</p>
          </div>
          <div className="flex ml-20">
            <p>+4500$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
