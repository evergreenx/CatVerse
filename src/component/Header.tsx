import React from "react";
import Logo from "../assets/image/CatwikiLogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="my-9 mx-10">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
