import React, { useEffect, useState } from "react";
import Table from "../../../components/table/Table";
import {
  ColoredNumber,
  FormatMarketCap,
  IconText,
  formatDate,
} from "./utils/promoted";
import heartFill from "../../../assets/icons/heart-fill.png";
import Text from "../../../components/text/Text";
import Badge from "../../../components/badge/Badge";
import { columns, dummyData, smColumns } from "../../../utils/dummyData";
import glow from "../../../assets/glow/glow2.png";
import fire from "../../../assets/icons/fire.png";
import { useNavigate } from "react-router-dom";
import {
  useAddVoteMutation,
  useGetAllTimeBestQuery,
  useGetTodayBestQuery,
} from "../../../app/features/api";
import { toast } from "react-toastify";
import SideTable from "../../../components/smaillTable/SideTable";
import { BasicTab } from "../../../components/smaillTable/BasicTab";
import DropDown from "./DropDown";

const BestRecords = () => {
  const [currentData, setCurrentData] = useState([]);
  const [votingStatus, setVotingStatus] = useState({});
  const [active, setActive] = useState("today"); // Track which button is active
  const [addVoteMutation, { isLoading: isVoting }] = useAddVoteMutation();
  const [originalData, setOriginalData] = useState(null);
  const {
    data: todayBest,
    error: todayBestError,
    isLoading: todayBestLoading,
    refetch: todayBestRefetch,
    isFetching: todayBestFetching,
  } = useGetTodayBestQuery();
  const {
    data: allTimeBest,
    error: allTimeBestError,
    isLoading: allTimeBestLoading,
    refetch: allTimeBestRefetch,
    isFetching: allTimeBestFetching,
  } = useGetAllTimeBestQuery();

  useEffect(() => {
    if (todayBest && !todayBestError) {
      setCurrentData(todayBest);
      setOriginalData(todayBest);
    }
  }, [todayBest, todayBestError]); // Fetch Today's Best on mount

  const handleFetchTodayBest = () => {
    if (todayBest && !todayBestError) {
      setCurrentData(todayBest);
      setOriginalData(todayBest);
      setActive("today"); // Set active state
    } else if (todayBestError) {
      console.error("Error fetching Today Best:", todayBestError);
    }
  };

  const handleFetchAllTimeBest = () => {
    if (allTimeBest && !allTimeBestError) {
      setCurrentData(allTimeBest);
      setOriginalData(allTimeBest);
      setActive("allTime"); // Set active state
    } else if (allTimeBestError) {
      console.error("Error fetching All Time Best:", allTimeBestError);
    }
  };

  const buttonClass = (button) => {
    return `font-[700] text-white text-[14px] md:text-[16px] px-3 md:px-3 py-1 rounded-md cursor-pointer ${
      active === button ? "bg-[#ad00ff]" : "border-border-mainBorder border"
    }`;
  };

  const handleVote = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (!votingStatus[id]) {
      setVotingStatus((prev) => ({ ...prev, [id]: true }));

      addVoteMutation({ id })
        .unwrap()
        .then((data) => {
          toast.success("Vote added successfully", {
            position: "top-center",
          });
          todayBestRefetch();
          allTimeBestRefetch();
        })
        .catch((error) => {
          console.error("Failed to add vote:", error);
          toast.error(error?.data?.message || "Error voting", {
            position: "top-center",
          });
        })
        .finally(() => {
          setVotingStatus((prev) => ({ ...prev, [id]: false }));
        });
    }
  };
  const HandleCategory = (name) => {
    if (name == "all") {
      setCurrentData(originalData);
    } else {
      const filteredData = originalData?.coins.filter(
        (item) => item.category_name === name
      );
      setCurrentData({ coins: filteredData });
    }
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between gap-5 ">
      <div className="my-10 w-[100%] lg:w-[75%] h-full relative">
        {/* <img
        src={glow}
        alt="Glow"
        className="w-auto absolute left-50 bottom-50 z-[-111] transform -translate-x-1/2 -translate-y-1/2"
      /> */}
        <Table
          header={
            <div className=" mt-10 text-start lg:mx-10 font-bold text-sm ">
              <span className="font-[700] text-[20px] md:text-[25px] text-white my-3">
                Market Coins
              </span>
              <span className="text-[14px] leading-[1]  text-[#9ea0ad] block mt-1 mb-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>

              <div className=" flex items-center gap-2 md:gap-3 mb-10">
                <DropDown onClick={HandleCategory} />
                <div className="flex">
                  <span
                    className={buttonClass("today")}
                    onClick={handleFetchTodayBest}
                  >
                    Today's Best
                  </span>
                  <span
                    className={buttonClass("allTime")}
                    onClick={handleFetchAllTimeBest}
                  >
                    All Time Best
                  </span>
                </div>
              </div>
            </div>
          }
          coins={currentData?.coins}
          pageSize={10}
          showPagination={true}
          handleVote={handleVote}
          votingStatus={votingStatus}
          promoted={true}
        />
      </div>
      <div className="my-10 lg:w-[25%] md:min-w-[400px] w-[100%]">
        <BasicTab />
        {/* <SideTable
          coins={currentData?.coins}
          pageSize={10}
          showPagination={true}
          handleVote={handleVote}
          votingStatus={votingStatus}
          promoted={true}
        /> */}
      </div>
    </div>
  );
};

export default BestRecords;
