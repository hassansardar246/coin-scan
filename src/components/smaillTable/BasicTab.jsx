import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import SideTable from "./SideTable";
import {
  useGetNewListingQuery,
  useGetPresaleListingQuery,
  useGetTopTrendingQuery,
} from "../../app/features/api";

export function BasicTab() {
  const { data: newListing, isFetching } = useGetNewListingQuery();
  const { data: presaleListing } = useGetPresaleListingQuery();
  const { data: topTrending } = useGetTopTrendingQuery();
  const [selectedTab, setSelectedTab] = useTabs([
    "Top Trending",
    "New Listing",
    "Upcoming Presale",
  ]);
  let data = topTrending;
  if (selectedTab === "Top Trending") {
    data = topTrending;
  } else if (selectedTab === "New Listing") {
    data = newListing;
  } else if (selectedTab === "Upcoming Presale") {
    data = presaleListing;
  }

  return (
    <>
      <nav className="flex border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === "Top Trending"}
          onClick={() => setSelectedTab("Top Trending")}
        >
          Top Trending
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "New Listing"}
          onClick={() => setSelectedTab("New Listing")}
        >
          New Listing
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "Upcoming Presale"}
          onClick={() => setSelectedTab("Upcoming Presale")}
        >
          Upcoming Presale
        </TabSelector>
      </nav>
      <div className="p-4">
        <TabPanel>
          <SideTable
            coins={data?.coins}
            pageSize={10}
            showPagination={false}
            handleVote={""}
            votingStatus={""}
            promoted={true}
            tab={selectedTab}
          />
        </TabPanel>
      </div>
    </>
  );
}
