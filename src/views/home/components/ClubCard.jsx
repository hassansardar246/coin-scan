import React from "react";
import "../components/utils/Cc_Css/ClubCard.css";
import CsImg from "../../../assets/common/CSclub.gif";
import { Link } from "react-router-dom";

const ClubCard = () => {
  return (
    <div className="flex gap-10 flex-wrap">
      <a
        href="https://club.coinscan.cc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* border-[#AD00FF] */}
        <div className="card-for-hover h-[100px] w-full lg:w-[335px] sm:w-full pt-[6px] px-[17px] pb-[10px] text-white bg-clubCardOneBg rounded-xl  border-solid border-[3px] flex items-center justify-center gap-5">
          <img
            src={CsImg}
            alt=""
            className="h-[74px] rounded-[44px] sm:h-[64px] sm:w-[64px]"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-left md:text-lg text-[18px] md:space-x-1">
              <span className="text-[#F4DEFF]">Join</span>{" "}
              <span className="text-[#AD00FF] font-extrabold">CS</span>
              <span className="text-[#00F0FF]">Club</span>{" "}
              <span className="text-[#F4DEFF]">Chatroom</span>
            </h2>
            <p className="text-left md:text-sm text-[#F9EEFF] text-[13px]">
              Stay Updated, Discuss, and Earn Rewards!
            </p>
          </div>
        </div>
      </a>

      <Link
        to="https://play.coinscan.cc"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* border-[#ffcf00] */}
        <div className="card-for-hover h-[100px] w-full lg:w-[335px] sm:w-full pt-[6px] px-[17px] pb-[10px] text-white bg-clubCardTwoBg rounded-xl border-solid border-[3px]  flex items-center justify-center gap-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/1b0c/adc2/77a0bcfd8fbafa92630306941c703c52?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z9qFKvGtVuUwOFLFjxJaKvwa9GPehmKqR0H8YpW5ou6z3zvuJ-MBJ-Dr1SP~l03kIpFAcgTsxrfTggxJK5aBPUAaasilZu-vqvaKGKDuN3YQxHdUwJ65pBuHrVFmREHXfvtTyaH3GIQz89cX1rP0yRNUAcTRkiJn208h-mVy94yM9gKZVDylldI~JEA1eu--4PZ4QTZ6~QU-6gtVAPtOFCyXpfuBCaxv5DAgDYK5r5MV0cp45kFUmObT20qT-U2FMv9CuCz1JFIvCmRt~JWvCLp3hBs0NsNYzqhrexIAfKafbGn7hqhuX9tO-8oFndHOxXeGs0ep57LGDSHurma1CA__"
            alt=""
            className="h-[74px] w-[74px] rounded-[44px] sm:h-[54px] sm:w-[54px]"
          />
          <div className="flex flex-col justify-center ">
            <h2 className="text-left md:text-lg text-[18px] md:space-x-1">
              <span className="text-[#FFFCF2]">Play</span>{" "}
              <span className="text-[#5BF000] font-bold">Wordle</span>{" "}
              <span className="text-[#FFCF00] font-bold">Battle</span>
            </h2>
            <p className="text-left md:text-sm text-[#F9EEFF] text-[13px]">
              A Thrilling Multiplayer Word Puzzle Game.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClubCard;
