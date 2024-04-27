import React from "react";
import GallerySlider from "../components/Gallery/GallerySlider";
import GalleryImgBox from "../components/Gallery/GalleryImgBox";

const page = () => {
  return (
    <>
      <div className="w-full h-[1100px]  lg:h-[550px]  overflow-hidden bg-[#191A19] flex flex-col gap-3  relative z-9">
        <h2 className="text-[#FF7420] font-bold underline uppercase text-[20px] sm:text-[25px] md:text-[35px] text-center absolute left-[20%] md:left-[27%] pt-5">
        Moments to Remember
        </h2>
        <div className="flex flex-col lg:flex-row">
          <GallerySlider />
          <GalleryImgBox />
        </div>
      </div>
    </>
  );
};

export default page;
