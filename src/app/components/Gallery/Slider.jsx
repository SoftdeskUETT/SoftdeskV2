"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Keyboard, Mousewheel, Autoplay } from "swiper/modules";
import Image from "next/image";

import img1 from "../../assets/gallery/gs1.jpg";
import img2 from "../../assets/gallery/gs2.jpg";
import img3 from "../../assets/gallery/gs3.jpg";
import img4 from "../../assets/gallery/gs4.jpg";
import img5 from "../../assets/gallery/gs5.jpg";
import img6 from "../../assets/gallery/gs6.jpg";
import img7 from "../../assets/gallery/gs7.jpg";
import img8 from "../../assets/gallery/gs8.jpg";
import img9 from "../../assets/gallery/gs9.jpg";
import img10 from "../../assets/gallery/gs10.jpg";
import img11 from "../../assets/gallery/gs11.jpg";
import img12 from "../../assets/gallery/gs12.jpg";
import img13 from "../../assets/gallery/gs13.jpg";
import img14 from "../../assets/gallery/gs14.jpg";
import img15 from "../../assets/gallery/gs15.jpg";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true} // Enable mousewheel control
        keyboard={true} // Enable keyboard control
        modules={[Pagination, Keyboard, Mousewheel, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="a">
          <Image src={img1} height={260} width={300} alt="img1" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img2} height={260} width={300} alt="img2" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img3} height={260} width={300} alt="img3" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img4} height={260} width={300} alt="img4" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img5} height={260} width={300} alt="img5" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img6} height={260} width={300} alt="img6" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img7} height={260} width={300} alt="img7" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img8} height={260} width={300} alt="img8" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img9} height={260} width={300} alt="img9" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img10} height={260} width={300} alt="img10" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img11} height={260} width={300} alt="img11" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img12} height={260} width={300} alt="img12" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img13} height={260} width={300} alt="img13" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img14} height={260} width={300} alt="img14" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img15} height={260} width={300} alt="img15" />
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Slider;
