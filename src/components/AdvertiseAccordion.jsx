import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "../App.css";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import useDateStore from "../components/Store";
export default function AdvertiseAccordion() {
  const style = {
    boxSizing: "border-box",
    display: "inline-block",
    background: "none",
    opacity: 1,
    width: "100%",
    maxWidth: "100%",
    color: "#ffffff",
  };
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [userselected, setUserSelected] = useState([]);
  const [types, setTypes] = useState([
    {
      type: "VIP Spot",
      price: "15$/Day",
      value: "VIP",
      p_value: "15",
    },
    {
      type: "Promoted Spot",
      price: "25$/Day",
      value: "Promoted",
      p_value: "25",
    },
    {
      type: "Search Bar Ads",
      price: "35$/Day",
      value: "Search Bar Ads",
      p_value: "35",
    },
    {
      type: "Premium Banner Ads",
      price: "100$/Day",
      value: "Premium Banner",
      p_value: "100",
    },
  ]);
  const { selectedDates, toggleDate } = useDateStore();

  // Format date to YYYY/MM/DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  // Handle date selection
  const handleDateChange = (date, type) => {
    const formattedDate = formatDate(date);
    const dateObj = {
      date: formattedDate,
      type: type.value,
      p_value: type.p_value,
    };

    toggleDate(type.value, dateObj);
  };

  const tileClassName =
    (type) =>
    ({ date, view }) => {
      const formattedDate = formatDate(date);

      if (
        view === "month" &&
        (selectedDates[type.value] || []).some((d) => d.date === formattedDate)
      ) {
        return "react-calendar__tile--active";
      }
    };

  console.log(selectedDates);
  return (
    <div className="h-screen w-full pt-5">
      <div className="mx-auto w-full bg-white/5">
        {types.map((type, i) => (
          <div className="border my-2" key={i}>
            <div
              onClick={() => {
                setOpen(i);
                if (open === i) setOpen2(!open2);
              }}
              className="p-5 flex items-center  cursor-pointer text-white justify-between mx-auto"
            >
              <span>{type.type}</span> <span>{type.price}</span>
            </div>
            {open === i && open2 && (
              <div className="p-5 text-white w-100">
                <p className="mb-5 text-center text-gray-500">
                  What you get: The coin will be displayed on our VIP rotating
                  section, on our home page. This will increase the coin
                  visibility greatly, as we receive thousands of users per hour
                  looking for new coins to invest in.
                </p>
                <div className="flex items-stretch mt-3 justify-center gap-3 max-w-[70%] mx-auto">
                  <input
                    type="text"
                    placeholder="Search Coin (required)"
                    className="w-full h-full p-3 text-sm text-opacity-75 border text-primary bg-transparent border-border focus:outline-none xl:text-md"
                    value="Hero Project"
                  ></input>
                  <button
                    type="button"
                    className="flex items-center justify-center text-white text-center bg-gradient-to-r from-[#7e58fd] to-[#9655ff] h-10 self-center hover:bg-gradient-to-r hover:from-[#A575FE] hover:to-[#B771FF] transition-all px-5"
                  >
                    <span>Search</span>
                  </button>
                </div>
                <div className="my-5"></div>
                <Calendar
                  className="w-full bg-transparent gap-5"
                  value={(selectedDates[type.value] || [])?.map(
                    (d) => new Date(d.date)
                  )}
                  onChange={(date) => handleDateChange(date, type)}
                  tileClassName={tileClassName(type)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
