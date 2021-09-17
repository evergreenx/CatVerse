import React from "react";
import Logo2 from "../assets/image/Logo2.svg";

const Footer = () => {
  return (
    <footer className="bg-black rounded-t-3xl lg:px-32  p-10 flex justify-between ">
      <img src={Logo2} alt="logo" />

      <div className="text-lg text-white font-bold">
        &#169;
        <a href="https://idoevergreen.tech">created by Ido evergreen</a>
      </div>
    </footer>
  );
};

export default Footer;
