import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDateStore from "../components/Store";
import { debounce } from "lodash";
import img2 from "../assets/image22.svg";
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
  const [open2, setOpen2] = useState(true);
  const [userselected, setUserSelected] = useState("");
  const [url1, setURL1] = useState("");
  const [url2, setURL2] = useState("");
  const [redirect1, setredirect1] = useState("");
  const [url3, setURL3] = useState("");
  const [url4, setURL4] = useState("");
  const [redirect2, setredirect2] = useState("");
  const [url5, setURL5] = useState("");
  const [url6, setURL6] = useState("");
  const [redirect3, setredirect3] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event, number) => {
    setFile(event.target.files[0]);
  };
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

      short_title: null,

      Decription: null,

      redirect_url: null,
    },
    {
      type: "Basic Banner Ads",
      price: "35$/Day",
      value: "Basic Banner Ads",
      p_value: "50",
      full_image: null,
      small_image: null,
      redirect_url: null,
    },
    {
      type: "Premium Banner Ads",
      price: "100$/Day",
      value: "Premium Banner",
      p_value: "100",
      full_image: null,
      small_image: null,
      redirect_url: null,
    },
  ]);
  const { selectedDates, toggleDate, updateDates } = useDateStore();

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
      short_title: type.short_title || null,
      description: type.description || null,
      redirect_url: type.redirect_url || null,
      full_image: type.full_image || null,
      small_image: type.small_image || null,
    };

    toggleDate(dateObj);
  };
  const debouncedUpdateURLImage = debounce((url1, url2, redirect, type) => {
    const typeExists = selectedDates.some((d) => d.type === type);

    if (!typeExists) {
      toast.error("Please select date first!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    const updatedDates = selectedDates.map((d) => {
      if (d.type === type) {
        if (type === "Search Bar Ads") {
          return {
            ...d,
            short_title: url1 ? url1 : d.short_title,
            description: url2 ? url2 : d.description,
            redirect_url: redirect ? redirect : d.redirect_url,
          };
        } else {
          return {
            ...d,
            small_image: url1 ? url1 : d.small_image,
            full_image: url2 ? url2 : d.full_image,
            redirect_url: redirect ? redirect : d.redirect_url,
          };
        }
      }
      return d;
    });
    updateDates(updatedDates);
  }, 1000);
  const tileClassName = ({ date, view }) => {
    const formattedDate = formatDate(date);

    if (
      view === "month" &&
      selectedDates.some(
        (d) => d.date === formattedDate && d.type === types[open]?.value
      )
    ) {
      return "react-calendar__tile--active";
    }

    return null;
  };

  console.log(selectedDates);
  return (
    <div className=" w-full pt-5">
      <div className="mx-auto w-full bg-white/5">
        <div className="border my-2">
          <div
            onClick={() => {
              setOpen(0);
              if (open === 0) setOpen2(!open2);
            }}
            className="p-5 flex items-center  cursor-pointer text-white justify-between mx-auto"
          >
            <span>{types[0].type}</span> <span>{types[0].price}</span>
          </div>
          {open === 0 && open2 && (
            <div className="p-1 lg:p-5 text-white w-100">
              <p className="mb-5 text-center text-gray-500">
                What you get: The coin will be displayed on our VIP rotating
                section, on our home page. This will increase the coin
                visibility greatly, as we receive thousands of users per hour
                looking for new coins to invest in.
              </p>

              <div className="flex items-stretch mt-3 justify-center w-full lg:max-w-[70%] mx-auto">
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
                onChange={(date) => handleDateChange(date, types[0])}
                tileClassName={tileClassName}
              />
            </div>
          )}
        </div>
        <div className="border my-2">
          <div
            onClick={() => {
              setOpen(1);
              if (open === 1) setOpen2(!open2);
            }}
            className="p-5 flex items-center  cursor-pointer text-white justify-between mx-auto"
          >
            <span>{types[1].type}</span> <span>{types[1].price}</span>
          </div>
          {open == 1 && open2 && (
            <div className="p-1 lg:p-5 text-white w-100">
              <p className="mb-5 text-center text-gray-500">
                What you get: The coin will be displayed on our VIP rotating
                section, on our home page. This will increase the coin
                visibility greatly, as we receive thousands of users per hour
                looking for new coins to invest in.
              </p>

              <div className="flex items-stretch mt-3 justify-center w-full lg:max-w-[70%] mx-auto">
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
                className="w-full bg-transparent"
                onChange={(date) => handleDateChange(date, types[1])}
                tileClassName={tileClassName}
              />
            </div>
          )}
        </div>
        <div className="border my-2">
          <div
            onClick={() => {
              setOpen(2);
              if (open === 2) setOpen2(!open2);
            }}
            className="p-5 flex items-center  cursor-pointer text-white justify-between mx-auto"
          >
            <span>{types[2].type}</span> <span>{types[2].price}</span>
          </div>
          {open === 2 && open2 && (
            <div className="p-1 lg:p-5 text-white w-100">
              <p className="mb-5 text-center text-gray-500">
                What you get: The coin will be displayed on our VIP rotating
                section, on our home page. This will increase the coin
                visibility greatly, as we receive thousands of users per hour
                looking for new coins to invest in.
              </p>

              <div className="flex items-stretch mt-3 justify-center w-full lg:max-w-[70%] mx-auto">
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

              <div className="my-5 flex flex-col gap-3">
                <div class="relative flex flex-wrap items-stretch w-full">
                  <div class="flex -mr-px">
                    <span class="flex items-center w-full px-3 border border-b-0 xl:w-40 xl:border-b xl:border-r-0 bg-border_primary text-white border-border text-md">
                      Short Title<span class="ml-1 text-mandatory">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="presale is live..."
                    maxlength="25"
                    onChange={(e) => {
                      setURL1(e.target.value);
                      debouncedUpdateURLImage(
                        e.target.value,
                        null,
                        null,
                        types[2].value
                      );
                    }}
                    class="flex-auto h-10 px-3 border -px bg-transparent text-white bg-background border-border focus:outline-none"
                    value={url1}
                  />
                </div>
                <div class="relative flex flex-wrap items-stretch w-full">
                  <div class="flex -mr-px">
                    <span class="flex items-center w-full px-3 border border-b-0 xl:w-40 xl:border-b xl:border-r-0 bg-border_primary text-white border-border text-md">
                      Description<span class="ml-1 text-mandatory">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="presale is live..."
                    maxlength="25"
                    class="flex-auto h-10 px-3 border -px bg-transparent text-white bg-background border-border focus:outline-none"
                    value={url2}
                    onChange={(e) => {
                      setURL2(e.target.value);
                      debouncedUpdateURLImage(
                        null,
                        e.target.value,
                        null,
                        types[2].value
                      );
                    }}
                  />
                </div>
                <div class="relative flex flex-wrap items-stretch w-full">
                  <div class="flex -mr-px">
                    <span class="flex items-center w-full px-3 border border-b-0 xl:w-40 xl:border-b xl:border-r-0 bg-border_primary text-white border-border text-md">
                      Redirect URL<span class="ml-1 text-mandatory">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="presale is live..."
                    maxlength="25"
                    class="flex-auto h-10 px-3 border -px bg-transparent text-white bg-background border-border focus:outline-none"
                    value={redirect1}
                    onChange={(e) => {
                      setredirect1(e.target.value);
                      debouncedUpdateURLImage(
                        null,
                        null,
                        e.target.value,
                        types[2].value
                      );
                    }}
                  />
                </div>
              </div>

              <Calendar
                className="w-full bg-transparent gap-5"
                onChange={(date) => handleDateChange(date, types[2])}
                tileClassName={tileClassName}
              />
            </div>
          )}
        </div>
        <div className="border my-2">
          <div
            onClick={() => {
              setOpen(3);
              if (open === 3) setOpen2(!open2);
            }}
            className="p-5 flex items-center  cursor-pointer text-white justify-between mx-auto"
          >
            <span>{types[3].type}</span> <span>{types[3].price}</span>
          </div>
          {open === 3 && open2 && (
            <div className="p-1 lg:p-5 text-white w-100">
              <p className="mb-5 text-center text-gray-500">
                What you get: The coin will be displayed on our VIP rotating
                section, on our home page. This will increase the coin
                visibility greatly, as we receive thousands of users per hour
                looking for new coins to invest in.
              </p>

              <div className="my-5">
                <div className="flex flex-col items-center justify-center w-full">
                  <span className="border-[0.5px] border-border text-white w-full py-1 text-center">
                    Desktop Banner{" "}
                    <span className="ml-1 text-mandatory">*</span>
                  </span>
                  <label className="flex flex-col items-center justify-center w-full h-[90px] border-border border-[0.5px] cursor-pointer">
                    <div className="flex flex-col items-center justify-center my-auto">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "100%",
                          height: "40px",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt="banner_image"
                          src={file ? URL?.createObjectURL(file) : img2}
                          decoding="async"
                          data-nimg="intrinsic"
                          className="object-contain "
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </span>
                      <p className="pt-1 text-sm opacity-50 text-white">
                        Upload 728x90
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden opacity-0"
                      name="image"
                      onChange={(e) =>
                        debouncedUpdateURLImage(
                          null,
                          e.target.files[0],
                          null,
                          types[3].value
                        )
                      }
                    />
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center mt-3 w-full">
                  <span className="border-[0.5px] border-border text-white w-full py-1 text-center">
                    Mobile Banner <span className="ml-1 text-mandatory">*</span>
                  </span>
                  <label className="flex flex-col items-center justify-center w-full h-[90px] border-border border-[0.5px] cursor-pointer">
                    <div className="flex flex-col items-center justify-center my-auto">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "100%",
                          height: "40px",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt="banner_image"
                          src={file ? URL.createObjectURL(file) : img2}
                          decoding="async"
                          data-nimg="intrinsic"
                          className="object-contain "
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </span>
                      <p className="pt-1 text-sm opacity-50 text-white">
                        Upload 320x100
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden opacity-0"
                      name="image"
                      onChange={(e) =>
                        debouncedUpdateURLImage(
                          e.target.files[0],
                          null,
                          null,
                          types[3].value
                        )
                      }
                    />
                  </label>
                </div>
                <div class="relative flex flex-wrap mt-3 items-stretch w-full">
                  <div class="flex -mr-px">
                    <span class="flex items-center w-full px-3 border border-b-0 xl:w-40 xl:border-b xl:border-r-0 bg-border_primary text-white border-border text-md">
                      Redirect URL<span class="ml-1 text-mandatory">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="presale is live..."
                    maxlength="25"
                    class="flex-auto h-10 px-3 border -px bg-transparent text-white bg-background border-border focus:outline-none"
                    value={redirect2}
                    onChange={(e) => {
                      setredirect2(e.target.value);
                      debouncedUpdateURLImage(
                        null,
                        null,
                        e.target.value,
                        types[3].value
                      );
                    }}
                  />
                </div>
              </div>

              <Calendar
                className="w-full bg-transparent gap-5"
                onChange={(date) => handleDateChange(date, types[3])}
                tileClassName={tileClassName}
              />
            </div>
          )}
        </div>
        <div className="border my-2">
          <div
            onClick={() => {
              setOpen(4);
              if (open === 4) setOpen2(!open2);
            }}
            className="p-5 flex items-center  cursor-pointer text-white justify-between mx-auto"
          >
            <span>{types[4].type}</span> <span>{types[4].price}</span>
          </div>
          {open === 4 && open2 && (
            <div className="p-1 lg:p-5 text-white w-100">
              <p className="mb-5 text-center text-gray-500">
                What you get: The coin will be displayed on our VIP rotating
                section, on our home page. This will increase the coin
                visibility greatly, as we receive thousands of users per hour
                looking for new coins to invest in.
              </p>

              <div className="flex items-stretch mt-3 justify-center w-full lg:max-w-[70%] mx-auto">
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

              <div className="my-5">
                <div className="flex flex-col items-center justify-center w-full">
                  <span className="border-[0.5px] border-border text-white w-full py-1 text-center">
                    Desktop Banner{" "}
                    <span className="ml-1 text-mandatory">*</span>
                  </span>
                  <label className="flex flex-col items-center justify-center w-full h-[90px] border-border border-[0.5px] cursor-pointer">
                    <div className="flex flex-col items-center justify-center my-auto">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "100%",
                          height: "40px",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt="banner_image"
                          src={file ? URL.createObjectURL(file) : img2}
                          decoding="async"
                          data-nimg="intrinsic"
                          className="object-contain "
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </span>
                      <p className="pt-1 text-sm opacity-50 text-white">
                        Upload 728x90
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden opacity-0"
                      name="image"
                      onChange={(e) =>
                        UpdateURLImage(
                          null,
                          e.target.files[0],
                          null,
                          types[4].value
                        )
                      }
                    />
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center mt-3 w-full">
                  <span className="border-[0.5px] border-border text-white w-full py-1 text-center">
                    Mobile Banner <span className="ml-1 text-mandatory">*</span>
                  </span>
                  <label className="flex flex-col items-center justify-center w-full h-[90px] border-border border-[0.5px] cursor-pointer">
                    <div className="flex flex-col items-center justify-center my-auto">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "100%",
                          height: "40px",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt="banner_image"
                          src={file ? URL.createObjectURL(file) : img2}
                          decoding="async"
                          data-nimg="intrinsic"
                          className="object-contain "
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </span>
                      <p className="pt-1 text-sm opacity-50 text-white">
                        Upload 320x100
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden opacity-0"
                      name="image"
                      onChange={(e) =>
                        UpdateURLImage(
                          e.target.files[0],
                          null,
                          null,
                          types[4].value
                        )
                      }
                    />
                  </label>
                </div>
                <div class="relative flex flex-wrap mt-3 items-stretch w-full">
                  <div class="flex -mr-px">
                    <span class="flex items-center w-full px-3 border border-b-0 xl:w-40 xl:border-b xl:border-r-0 bg-border_primary text-white border-border text-md">
                      Redirect URL<span class="ml-1 text-mandatory">*</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="presale is live..."
                    maxlength="25"
                    class="flex-auto h-10 px-3 border -px bg-transparent text-white bg-background border-border focus:outline-none"
                    value={redirect3}
                    onChange={(e) => {
                      setredirect3(e.target.value);
                      UpdateURLImage(
                        null,
                        null,
                        e.target.value,
                        types[4].value
                      );
                    }}
                  />
                </div>
              </div>

              <Calendar
                className="w-full bg-transparent gap-5"
                onChange={(date) => handleDateChange(date, types[4])}
                tileClassName={tileClassName}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
