
import React from "react";
import img1 from "../images/avatar.png";
import img2 from "../images/progress.png";
import img3 from "../images/Edit.png";
import img4 from "../images/delete.png";
import img5 from "../images/avatar2.png";
import img6 from "../images/boy-22.png";
import img7 from "../images/girl-16.png";

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 ml-5 border border-gray-600">
        
      <div className="font-bold gap-x-60 mb-10">   
      <div className="flex justify-between">
      <p>New Arrivals</p>
      <button className="border py-2 px-2 rounded-md bg-blue-400">new member</button>
        </div> 
        
        <p className="font-extrabold">More than 400+ new members</p>
      </div>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="authorCheckbox" className="mr-2" />
        <div className="flex items-center">
          <label htmlFor="authorCheckbox">Author</label>
          <label className="ml-28">Company</label>
          <label className="ml-20">Progress</label>
          <label className="ml-20">Action</label>
        </div>
      </div>

      <div>
        {/* First person detail */}
        <div className="flex gap-x-2 items-center mb-10">
        <input type="checkbox" id="authorCheckbox" className="mr-2" />
          <img src={img1} className="w-10 h-10" alt="Author Avatar" />
          <div>
            <p>Brad Simmon</p>
            <p>HTML, JS, ReactJS</p>
          </div>
          <div className="ml-auto">
            <p>Intertico</p>
            <p>Web UI/UX</p>
          </div>
          <img src={img2} className="ml-4" alt="Progress Icon" />
          <div className="flex items-center ml-4">
            <img src={img3} alt="Edit Icon" />
            <img src={img4} alt="Delete Icon" />
          </div>
        </div>
        <hr /> {/* Horizontal line below the first person's detail */}

        {/* Second person detail */}
        <div className="flex gap-x-2 items-center mb-10">
        <input type="checkbox" id="authorCheckbox" className="mr-2" />
          <img src={img5} className="w-10 h-10" alt="Author Avatar" />
          <div>
            <p>Jessie Clarkson</p>
            <p>C#, ASP, Net</p>
          </div>
          <div className="ml-auto">
            <p>Agoda</p>
            <p>House & Hotel</p>
          </div>
          <img src={img2} className="ml-4" alt="Progress Icon" />
          <div className="flex items-center ml-4">
            <img src={img3} alt="Edit Icon" />
            <img src={img4} alt="Delete Icon" />
          </div>
        </div>
        <hr /> {/* Horizontal line below the second person's detail */}

        {/* Third person detail */}
        <div className="flex gap-x-2 items-center mb-10">
        <input type="checkbox" id="authorCheckbox" className="mr-2" />
          <img src={img6} className="w-10 h-10" alt="Author Avatar" />
          <div>
            <p>Labron Wayde</p>
            <p>PHP, Laravel, Net</p>
          </div>
          <div className="ml-auto">
            <p>RoadGee</p>
            <p>Transportation</p>
          </div>
          <img src={img2} className="ml-4" alt="Progress Icon" />
          <div className="flex items-center ml-4">
            <img src={img3} alt="Edit Icon" />
            <img src={img4} alt="Delete Icon" />
          </div>
        </div>
        <hr /> {/* Horizontal line below the third person's detail */}

        {/* Fourth person detail */}
        <div className="flex gap-x-2 items-center">
        <input type="checkbox" id="authorCheckbox" className="mr-2" />
          <img src={img7} className="w-10 h-10" alt="Author Avatar" />
          <div>
            <p>Natalie Trump</p>
            <p>Python, React JS</p>
          </div>
          <div className="ml-auto">
            <p>The Hill</p>
            <p>Insurance</p>
          </div>
          <img src={img2} className="ml-4" alt="Progress Icon" />
          <div className="flex items-center ml-4">
            <img src={img3} alt="Edit Icon" />
            <img src={img4} alt="Delete Icon" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Card;



