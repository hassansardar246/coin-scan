import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import useDateStore from "./Store";

function CheckoutOrder() {
  const { selectedDates, subTotal, discount, total, toggleDate, deleteItem } =
    useDateStore();

  const types = [
    {
      type: "VIP Spot",
      price: "15$/Day",
      value: "VIP",
      p_value: "15",
    },
    {
      type: "Promoted Spot",
      price: "25$/Day",
      value: "Promoted",
      p_value: "25",
    },
    {
      type: "Search Bar Ads",
      price: "35$/Day",
      value: "Search Bar Ads",
      p_value: "35",
      short_title: null,
      Decription: null,
      redirect_url: null,
    },
    {
      type: "Basic Banner Ads",
      price: "35$/Day",
      value: "Basic Banner Ads",
      p_value: "50",
      full_image: null,
      small_image: null,
      redirect_url: null,
    },
    {
      type: "Premium Banner Ads",
      price: "100$/Day",
      value: "Premium Banner",
      p_value: "100",
      full_image: null,
      small_image: null,
      redirect_url: null,
    },
  ];

  const style = {
    boxSizing: "border-box",
    display: "inline-block",
    overflow: "hidden",
    width: "initial",
    height: "initial",
    background: "none",
    opacity: 1,
    border: "0px",
    margin: "0px",
    padding: "0px",
    position: "relative",
    maxWidth: "100%",
  };

  const style2 = {
    boxSizing: "border-box",
    display: "block",
    width: "initial",
    height: "initial",
    background: "none",
    opacity: 1,
    border: "0px",
    margin: "0px",
    padding: "0px",
    maxWidth: "100%",
  };

  const style3 = {
    display: "block",
    maxWidth: "100%",
    width: "initial",
    height: "initial",
    background: "none",
    opacity: 1,
    border: "0px",
    margin: "0px",
    padding: "0px",
  };
  const getSelectedItemCount = (typeValue) => {
    return selectedDates.filter((date) => date.type === typeValue).length;
  };
  return (
    <>
      <section className="flex w-full flex-col gap-10 mb-10">
        <h2 className="text-3xl font-bold text-white">Your Order</h2>
        <div className="border-border border-[0.5px] py-3">
          <header className="flex justify-between items-start text-white text-base font-medium font-archivo border-border border-b-[0.5px] pb-5 mb-3 px-8">
            <span>DATE</span>
            <span className="ml-5 text-white">TYPE</span>
            <span className="mr-10 text-white">PRICE</span>
          </header>
          <main className="flex flex-col text-white gap-3 px-3">
            {types.map((type, i) => {
              const selectedDate = selectedDates.find(
                (date) => date.type === type.value
              );
              const selectedItemCount = getSelectedItemCount(type.value);

              return (
                <div
                  key={i}
                  className="flex items-start justify-between w-full md:p-4 text-sm font-medium bg-secondary bg-opacity-30  xl:text-base"
                >
                  <span className="">{type.type}</span>
                  <div className="flex items-center gap-3">
                    <span>{selectedItemCount}</span>
                    {selectedDate && (
                      <div className="flex items-center justify-center w-6 h-6 rounded-full cursor-pointer bg-secondary bg-opacity-20">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 352 512"
                          className="bg-secondary"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </main>
          <footer className="flex flex-col pb-4">
            <section className="flex items-center justify-between pt-4 ">
              <div></div>
              <div className="flex gap-24 pr-16 ">
                <span className="text-base font-medium text-white">Total</span>
                <span className="text-base font-medium uppercase">
                  {total} $
                </span>
              </div>
            </section>
          </footer>
        </div>
      </section>
      {/* <section className="flex flex-col items-center justify-center w-full gap-2">
        <button
          type="submit"
          className="flex items-center justify-center text-center bg-gradient-to-r from-[#7e58fd] to-[#9655ff] text-primary h-10 self-center  hover:bg-gradient-to-r hover:from-#A575FE] hover:to-[#B771FF] transition-all px-3"
        >
          <div className="flex items-center gap-2 min-w-[150px]">
            <span style={style}>
              <IoCartOutline />
            </span>
            <span>Reserve &amp; Pay</span>
          </div>
        </button>
      </section> */}
    </>
  );
}

export default CheckoutOrder;
