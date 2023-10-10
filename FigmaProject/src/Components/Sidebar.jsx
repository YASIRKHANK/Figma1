import React from "react";
import img1 from "../images/logo.png";
import img2 from "../images/export.png";
import img3 from "../images/action.png";
import img4 from "../images/reports.png";
import img5 from "../images/config.png";
import img6 from "../images/console.png";
import img7 from "../images/system.png";
import img8 from "../images/mail.png";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";





const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-1/5 bg-[#1F1E2E] min-h-screen  p-5 font-semibold">
        <div className=" py-3 flex justify-center items-center ">
          <img src={img1} alt="Logo" />
        </div>

        <div className=" py-3 flex flex-col justify-center items-center ">
          <img src={img2} alt="Export" className="item-center" />
          <h1 className="pl-3 pt-2 text-white text-center">export</h1>
        </div>

        <div className=" py-3 flex flex-col justify-center items-center">
          <img src={img3} alt="Action" />
          <h1 className="pl-3 pt-2 text-white text-center">action</h1>
        </div>

        <div className=" py-3  flex flex-col justify-center items-center">
          <img src={img4} alt="Reports" />
          <h1 className="pl-3 pt-2 text-white">Reports</h1>
        </div>

        <div className=" py-3 flex flex-col justify-center items-center">
          <img src={img5} alt="Config" />
          <h1 className="pl-3 pt-2 text-white">config</h1>
        </div>

        <div className=" py-3 flex flex-col justify-center items-center">
          <img src={img6} alt="Console" />
          <h1 className="pl-3 pt-2 text-white">console</h1>
        </div>

        <div className=" py-3 flex flex-col justify-center items-center">
          <img src={img7} alt="System" />
          <h1 className="pl-3 pt-2 text-white">system</h1>
        </div>

        <div className=" py-3 flex flex-col justify-center items-center">
          <img src={img8} alt="Mail" />
          <h1 className="pl-3 pt-2 text-white">mail</h1>
        </div>
      </div>

      <div className="w-full">
        <Navbar />
        <SubNavbar />
        <div className="flex mb-12">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="flex">
        <Card4/>
        <Card5/>
        </div>
        <div>
          <Card6/>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
