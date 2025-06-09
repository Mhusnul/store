import React from "react";
import kickHomeBg from "../assets/APPROVED-COOL-KICKS-home-ID.webp";
import BestIn from "../assets/BEST-IN-CLASS-home-ID.webp";
import complate from "../assets/COMPLETE-THE-LOOK-home-ID.webp";
import varcity from "../assets/VARSITY-ESSENTIALS-home-ID.webp";

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
