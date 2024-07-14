import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import {
  ColoredNumber,
  FormatMarketCap,
  IconText,
} from "../../views/home/components/utils/promoted";
import Text from "../text/Text";
import heartFill from "../../assets/icons/heart-fill.png";
import fire from "../../assets/icons/fire.png";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
const Table = ({
  header,
  coins = [],
  pageSize,
  showPagination,
  handleVote,
  votingStatus,
  promoted,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "promoted",
    direction: "descending",
  });
  const navigate = useNavigate();
  const size = useWindowSize();

  const totalPages = Math.ceil(coins.length / pageSize);

  const startRow = (currentPage - 1) * pageSize;
  const endRow = startRow + pageSize;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentColumns = columns;
  console.log("currentColumns", votingStatus[133]);
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedCoins = [...coins].sort((a, b) => {
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    // Special case for date comparison
    if (sortConfig.key === "launch_date") {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    if (aValue < bValue) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const visibleRows = sortedCoins.slice(startRow, endRow);

  const getClassNamesFor = (name) => {
    if (!sortConfig) return;
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const BodyColumn = () => {
    return visibleRows.map((item, index) => {
      const rank = (index + 1 + startRow).toString().padStart(2, "0");
      console.log("item", item);

      if (!item) {
        console.error("Undefined item? at index:", index);
        return null;
      }
      function PriceDisplay({ item }) {
        const displayPrice =
          item?.coin_type === "presale" ? "__" : `$${item?.price || 0}`;

        return <div>{displayPrice}</div>;
      }

      return (
        <React.Fragment key={index}>
          {/* <tr key={`spacer-${index}`} className="h-2 md:h-4"></tr> */}
          <tr
            onClick={() => navigate(`/play?id=${item.id}/${item?.coin_name}`)}
            className="cursor-pointer hover:opacity-70 hover:bg-border-inputBorder "
          >
            <td
              className={`text-text-light text-sm flex w-full min-w-[50px] items-center justify-center gap-3`}
            >
              {promoted && item?.promoted ? (
                <FaStar className="w-5 h-5 fill-yellow-300" />
              ) : (
                <CiStar className="w-5 h-5" />
              )}
              {index + 1}
            </td>

            <td className="text-text-light text-xs max-w-60 min-w-[150px] md:text-sm p-2 px-0 ">
              <IconText
                icon={item?.coin_picture || heartFill}
                coin_symbol={item?.coin_symbol}
                text={item?.coin_name || "Name"}
                abtext={item?.chain_abbreviation || "Name"}
                promoted={true}
                marketCap={item?.coin_market_cap_link}
                gecko={item?.coin_gecko_link}
              />
            </td>
            <td className="text-text-light text-sm max-w-[120px] min-w-[120px]">
              <div className="w-full">
                {item?.price_change_24h == "" || item?.price_change_24h == 0 ? (
                  "__"
                ) : (
                  <ColoredNumber
                    number={parseInt(item?.price_change_24h) || 0}
                  />
                )}
              </div>
            </td>
            <td className="text-text-light text-sm max-w-[120px] min-w-[120px]">
              <div className="w-full">
                {item?.coin_type == "presale" ? (
                  "presale"
                ) : (
                  <FormatMarketCap value={item?.market_cap || 0} />
                )}
              </div>
            </td>
            <td className="text-text-light text-sm max-w-[120px] min-w-[120px]">
              <div className="w-full">
                {item?.coin_type == "presale" ? "presale" : item?.price || 0}
              </div>
            </td>
            <td
              className={`text-text-light text-sm max-w-40 min-w-40 ${
                index === 0 ? "pt-5" : ""
              }`}
            >
              {item?.launch_date == "" ? "__" : formatDate(item?.launch_date)}
            </td>
            <td className="text-text-light text-sm flex items-center justify-center min-w-[50px]">
              {votingStatus[item?.id] == false ? (
                <>
                  <div
                    className={`text-text-light text-sm min-w-[70px] mt-[7px] border-2  opacity-25 cursor-not-allowed flex items-center justify-center gap-1 rounded-md px-2 py-2 w-32`}
                  >
                    <img src={heartFill} alt="Vote" />
                    <Text>{item?.total_votes || 0}</Text>
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVote(e, item?.id);
                    }}
                    className={`text-text-light ${
                      votingStatus[item?.id] ? "" : ""
                    } text-sm min-w-[70px] mt-[7px] border-2 border-text-primary flex items-center justify-center gap-1 rounded-md px-2 py-2 w-32`}
                  >
                    <img src={heartFill} alt="Vote" />
                    {votingStatus[item?.id] ? (
                      <Text>Voting..</Text>
                    ) : (
                      <Text>{item?.total_votes || 0}</Text>
                    )}
                  </div>
                </>
              )}
            </td>
          </tr>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="h-auto">
      <div className="bg-secondary h-full rounded-[5px] overflow-auto pr-2">
        {header}
        <div className="table-wrapper">
          <table className="w-full">
            <thead>
              <tr>
                {currentColumns.map((column, index) => (
                  <th
                    key={column.key}
                    onClick={() => column.sortable && requestSort(column.key)}
                    style={
                      column?.maxWidth ? { maxWidth: column?.maxWidth } : {}
                    }
                    className={`${
                      index === 1 ? "text-start ps-10" : "text-center"
                    } text-sm font-extrabold uppercase text-text-tableHeader  ${
                      column.sortable ? "cursor-pointer" : ""
                    }`}
                  >
                    {column.title}
                    {column.sortable && (
                      <span className="ml-2 inline-block">
                        {sortConfig.key === column.key ? (
                          sortConfig.direction === "ascending" ? (
                            <FaSortUp />
                          ) : (
                            <FaSortDown />
                          )
                        ) : (
                          <FaSort />
                        )}
                      </span>
                    )}
                    <span className={getClassNamesFor(column.key)}></span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center pt-4">
              <BodyColumn />
            </tbody>
          </table>
        </div>
      </div>
      {showPagination && totalPages > 1 && (
        <div className="pagination-container flex justify-start">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  header: PropTypes.node,
  coins: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  showPagination: PropTypes.bool,
  handleVote: PropTypes.func.isRequired,
  votingStatus: PropTypes.object.isRequired,
};

export default Table;

export const columns = [
  { key: "1", title: "#", sortable: true, maxWidth: "60px" },
  { key: "coin_name", title: "Coin Name", sortable: false, maxWidth: "50px" },

  {
    key: "price_change_24h",
    title: "24H",
    icon: "↓",
    sortable: false,
    maxWidth: "80px",
  },
  {
    key: "market_cap",
    title: "Market Cap",
    icon: "↓",
    sortable: true,
    maxWidth: "110px",
  },
  {
    key: "price",
    title: "Price",
    icon: "↓",
    sortable: true,
    maxWidth: "80px",
  },
  {
    key: "launch_date",
    title: "Age",
    icon: "↓",
    sortable: true,
    maxWidth: "80px",
  },
  {
    key: "total_votes",
    title: "Votes",
    icon: "↓",
    sortable: true,
    maxWidth: "80px",
  },
];

// Update your formatDate function
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate - date;

  // Calculate years and months
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );

  // Format the result
  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
};
