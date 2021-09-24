import React from "react";
import Logo2 from "../assets/image/Logo2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black rounded-t-3xl lg:px-32  p-10 flex flex-col lg:flex-row justify-between ">
      <Link to="/">
        <img src={Logo2} alt="logo" />
      </Link>
      <div className="text-lg text-white font-bold">
        &#169;
        <a href="https://idoevergreen.tech">created by Ido evergreen</a>
      </div>
    </footer>
  );
};

export default Footer;
