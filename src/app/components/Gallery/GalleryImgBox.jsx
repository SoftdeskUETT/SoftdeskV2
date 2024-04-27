import React from "react";
import Image from "next/image";
import "./styles.css";

import img1 from "../../assets/gallery/gal1.jpg";
import img2 from "../../assets/gallery/gal2.jpg";
import img3 from "../../assets/gallery/gal3.jpg";
import img4 from "../../assets/gallery/gal4.jpg";
import img5 from "../../assets/gallery/gal5.jpg";
import img6 from "../../assets/gallery/gal6.jpg";

const GalleryImgBox = () => {
  return (
    <div className="div-4 h-[1100px]  lg:h-[500px] flex justify-center ">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 md:w-[90%]  lg:w-[70%] md:h-screen mt-[10px]  p-6  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <div className="custom_image_holder">
          <Image
            src={img1}
            height={140}
            width={180}
            alt="img1"
            className="h-[150px] md:w-[100%] md:h-[100%] md:bg-cover"
          />
        </div>
        <div className="custom_image_holder">
          <Image
            src={img2}
            height={140}
            width={180}
            alt="img2"
            className="h-[150px] sm:w-[100%] sm:h-[100%] sm:bg-cover"
          />
        </div>
        <div className="custom_image_holder">
          <Image
            src={img3}
            height={140}
            width={180}
            alt="img3"
            className="h-[150px] sm:w-[100%] sm:h-[100%] sm:bg-cover"
          />
        </div>
        <div className="custom_image_holder">
          <Image
            src={img4}
            height={140}
            width={180}
            alt="img4"
            className="h-[150px] sm:w-[100%] sm:h-[100%] sm:bg-cover"
          />
        </div>
        <div className="custom_image_holder">
          <Image
            src={img5}
            height={140}
            width={180}
            alt="img5"
            className="h-[150px] sm:w-[100%] sm:h-[100%] sm:bg-cover"
          />
        </div>
        <div className="custom_image_holder">
          <Image
            src={img6}
            height={140}
            width={180}
            alt="img6"
            className="h-[150px] sm:w-[100%] sm:h-[100%] sm:bg-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryImgBox;
