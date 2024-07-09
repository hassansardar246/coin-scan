import React from "react";
import NewListingRecords from "./components/NewListingRecords";
import Partners from "../home/components/Partners";
import NewsLetter from "../home/components/NewsLetter";
import Banner from "../home/components/Banner";
import {
  useGetAdvertiseDesktopQuery,
  useGetNewListingQuery,
} from "../../app/features/api";
import { Helmet } from "react-helmet-async";
import ClubCard from "../home/components/ClubCard";

const NewListing = () => {
  const { data: newListing, refetch } = useGetNewListingQuery();
  console.log(newListing);

  const { data: desktop, isLoading } = useGetAdvertiseDesktopQuery();
  const coins = newListing?.coins;
  const banner1 = desktop?.advertise?.image;

  return (
    <>
      <Helmet>
        <title>CoinScan | Explore and Discover New Coins Today</title>
        <meta
          name="description"
          content="Explore the latest crypto coins, stay informed, and seize new investment opportunities. Engage in community voting to support your favorite projects."
        />
        <meta
          property="og:title"
          content="CoinScan | Explore and Discover New Coins Today"
        />
        <meta
          property="og:description"
          content="Explore the latest crypto coins, stay informed, and seize new investment opportunities. Engage in community voting to support your favorite projects."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="px-5">
        <Banner image={banner1} />
        <div className=" mb-20">
          <ClubCard />
        </div>
        <NewListingRecords coins={coins} refetch={refetch} />
        {/* <Partners /> */}
      </div>
      <NewsLetter />
    </>
  );
};

export default NewListing;
