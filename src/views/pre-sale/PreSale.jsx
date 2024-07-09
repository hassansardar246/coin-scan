import React from "react";
import PreSaleListing from "./components/PreSaleListing";
import Partners from "../home/components/Partners";
import NewsLetter from "../home/components/NewsLetter";
import Banner from "../home/components/Banner";
import {
  useGetAdvertiseDesktopQuery,
  useGetPresaleListingQuery,
} from "../../app/features/api";
import { Helmet } from "react-helmet-async";
import ClubCard from "../home/components/ClubCard";

const PreSale = () => {
  const { data: preSale, refetch } = useGetPresaleListingQuery();
  console.log(preSale);

  const { data: desktop, isLoading } = useGetAdvertiseDesktopQuery();
  const coins = preSale?.coins;
  const banner1 = desktop?.advertise?.image;

  return (
    <>
      <Helmet>
        <title>CoinScan | Explore and Discover Upcoming coins Today</title>
        <meta
          name="description"
          content="Explore the latest crypto coins, stay informed, and seize new investment opportunities. Engage in community voting to support your favorite projects."
        />
        <meta
          property="og:title"
          content="CoinScan | Explore and Discover Upcoming coins Today"
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
        <PreSaleListing coins={coins} refetch={refetch} />
        {/* <Partners /> */}
      </div>
      <NewsLetter />
    </>
  );
};

export default PreSale;
