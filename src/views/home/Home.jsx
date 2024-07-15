import React from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Promoted from "./components/Promoted";
import PromoteCoinButton from "../../components/button/PromoteCoinButton";
import BestRecords from "./components/BestRecords";
import Partners from "./components/Partners";
import NewsLetter from "./components/NewsLetter";
import Banner2 from "./components/Banner2";
import {
  useGetAdvertiseDesktopQuery,
  useGetAdvertiseMobileQuery,
  useGetNewListingQuery,
  useGetPresaleListingQuery,
  useGetPromotedCoinsQuery,
  useGetTopTrendingQuery,
} from "../../app/features/api";
import ConfirmationModal from "../../components/modals/ConfirmationModal";
import Preloader from "../../components/loader/Preloader";
import { Helmet } from "react-helmet-async";
import ClubCard from "./components/ClubCard";
// import Table from "../../components/newTable/table";

const Home = () => {
  const { data: promotedCoins, refetch: promotedRefetch } =
    useGetPromotedCoinsQuery();
  const { data: newListing, isFetching } = useGetNewListingQuery();
  const { data: presaleListing } = useGetPresaleListingQuery();
  const { data: topTrending } = useGetTopTrendingQuery();
  const { data: desktop, isLoading } = useGetAdvertiseDesktopQuery();
  const { data: mobile } = useGetAdvertiseMobileQuery();

  const coins = promotedCoins?.all_coins;

  const banner1 = desktop?.advertise?.image;
  const banner2 = mobile?.advertise?.image;
  const link1 = desktop?.advertise?.link;
  const link2 = mobile?.advertise?.link;
  if (isFetching) return <Preloader />;
  return (
    <>
      <Helmet>
        <title>CoinScan | New Crypto Coin Rankings</title>
        <meta
          name="description"
          content="Discover the next big crypto coin on CoinScan. Free insights in the crypto space and community voting to support your favorite projects."
        />
        <meta name="image" content="./static/home.png" />
        <meta
          property="og:title"
          content="CoinScan | New Crypto Coin Rankings"
        />
        <meta
          property="og:description"
          content="Discover the next big crypto coin on CoinScan. Free insights in the crypto space and community voting to support your favorite projects."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="px-5">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Banner image={banner1} link={link1} />
            {/* <ClubCard /> */}
            <Banner2 image={banner2} link={link2} />
          </>
        )}
        <ConfirmationModal />
        {/* <Table /> */}
        {/* <Cards
          newListing={newListing?.coins}
          topTrending={topTrending?.coins}
          presaleListing={presaleListing?.coins}
        /> */}
        <Promoted coins={coins} refetch={promotedRefetch} />
        {/* <PromoteCoinButton /> */}
        <BestRecords />
        <Partners />
      </div>
      {/* <NewsLetter /> */}
      <div className="px-5">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {/* <Banner image={banner2} /> */}
            <Banner2 image={banner1} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
