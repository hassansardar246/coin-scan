import React from "react";
import { FiUsers } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
export default function PromoteCoin() {
  const style = {
    boxSizing: "border-box",
    display: "inline-block",
    background: "none",
    opacity: 1,
    width: "40px",
    height: "40px",
    maxWidth: "100%",
    color: "#ffffff",
  };
  return (
    <div>
      <section>
        <div className="flex flex-col gap-3 mb-8">
          <h1 className="text-3xl font-bold text-white">Promote your coin</h1>
          <span className="text-base font-medium text-white">
            Get the visibility you need.
          </span>
        </div>

        <section className="flex flex-col gap-12">
          <section className="w-full bg-gradient-to-l from-[#7e58fd] to-[#9655ff] flex xl:flex-row flex-col items-center justify-between">
            <div className="flex flex-col items-start w-full xl:items-center px-10 lg:px-5 py-6 xl:flex-row">
              <span style={style}>
                <img
                  src="https://coinhunt.cc/assets/misc/accounts_promote.svg"
                  alt=""
                />
              </span>
              <div className="flex flex-col items-start gap-1 pt-2 lg:pl-4">
                <span className="text-xl font-bold text-white">15,400</span>
                <span className="text-base font-medium text-white">
                  Average daily users
                </span>
              </div>
            </div>
            <div className="flex xl:flex-row items-start w-full xl:items-center flex-col px-10 lg:px-5 py-6 border-border border-l-0 border-r-0 xl:border-t-0 xl:border-b-0 border-[0.5px]">
              <span style={style}>
                <img
                  src="https://coinhunt.cc/assets/misc/twitter_promote.svg"
                  alt=""
                />
              </span>
              <div class="flex flex-col items-start gap-1 pt-2 lg:pl-4">
                <span className="text-xl font-bold text-white">24,500</span>
                <span className="text-base font-medium text-white">
                  Twitter followers
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start w-full px-10 lg:px-5 py-6 xl:flex-row xl:items-center">
              <span style={style}>
                <img src="https://coinhunt.cc/assets/misc/mail.svg" alt="" />
              </span>
              <div className="flex flex-col items-start gap-1 lg:px-4 pt-2">
                <span className="text-xl font-bold text-white">10,262</span>
                <span class="text-base font-medium text-white">
                  Newsletter subscribers
                </span>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
