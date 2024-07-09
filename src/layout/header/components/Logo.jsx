import React from "react";
import logo from "../../../assets/logo/CS.png";
import smLogo from "../../../assets/logo/CSicon.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Company Logo"
        className="hidden sm:block w-[176px] h-[39px]"
      />
      <img
        src={smLogo}
        alt="Company Logo"
        className="block sm:hidden h-[39px] w-[38px]"
      />
    </Link>
  );
};

export default Logo;
