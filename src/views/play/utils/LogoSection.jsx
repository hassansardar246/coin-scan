import logoIcon from "../../../assets/icons/default-icon2.png";
import Badge from "../../../components/badge/Badge";

const LogoSection = ({ details }) => {
  console.log("detailed-coin", details);
  return (
    <div className="flex items-center flex-wrap bg-secondary  border border-[rgb(22,23,30)] gap-5 p-5 rounded-lg">
      <img
        src={details?.coin_picture || logoIcon}
        alt=""
        className="w-[72px] h-auto rounded-full"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = logoIcon;
        }}
      />
      <div>
        <div className="flex my-2 mb-5">
          <p className="text-text-primary font-normal text-xl me-2">
            {details?.coin_name}
          </p>
          <p className="text-text-tableHeader mt-2 font-extrabold text-sm">
            {details?.coin_symbol}
          </p>
        </div>
        <Badge className="text-text-tableHeader bg-tagColor">
          {details?.category_name}
        </Badge>
      </div>
    </div>
  );
};

export default LogoSection;
