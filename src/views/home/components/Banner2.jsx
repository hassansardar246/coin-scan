import React from "react";
import banner2 from "../../../assets/banners/banner2.png";

const Banner2 = ({ image, link }) => {
  const displayImage = image ? image : banner2;
  return (
    <div className="my-10">
      <a target="_blank" href={link}>
        <img
          src={displayImage}
          alt="Banner 2"
          className="w-full max-h-32 object-cover" // Tailwind classes for width, max-height, and cover behavior
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // Prevents infinite callback loop
            currentTarget.src = banner2; // Fallback image if the primary image fails to load
          }}
        />
      </a>
    </div>
  );
};

export default Banner2;
