import logoIcon from "../../../assets/icons/default-icon2.png";
import "../../../../src/generic.css";

const SwapImageItems = ({ platform, subtitle, image, buttonText, path }) => (
  <div className="bg-secondary border-b border-[rgb(22,23,30)] flex justify-between items-center rounded-lg my-3 py-4 px-5">
    <div className="flex items-center space-x-1">
      {" "}
      <img
        src={image}
        alt={platform}
        className=" h-12 w-12 mr-2 md:mr-5"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = logoIcon;
        }}
      />
      <div className="flex flex-col justify-center items-start text-left">
        <p className="text-text-light font-bold  text-lg mb-1">
          {platform}
        </p>{" "}
        <p className="text-text-tableHeader text-sm md:text-sm">{subtitle}</p>{" "}
      </div>
    </div>
    <div>
      <a
        href={path}
        target="_blank"
        className="bg-text-primary hover:opacity-75 text-text-light font-bold coindetilasbutton md:px-8 px-5 rounded-lg transition-opacity duration-150 text-[16px] md:text-[17px] cursor-pointer"
      >
        {buttonText}
      </a>
    </div>
  </div>
);

export default SwapImageItems;
