import React from "react";
import kickHomeBg from "../assets/APPROVED-COOL-KICKS-home-ID.WEBP";
import BestIn from "../assets/BEST-IN-CLASS-home-ID.WEBP";
import complate from "../assets/COMPLETE-THE-LOOK-home-ID.WEBP";
import varcity from "../assets/VARSITY-ESSENTIALS-home-ID.WEBP";

function CardPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <div>
        <img src={kickHomeBg} alt="" className="bg-cover" />
      </div>
      <div>
        <img src={BestIn} alt="" className="bg-cover" />
      </div>
      <div>
        <img src={complate} alt="" className="bg-cover" />
      </div>
      <div>
        <img src={varcity} alt="" className="bg-cover" />
      </div>
    </section>
  );
}

export default CardPage;
