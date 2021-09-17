import React from "react";
import Logo from "../assets/image/CatwikiLogo.svg";

const Header = () => {
  return (
    <header className="my-9">
      <img src={Logo} alt="logo" />
    </header>
  );
};

export default Header;
