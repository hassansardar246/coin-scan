import React from "react";
import Text from "../../../components/text/Text";

const PriceDetails = ({ details }) => {
  return (
    <div className="bg-secondary rounded-lg shadow border-b border-[rgb(22,23,30)] py-2 px-0 md:px-5">
      <div className="flex flex-row justify-between items-center gap-2 flex-wrap">
        <div className="flex-1 flex flex-col items-center px-4 py-3 border-r-0 md:border-r border-[#6C6C6C]">
          <div className="text-lg ">
            <span className="text-white text-sm">
              ${Number(details?.price) ? Number(details?.price).toFixed(12) : 0}
            </span>
            {/* <span className="text-sm text-green-500 ml-2">+1235%</span> */}
          </div>
          <Text className="text-sm text-[#6C6C6C] mt-2">Price</Text>
        </div>
        <div className="flex-1 flex flex-col items-center px-4 py-3 border-r-0 md:border-r border-[#6C6C6C]">
          <div className=" text-white text-center text-sm">
            ${Number(details?.market_cap || 0)}
          </div>
          <Text className="text-sm text-[#6C6C6C] mt-2 text-center">
            Market Cap
          </Text>
        </div>
        <div className="md:flex flex-1 flex-col items-center mx-4 py-3  hidden text-sm mt-4 md:mt-0">
          <div className="text-sm text-white">2 Months</div>
          <Text className="text-sm text-[#6C6C6C] mt-2">Launch Date</Text>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center mx-4 py-3  md:hidden border-[#6C6C6C] text-sm mt-4 md:mt-0">
        <div className="text-lg  text-white">2 Month</div>
        <Text className="text-sm text-[#6C6C6C] mt-2">Launch Date</Text>
      </div>
    </div>
  );
};

export default PriceDetails;
