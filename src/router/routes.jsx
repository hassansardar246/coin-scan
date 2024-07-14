// src/routes.js
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Header } from "../layout";
import { AddCoins, Home, NewCoin, Play } from "../views";
import ErrorNotFound from "../views/error/ErrorNotFound";
import NewListing from "../views/newListing/NewListing";
import UpcomingParesale from "../views/upcomingParesale/UpcomingParesale";
import PreSale from "../views/pre-sale/PreSale";
import Index from "../views/advertisement/Index";
import CheckOutPage from "../components/CheckOutPage";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="new-coins" element={<NewCoin />} />
        <Route path="advertisement" element={<Index />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="new-listing" element={<NewListing />} />
        <Route path="pre-sale" element={<PreSale />} />
        <Route path="upcoming-paresale" element={<UpcomingParesale />} />
        <Route path="play" element={<Play />} />
        <Route path="add-coins" element={<AddCoins />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Route>
    </>
  )
);
