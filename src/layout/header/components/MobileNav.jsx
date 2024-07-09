import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
// import searchIcon from "../../../assets/icons/search-icon.png";
import rightFillIcon from "../../../assets/icons/right-fill-arrow.png";
import simile from "../../../assets/icons/simile-icon.png";
import Badge from "../../../components/badge/Badge";
// import Search from "./Search";
import useOutsideClick from "../../../hooks/useOutsideClick";

const MobileNav = ({ isOpen, setIsOpen }) => {
  const navRef = useRef();
  const handleClose = () => setIsOpen(false);

  useOutsideClick(navRef, () => {
    if (isOpen) handleClose();
  });

  return (
    <div
      ref={navRef}
      className={`fixed top-0 right-0 h-full px-2 bg-[#1a1a1a] text-white z-50 w-3/4 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-xl`}
    >
      <button onClick={handleClose} className="p-4">
        <FiX className="text-white text-2xl" />
      </button>
      <div className="flex flex-col items-center mt-10">
        {/* <Search className="bg-primary" /> */}
        <div className="flex flex-col items-center gap-6 mt-5">
          <Link
            to="new-coins"
            onClick={handleClose} // Close the navbar on click
            className="hover:text-gray-300 transition-colors duration-200"
          >
            New Coins
          </Link>
          <Link
            to="play"
            onClick={handleClose} // Close the navbar on click
            className="text-sm flex items-center gap-2 hover:text-gray-300 transition-colors duration-200"
          >
            <img
              src={rightFillIcon}
              alt="Right Fill Icon"
              className="w-5 h-5"
            />
            Play WOTF
          </Link>
          <Link to="/advertisement">
            <div className="relative text-white">
              <a>Advertise</a>
              <div className="absolute top-0 right-0 -mt-3 -mr-5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="w-6 h-6 text-yellow-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path>
                </svg>
              </div>
            </div>
          </Link>
          <Link
            to="add-coins"
            onClick={handleClose} // Close the navbar on click
            className="text-sm flex items-center gap-2 hover:text-gray-300 transition-colors duration-200"
          >
            <Badge className="flex items-center justify-center gap-2">
              <img src={simile} alt="Simile Icon" className="w-5 h-5" />
              Add Coin
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
