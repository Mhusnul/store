import React from "react";
import benner from "../assets/benner.gif";
import small from "../assets/small-benner.gif";
import benner2 from "../assets/benner2.gif";

function Corousel() {
  return (
    <div>
      <img src={small} className="w-full" />

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={benner} className="w-full" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={benner2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/a/p/approved_grey_days_main_banner_desktop_1600_x_500_2.jpg "
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corousel;
