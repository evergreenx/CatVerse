import React from "react";
import LoaderImage from "../assets/image/loader.gif";

const LoaderBar = () => {
  return (
    <div className="flex flex-col top-0 left-0 right-0 overflow-hidden absolute  items-center justify-center w-full  h-full">
      <img src={LoaderImage} alt="loader" className="animate-pulse w-20" />

      <h2 className="block font-extrabold animate-pulse">Loading Data .....</h2>
    </div>
  );
};

export default LoaderBar;
