import React from "react";
import PromoteCoin from "../../components/advertise/promoteCoin";
import Order from "../../components/advertise/order";
import AdvertiseAccordion from "../../components/AdvertiseAccordion";

function Index() {
  return (
    <div className="flex flex-col gap-8 mx-auto my-16 font-archivo w-full max-w-[1440px] text-primary 2xl:gap-24 xl:flex-row">
      <section className="flex flex-col w-full text-start gap-3 px-7 xl:px-0">
        <PromoteCoin />
        <AdvertiseAccordion />
      </section>
      <section className="w-full text-start px-10 xl:w-3/5 xl:px-0">
        <Order />
      </section>
    </div>
  );
}

export default Index;
