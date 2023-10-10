import React from "react";
import img1 from "../images/cup.png";
import img2 from "../images/yellow.png";
import img3 from "../images/nike.png";
import img4 from "../images/red boots.png";


const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 w-1/2 border border-gray-600 ml-5 ">
      <div className="font-bold flex gap-x-48 mb-10">
        <p className="font-bold">Market Leader</p>
        <p className="font-extrabold">..</p>
      </div>

      <div className="flex-col">
        <div className="flex gap-x-2 mb-10">
          <img src={img1} className="w-20 h-20" />
          <div>
            <p>Cup & Green </p>
            <p>Study the Type</p>
            <p>By:CoreAd</p>

          </div>
          <div className="flex ml-20">
            <p>+82$</p>
          </div>
        </div>

        <div className="flex gap-x-2 mb-10">
          <img src={img2} className="w-20 h-20" />
          <div>
            <p>Yellow</p>
            <p>Study the Type</p>
            <p>By:keen themes</p>

          </div>
          <div className="flex ml-20">
            <p>+280$</p>
          </div>
        </div>

        <div className="flex gap-x-2 mb-10">
          <img src={img3} className="w-20 h-20" />
          <div>
            <p>Nike & Blue</p>
            <p>Study the Type</p>
            <p>By:Invsion  Inc</p>

          </div>
          <div className="flex ml-20">
            <p>+4500$</p>
          </div>
        </div>

        <div className="flex gap-x-2">
          <img src={img4} className="w-20 h-20" />
          <div>
            <p>Red Boots</p>
            <p>Study the Type</p>
            <p>By:Figma studio</p>

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
