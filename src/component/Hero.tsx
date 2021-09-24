import React from "react";
import Logo2 from "../assets/image/Logo2.svg";

const Hero = () => {
  return (
    <div className="bg-black rounded-t-3xl lg:p-32  p-10 hero ">
      <img src={Logo2} alt="logo" className="w-72" />

      <h3 className="text-white font-semibold text-2xl mb-12 w-64">
        Get to know more about your cat breed
      </h3>

      {/* <div className="flex items-center bg-white w-80 rounded-full">
        <input
          type="search"
          className="placeholder-basic-text font-semibold  bg-white p-5 rounded-3xl outline-none"
          placeholder="Enter your breed"
        />
        <i className="fa fa-search text-basic-text bg-white rounded-3xl p-5">
          {" "}
        </i>
      </div> */}
    </div>
  );
};

export default Hero;
