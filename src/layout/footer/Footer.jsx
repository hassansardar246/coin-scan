import React from "react";
// import Logo from "../header/components/Logo";
import { Link } from "react-router-dom";
import telegramoriginal from "../../assets/socials/telegram-original.png";
import X from "../../assets/socials/X.png";
import logo from "../../assets/logo/CS.png";

const links = [
  { id: 1, name: "DYOR", path: "https://coinscan.cc/public/dyor.php" },
  {
    id: 2,
    name: "Disclaimer",
    path: "https://coinscan.cc/public/disclaimer.php",
  },
  { id: 3, name: "User Terms", path: "https://coinscan.cc/public/terms.php" },
  {
    id: 4,
    name: "Privacy Policy",
    path: "https://coinscan.cc/public/privacy.php",
  },
];

const images = [
  { src: X, url: "https://x.com/coinscanCC" },
  { src: telegramoriginal, url: "https://t.me/coinscanCCofficial" },
];

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <>
      <hr className="border-t border-[#ad00ff38] mx-6 md:mx-10 " />

      <div className="bg-[rgb(25,0,36)] py-5">
        <div className="flex flex-col md:flex-row justify-around items-center px-6 mt-0 md:mt-5">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="w-[176px] h-[39px]" />
          </Link>
          {/* <Logo /> */}
          <div className="flex flex-row md:flex-row gap-5 md:gap-10 text-text-light text-xs md:text-sm mt-5 md:mt-0 ml-0 md:ml-[-5%]">
            {links?.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="mb-2 md:mb-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-3 mt-5 md:mt-0">
            {images.map((image, index) => (
              <a
                key={index}
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image.src} alt="Social Links" width={25} />
              </a>
            ))}
          </div>
        </div>
        <hr className="border-t border-[#ad00ff38] mx-6 md:mx-10 mt-5" />{" "}
        {/* Divider */}
        <div className="text-text-light text-center px-6 pt-5">
          &copy; {currentYear} <a href="https://coinscan.cc/">Coinscan.cc</a>{" "}
          All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
