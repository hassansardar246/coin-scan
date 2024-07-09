import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import {
  ColoredNumber,
  FormatMarketCap,
  IconText,
} from "../../../views/home/components/utils/promoted";
import Text from "../components/text/Text";
import heartFill from "../../../assets/icons/heart-fill.png";
import fire from "../../../assets/icons/fire.png";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

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

  const currentColumns = size.width <= 786 ? smColumns : columns;

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

      if (!item) {
        console.error("Undefined item? at index:", index);
        return null;
      }

      return (
        <React.Fragment key={index}>
          <tr key={`spacer-${index}`} className="h-2 md:h-4"></tr>
          <tr
            onClick={() => navigate(`/play?id=${item?.id}`)}
            className="cursor-pointer hover:opacity-70 bg[#00000061] "
          >
            {size.width <= 786 ? (
              <>
                <td
                  className={`text-text-light py-4 text-sm ${
                    index === 0 ? "pt-5" : ""
                  }`}
                >
                  {promoted && item?.promoted ? (
                    <img
                      src={fire}
                      alt="Promoted"
                      className="rounded-full"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    />
                  ) : (
                    rank
                  )}
                </td>
                <td
                  className={`text-text-light text-sm pr-5 md:pr-0 ${
                    index === 0 ? "" : ""
                  }`}
                >
                  <IconText
                    icon={item?.coin_picture || heartFill}
                    coin_symbol={item?.coin_symbol}
                    text={
                      item?.coin_name?.toLowerCase()?.substring(0, 7) || "Name"
                    }
                    // rank={rank}
                    promoted={promoted ? true : false}
                    marketCap={item?.coin_market_cap_link}
                    gecko={item?.coin_gecko_link}
                  />
                </td>
                {index === 0 ? (
                  <tr
                    key={`spacer-${index}`}
                    className={index === visibleRows.length - 1 ? "h-2" : "h-4"}
                  ></tr>
                ) : null}

                <td
                  className={`text-text-light text-xs md:text-sm mi min-w-24 border-2 border-text-primary flex items-center justify-center gap-1 rounded-md px-2 mx-2 py-2 w-16 mt-[7px]`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents navigating when clicking on the vote section
                    handleVote(e, item?.id);
                  }}
                >
                  <img src={heartFill} alt="Vote" />
                  {votingStatus[item?.id] ? (
                    <Text>Voting..</Text>
                  ) : (
                    <Text>
                      {item?.total_votes > 99999
                        ? item?.total_votes + ".."
                        : item?.total_votes}
                    </Text>
                  )}
                </td>
                <td
                  className={`text-text-info text-sm ${
                    index === 0 ? "pt-5" : ""
                  }`}
                >
                  {item?.category_name || "Category"}
                </td>
                <td
                  className={`text-text-light max-w-40 min-w-40 text-sm ${
                    index === 0 ? "pt-5" : ""
                  }`}
                >
                  <IconText
                    icon={item?.chain_icon || heartFill}
                    text={item?.chain_name || "Name"}
                  />
                </td>

                <td
                  className={`text-text-light text-sm max-w-40 min-w-40 ${
                    index === 0 ? "pt-5" : ""
                  }`}
                >
                  <Text className="text-text-secondary mr-4 md:mr-6">
                    {item?.date?.length > 10
                      ? item?.date?.substring(0, 11) + ""
                      : item?.date?.substring(0, 11)}
                  </Text>
                </td>
              </>
            ) : (
              <>
                <td className={`text-text-light text-sm `}>
                  {promoted && item?.promoted ? (
                    <img
                      src={fire}
                      alt="Promoted"
                      className="w-6 h-6 mr-2 rounded-full"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    />
                  ) : (
                    rank
                  )}
                </td>
                <td className="text-text-light text-xs md:text-sm max-w-40 min-w-40 p-2 px-5 ">
                  <IconText
                    icon={item?.coin_picture || heartFill}
                    coin_symbol={item?.coin_symbol}
                    text={item?.coin_name || "Name"}
                    promoted={true}
                    marketCap={item?.coin_market_cap_link}
                    gecko={item?.coin_gecko_link}
                  />
                </td>
                <td className="text-text-light text-sm px-[15px] min-w-[80px] flex justify-center">
                  <IconText
                    icon={item?.chain_icon || heartFill}
                    text={item?.chain_abbreviation || "Name"}
                    promoted={true}
                  />
                </td>
                <td className="text-text-info text-sm px-[15px] min-w-[80px]">
                  {item?.category_name || "Category"}
                </td>

                <td className="text-text-light text-sm min-w-[20px]">
                  <Text className="text-text-secondary mr-4 md:mr-6">
                    {item?.date?.length > 10
                      ? item?.date?.substring(0, 11) + ""
                      : item?.date?.substring(0, 11)}
                  </Text>
                </td>
                {/* <tr key={`spacer-${index}`} className="h-0 md:h-4"></tr> */}

                <td
                  className="text-text-light text-sm flex items-center justify-center min-w-[50px]"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents navigating when clicking on the vote section
                    handleVote(e, item?.id);
                  }}
                >
                  <div className="text-text-light text-sm min-w-[70px] mt-[7px] border-2 border-text-primary flex items-center justify-center gap-1 rounded-md px-2 py-2 w-32">
                    <img src={heartFill} alt="Vote" />
                    {votingStatus[item?.id] ? (
                      <Text>Voting..</Text>
                    ) : (
                      <Text>{item?.total_votes || 0}</Text>
                    )}
                  </div>
                </td>
              </>
            )}
          </tr>
          <tr
            key={`spacer-${index}`}
            className="h-2 md:h-4 border-b-2 border-footer"
          ></tr>
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <div className="bg-secondary rounded-[5px] overflow-auto pr-2">
        {header}
        <div className="table-wrapper">
          <table className="w-full">
            <thead>
              <tr>
                {currentColumns.map((column, index) => (
                  <th
                    key={column.key}
                    onClick={() => column.sortable && requestSort(column.key)}
                    className={`text-center text-sm font-extrabold uppercase text-text-tableHeader ${
                      index === 0
                        ? "sticky-column first-sticky"
                        : index === 1
                        ? "sticky-column second-sticky"
                        : ""
                    } ${column.sortable ? "cursor-pointer" : ""}`}
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
        <div className="pagination-container flex justify-end">
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
  { key: "rank", title: "Rank", sortable: false, maxWidth: "60px" },
  { key: "coin_name", title: "Coin", sortable: false, maxWidth: "50px" },
  {
    key: "chain_name",
    title: "Blockchain",
    sortable: false,
    maxWidth: "40px",
  },
  {
    key: "category_name",
    title: "Category",
    sortable: false,
    maxWidth: "80px",
  },
  {
    key: "launch_date",
    title: "Age",
    icon: "↓",
    sortable: false,
    maxWidth: "50px",
  },
  {
    key: "total_votes",
    title: "Votes",
    icon: "↓",
    sortable: true,
    maxWidth: "80px",
  },
];

export const smColumns = [
  { key: "rank", title: "Rank", sortable: false },
  { key: "coin_name", title: "Coin", sortable: false },
  { key: "total_votes", title: "Votes", icon: "↓", sortable: true },
  { key: "category_name", title: "Category", sortable: false },
  { key: "chain_name", title: "Blockchain", sortable: false },
  { key: "launch_date", title: "Launch Date", icon: "↓", sortable: false },
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
