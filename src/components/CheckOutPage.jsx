import React from "react";
import CheckoutOrder from "./CheckoutOrder";

function CheckOutPage() {
  return (
    <div>
      <section className="flex flex-col gap-10 mx-auto my-16 font-archivo 2xl:max-w-screen-2xl xl:max-w-7xl text-white xl:flex-row xl:gap-28 px-7 xl:px-0">
        <section>
          <section className="flex flex-col gap-10 font-archivo">
            <h1 className="text-2xl font-bold text-white ">Order Lookup</h1>
            <div className="flex items-center gap-5">
              <input
                type="text"
                disabled
                className=" py-2.5 px-8 bg-secondary bg-opacity-30 text-white text-opacity-50 font-light text-base w-full xl:w-[490px]"
              />
              <button
                type="button"
                className="flex items-center justify-center text-center bg-gradient-to-r from-[#7e58fd] to-[#9655ff] text-white h-10 self-center  hover:bg-gradient-to-r hover:from-#A575FE] hover:to-[#B771FF] transition-all w-[130px]"
              >
                Lookup
              </button>
            </div>
          </section>
          <section className="bg-secondary my-5 bg-opacity-30 px-10 py-8 flex items-center justify-between sm:gap-32 w-full xl:w-[310px]">
            <div className="flex flex-col gap-6">
              <span className="text-lg font-medium text-whitefont-archivo leading-20px">
                Status
              </span>
              <span className="text-xl font-bold capitalize text-accent">
                waiting
              </span>
            </div>
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "100%",
                minWidth: "40px",
                height: "100%",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative",
                maxWidth: "40px",
              }}
            >
              <img
                alt=""
                src="https://coinhunt.cc/assets/misc/timer.svg"
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
              />
            </span>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white ">
              Payment Information
            </h2>
            <div className="border-[0.5px] border-border border-b-0 flex flex-col">
              <div className=" px-8 py-5 flex items-center justify-between border-b-[0.5px] border-border">
                <span className="text-lg font-medium text-white leading-20px">
                  Currency
                </span>
                <span className="text-base font-medium uppercase text-accent leading-20px">
                  eth
                </span>
              </div>
              <div className=" px-8 py-5 flex items-center justify-between border-b-[0.5px] border-border">
                <span className="text-lg font-medium text-white leading-20px">
                  Total
                </span>
                <span className="text-base font-medium text-accent leading-20px">
                  0.00467342
                </span>
              </div>
              <div className=" px-8 py-5 flex items-center justify-between border-b-[0.5px] border-border">
                <span className="text-lg font-medium text-white leading-20px">
                  Received
                </span>
                <span className="text-base font-medium text-accent leading-20px">
                  0
                </span>
              </div>
              <div className=" px-8 py-5 flex items-center justify-between border-b-[0.5px] border-border">
                <span className="text-lg font-medium text-white leading-20px">
                  Remaining
                </span>
                <span className="text-base font-medium text-accent leading-20px">
                  0.00467342
                </span>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full xl:w-[500px]">
          <CheckoutOrder />
        </section>
      </section>
    </div>
  );
}

export default CheckOutPage;
