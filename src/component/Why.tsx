import React from "react";
import CatImg1 from "../assets/image/image 1.png";
import CatImg2 from "../assets/image/image 2.png";
import CatImg3 from "../assets/image/image 3.png";

const Why = () => {
  return (
    <div className="bg-white lg:p-32  p-10 ">
      <div className="flex justify-between lg:flex-row flex-col ">
        <div className="w-96 mt-20">
          <hr className="w-16 border-2 border-basic-text bg-basic-text mb-4"></hr>
          <h3 className="mb-8 text-basic-text text-5xl font-bold leading-10 ">
            Why should you have a cat?
          </h3>

          <p className="text-basic-text mb-16 ">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>

          <a href="#/" className="font-bold text-lg mt-12">
            Read more &#8594;
          </a>
        </div>

        <div className="flex lg:flex-row flex-row lg:mt-0 mt-10">
          <div className="mx-6">
            <img src={CatImg2} alt="image2" />

            <img src={CatImg1} alt="image1" className="lg:ml-14 mt-7" />
          </div>

          <div>
            <img src={CatImg3} alt="image3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
