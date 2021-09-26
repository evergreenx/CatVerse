import React from "react";
import Logo2 from "../assets/image/Logo2.svg";

const Hero = () => {
  return (
    <div className="bg-black rounded-t-3xl lg:p-32  p-10 hero mx-10 ">
      <img src={Logo2} alt="logo" className="w-72"  width="100"
              height="100" />

      <h3 className="text-white font-semibold  lg:text-2xl mb-12 w-56">
        Get to know more <br/> about your cat breed
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
