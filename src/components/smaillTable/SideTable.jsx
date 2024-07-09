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
import { Link, useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const SideTable = ({
  header,
  tab,
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
          <tr key={`spacer-${index}`} className="h-2 md:h-4"></tr>
          <tr
            onClick={() => navigate(`/play?id=${item?.id}`)}
            className="cursor-pointer hover:opacity-70 bg[#00000061] "
          >
            <td className="text-text-light text-xs md:text-sm max-w-40 min-w-40  py-2 ">
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

            <td className="text-text-light text-sm min-w-[20px]">
              {item?.date}
            </td>
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
                    style={
                      column?.maxWidth ? { maxWidth: column?.maxWidth } : {}
                    }
                    className={`text-start ps-[50px] text-sm font-extrabold uppercase text-text-tableHeader ${
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
        {tab === "New Listing" || tab == "Upcoming Presale" ? (
          <div className="px-3">
            <Link
              to={tab == "New Listing" ? "/new-listing" : "/upcoming-paresale"}
              className="block text-center text-dark py-3 bg-slate-200 w-full"
            >
              Load More
            </Link>
          </div>
        ) : null}
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

SideTable.propTypes = {
  header: PropTypes.node,
  coins: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  showPagination: PropTypes.bool,
  handleVote: PropTypes.func.isRequired,
  votingStatus: PropTypes.object.isRequired,
};

export default SideTable;

export const columns = [
  { key: "coin_name", title: "Coin Name", sortable: false, maxWidth: "20px" },
  {
    key: "date",
    title: "Age",
    sortable: false,
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
