import React from "react";

function CardGender() {
  return (
    <div className="text-4xl font-bold text-center mb-5">
      <h1 className="my-5">Shop By Gender</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 ">
        <div>
          <img
            src="https://www.footlocker.id/media/wysiwyg/Home-feb-Men.jpg"
            alt=""
          />
          <a href="" className="hover:underline">
            Man
          </a>
        </div>
        <div>
          <img
            src="https://www.footlocker.id/media/wysiwyg/Home-feb-Women.jpg"
            alt="women"
          />
          <a href="" className="hover:underline">
            Women
          </a>
        </div>

        <div>
          <img
            src="https://www.footlocker.id/media/wysiwyg/Home-feb-Kids.jpg"
            alt=""
          />
          <a href="" className="hover:underline">
            Kids
          </a>
        </div>

        <div>
          <img
            src="https://www.footlocker.id/media/wysiwyg/NEWS_BANNER_NIKE_TN1_800x400.jpg"
            alt=""
          />
          <a href="" className="hover:underline">
            Stay Tuned
          </a>
          <p className="text-sm font-normal my-2">
            Ekspresikan diri dengan siluet Foot Locker Exclusive dari brand Nike
          </p>
          <button className="btn btn-outline">Shop Now</button>
        </div>

        <div>
          <img
            src="https://www.footlocker.id/media/wysiwyg/50th_News_Banner.jpg"
            alt=""
          />
          <a href="" className="hover:underline">
            From 50 Years to Forever
          </a>
          <p className="text-sm font-normal my-2">
            Celebrate in Style with Exclusive Drops
          </p>
          <button className="btn btn-outline">Shop Now</button>
        </div>

        <div>
          <img
            src="https://www.footlocker.id/media/wysiwyg/CERTIFIED_CLASSIC_800x400_1_.jpg"
            alt=""
          />
          <a href="" className="hover:underline">
            Certified Classics
          </a>
          <p className="text-sm font-normal my-2">
            Miliki sneakers klasik yang tak lekang oleh waktu
          </p>
          <button className="btn btn-outline">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default CardGender;
