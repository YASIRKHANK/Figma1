import React from "react";
import img1 from "../images/chart.png";
import img2 from "../images/bucket.png";
import img3 from "../images/graph.png";
import img4 from "../images/green graph.png";
import img5 from "../images/scaner.png";


const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4  ml-5 border border-gray-600">
      <div className="font-bold">
        <p>weekly sales stats</p>
        <p>890,344 sales</p>

        <div className="flex gap-x-2 gap-y-3 mb-10 justify-center items-center">
          <img src={img1}  />
        </div>
{/* first two cards */}
        <div className="flex gap-x-1 mb-10">
          <div className="flex gap-x-2">
            <img src={img2}  className="w-10 h-10 " />
            <div>
              <p>$2,034</p>
              <p>Author sales</p>
            </div>
          </div>

          <div className="flex gap-x-2">
            <img src={img3}  className="w-10 h-10" />
            <div>
              <p>$706</p>
              <p>commision</p>
            </div>
          </div>
        </div>

        {/* second two cards */}
        <div className="flex gap-x-3">
          <div className="flex gap-x-2">
            <img src={img4} className="w-10 h-10" />
            <div>
              <p>$49</p>
              <p>Avarag bid</p>
            </div>
          </div>

          <div className="flex gap-x-2">
            <img src={img5}  className="w-10 h-10" />
            <div>
              <p>5 M</p>
              <p>allirim sales</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
