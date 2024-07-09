import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGetCategoriesQuery } from "../../../app/features/api";
const DropDown = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: categoriesData, isLoading: categoryLoading } =
    useGetCategoriesQuery();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className=" inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="font-[700] text-white flex items-center text-[16px] md:text-[16px] border-dark bg-black border border-[.5] px-3 md:px-3 py-1 rounded-md"
      >
        Category <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <div className="origin-top-left z-999  absolute left-0 lg:left-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {categoryLoading && <p>Loading...</p>}
          <div
            onClick={() => {
              onClick("all");
              setIsOpen(false);
            }}
            className="block px-4 cursor-pointer hover:bg-slate-500 hover:text-white py-2 text-sm text-gray-700"
          >
            All
          </div>
          {categoriesData?.categories?.map((category) => (
            <div
              key={category.id}
              onClick={() => {
                onClick(category.name);
                setIsOpen(false);
              }}
              className="block px-4 cursor-pointer hover:bg-slate-500 hover:text-white py-2 text-sm text-gray-700"
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
