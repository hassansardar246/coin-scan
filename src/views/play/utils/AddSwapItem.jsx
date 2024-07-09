import React from "react";
import "./styles/addSwap.css";
import Badge from "../../../components/badge/Badge";

const AddSwapItem = ({
  image,
  platform,
  recommended,
  add,
  link,
  buttonText,
}) => {
  return (
    <div className="bg-secondary border-b border-[rgb(22,23,30)] flex justify-between items-center rounded-lg my-3 py-4 px-5">
      <div className="flex items-center space-x-1">
        <img src={image} alt={platform} className=" h-12 w-12 mr-2 md:mr-5" />
        <div className="flex flex-col justify-center items-start text-left">
          <p className="text-text-light font-bold  text-lg mb-2">
            {platform}
          </p>
          <div className="flex gap-1 flex-wrap">
            {add && (
              <span
                className={` bg-[#b700ff48] text-text-adColor rounded-lg py-1 px-2 text-sm`}
              >
                ad
              </span>
            )}{" "}
            {recommended && (
              <span
                className={` bg-recoBg text-text-recoColor rounded-lg py-1 px-2 text-xs md:text-sm`}
              >
                recommended
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <a
          href={link}
          target="_blank"
          className=" hover:opacity-75 text-text-light font-bold coindetilasbutton md:px-8 px-5 rounded-lg transition-opacity duration-150 text-[16px] md:text-[17px] button-gradient "
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default AddSwapItem;
