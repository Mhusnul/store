import React from "react";

function BrandCarousel() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="animate-slide inline-block">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <img
              className="inline-block h-20 mx-2"
              src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/n/i/nike_1100x473_3.jpg"
              alt="Nike"
            />
            <img
              className="inline-block h-20 mx-2"
              src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/p/u/puma_1100x473_3.jpg"
              alt="Puma"
            />
            <img
              className="inline-block h-20 mx-2"
              src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/u/n/underarmour_1100x473_3.jpg"
              alt="UA"
            />
            <img
              className="inline-block h-20 mx-2"
              src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/l/a/lacoste_1100x473_3.jpg"
              alt="Lacoste"
            />
            <img
              className="inline-block h-20 mx-2"
              src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/a/s/asics_1100x473_3.jpg"
              alt="Asics"
            />
            <img
              className="inline-block h-20 mx-2"
              src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/s/a/salomon_logo_website.jpg"
              alt="Salomon"
            />
            <img
              className="inline-block h-20 mx-2"
              src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/c/r/crep_1100x473_3.jpg"
              alt="Crep"
            />
            <img
              className="inline-block h-20 mx-2"
              src="https://www.footlocker.id/media/weltpixel/owlcarouselslider/images/h/o/hoka_1100x473_6.jpg"
              alt="Hoka"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BrandCarousel;
