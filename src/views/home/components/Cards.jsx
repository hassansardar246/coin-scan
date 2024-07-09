import React from "react";
import Text from "../../../components/text/Text";
import rightIcon from "../../../assets/icons/right-arrow.png";
import topTrandingIcon from "../../../assets/icons/toptrending.png";
import newListingIcon from "../../../assets/icons/newlisting.png";
import upcomingPresaleIcon from "../../../assets/icons/upcomingpresale.png";
import defaultIcon1 from "../../../assets/icons/default-icon1.png";
import { Link } from "react-router-dom";
import { featuredData } from "../../../utils/dummyData";
import "../../../../src/generic.css";

const Cards = ({ newListing, topTrending, presaleListing }) => {
  return (
    <div className="flex  justify-between flex-wrap gap-10 my-10">
      <CardComponent
        title="Top Trending"
        data={topTrending}
        icon={topTrandingIcon}
      />
      <CardComponent
        title="New Listing"
        data={newListing}
        icon={newListingIcon}
      />
      <CardComponent
        title="Upcoming Presale"
        data={presaleListing}
        icon={upcomingPresaleIcon}
      />
    </div>
  );
};

export default Cards;

const CardComponent = ({ title, data, icon }) => {
  return (
    <div className="bg-secondary border-2 p-2 border-footer flex-grow">
      <div className="flex justify-between items-center border-footer border-b-2 px-3">
        <div className="flex">
          <img src={icon} alt={`${title} icon`} className="w-auto h-6 mt-1" />
          <Text className="text-text-primary text-[17px] font-bold pb-4 pt-1 cards-heading-alignments uppercase">
            {title}
          </Text>
        </div>
        {title === "New Listing" && (
          <Link to="/new-listing">
            <button className="text-text-primary pb-3 text-[17px] inline-flex">
              More{" "}
              <span>
                <img src={rightIcon} alt="" className="w-auto h-3 mt-2 ml-1" />
              </span>
            </button>
          </Link>
        )}

        {title === "Upcoming Presale" && (
          <Link to="/pre-sale">
            <button className="text-text-primary pb-3 text-[17px] inline-flex">
              More{" "}
              <span>
                <img src={rightIcon} alt="" className="w-auto h-3 mt-2 ml-1" />
              </span>
            </button>
          </Link>
        )}
      </div>
      {data?.length > 0 ? (
        data?.slice(0, 3)?.map((item) => (
          <Link
            to={`play?id=${item.id}`}
            key={item.coin_name}
            className="flex justify-between items-center border-b-2 border-footer p-2 py-5 "
          >
            <div className="flex items-center gap-2">
              <img
                src={item?.coin_picture}
                alt=""
                className="w-12 h-12 mr-0 md:mr-5 rounded-full border p-1"
                style={{ borderColor: "rgb(27, 28, 36)" }}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = defaultIcon1;
                }}
              />
              <div>
                <Text className="text-text-light text-md">
                  {item?.coin_name?.substring(0, 8) + ".." || "N/A"}
                </Text>
                <Text className="text-text-secondary text-sm">
                  {item?.coin_symbol || "Sub"}
                </Text>
              </div>
            </div>
            <div className="flex">
              <Text className="text-text-secondary mr-4 md:mr-6">
                {item?.date?.length > 10
                  ? item?.date?.substring(0, 11) + ""
                  : item?.date?.substring(0, 11)}
              </Text>
              <img src={rightIcon} alt="" className="w-auto h-6" />
            </div>
          </Link>
        ))
      ) : (
        <div className="text-center text-white">Preparing data</div>
      )}
    </div>
  );
};
