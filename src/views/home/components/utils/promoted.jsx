import defaultIcon1 from "../../../../assets/icons/default-icon1.png";
import icon1 from "../../../../assets/socials/coin-1.png";
import icon2 from "../../../../assets/socials/coin-2.png";

export const IconText = ({
  icon,
  coin_symbol,
  abtext = "",
  text,
  rank,
  fire,
  item,
  promoted,
  marketCap,
  gecko,
}) => (
  <div className={` flex justify-start items-center`}>
    {/* {item?.promoted ? (
      <img src={fire} alt="Promoted" className="w-3 h-2 mr-2 rounded-full" />
    ) : (
      <span className="mr-2">{rank}</span>
    )} */}

    <div className="flex gap-1 flex-col items-end right-[127px] md:min-w-10 max-w-10 ">
      {gecko && (
        <a href={gecko}>
          <img
            src={icon1}
            alt=""
            className="w-4 h-4 rounded-full"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = defaultIcon1;
            }}
          />
        </a>
      )}{" "}
      {marketCap && (
        <a href={marketCap}>
          <img
            src={icon2}
            alt=""
            className="w-4 h-4 rounded-full"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = defaultIcon1;
            }}
          />
        </a>
      )}
    </div>

    <img
      src={icon}
      alt=""
      className="w-10 h-10 rounded-full mr-4 p-1 border"
      style={{ borderColor: "rgb(27, 28, 36)" }}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = defaultIcon1;
      }}
    />
    <div className={`flex flex-col text-start`}>
      <div
        style={{
          whiteSpace: "nowrap",
          // overflow: "hidden",
          // textOverflow: "ellipsis",
        }}
      >
        {text} &nbsp;
        <span className="bg-border-inputBorder text-blue-500 px-1 py-0.5 rounded-md">
          {" "}
          {abtext}
        </span>
      </div>
      <div className="text-sm text-gray-500">{coin_symbol}</div>
    </div>
  </div>
);

export const ColoredNumber = ({ number }) => (
  <span style={{ color: number > 0 ? "#00FFA3" : "red" }}>
    {number > 0 ? (
      <span className="flex items-center gap-2 justify-center">
        <span>+{number}&nbsp;%</span>
      </span>
    ) : (
      <>
        <span className="flex items-center gap-2 justify-center">
          <span> {number}&nbsp;%</span>
        </span>
      </>
    )}
  </span>
);

export const FormatMarketCap = ({ value }) => (
  <span>${value.toLocaleString()}</span>
);

// Assume a function to format date since you didn't specify the format
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
