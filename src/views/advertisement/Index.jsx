import React from "react";
import PromoteCoin from "../../components/advertise/promoteCoin";
import Order from "../../components/advertise/order";
import AdvertiseAccordion from "../../components/AdvertiseAccordion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Index() {
  return (
    <>
      <ToastContainer position="top-right" />
      <div className="flex flex-col gap-8 mx-auto my-16 font-archivo w-full max-w-[1440px]  2xl:gap-24 xl:flex-row">
        <section className="flex flex-col w-full text-start gap-3 px-2 xl:px-0">
          <PromoteCoin />
          <AdvertiseAccordion />
          <div>
            <section className="flex flex-col items-center w-full xl:flex-row ">
              <div className="flex w-full px-5 py-6 bg-[#3D236B] xl:w-1/3">
                <div className="flex flex-row items-center justify-between w-full gap-1 xl:flex-col xl:pl-4">
                  <span className="text-base font-medium text-white">
                    3 + Days
                  </span>
                  <span className="text-xl font-bold text-white">10% Off</span>
                </div>
              </div>
              <div className="flex px-5 xl:px-10 py-6 border-primary border-opacity-30 border-t-0 xl:border-b-0 border-l-0 border-r-0 xl:border-r-[0.5px] border-[0.5px] bg-secondary bg-opacity-30 xl:w-1/3 w-full">
                <div className="flex flex-row items-center justify-between w-full gap-1 xl:flex-col xl:pl-4">
                  <span className="text-base font-medium text-white">
                    7 + Days
                  </span>
                  <span className="text-xl font-bold text-white">15% Off</span>
                </div>
              </div>
              <div className="flex w-full px-5 py-6 xl:px-3 bg-secondary bg-opacity-30 xl:w-1/3">
                <div className="flex flex-row items-center justify-between w-full gap-1 xl:flex-col xl:px-4">
                  <span className="text-base font-medium text-white">
                    14 + Days
                  </span>
                  <span className="text-xl font-bold text-white">20% Off</span>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="w-full text-start px-2 xl:w-3/5 xl:px-0">
          <Order />
        </section>
      </div>
    </>
  );
}

export default Index;
