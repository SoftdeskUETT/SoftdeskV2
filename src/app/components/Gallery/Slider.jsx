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

import img1 from "../../assets/gallery/img2.png";

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
          <Image src={img1} height={260} width={300} alt="img1" />
        </SwiperSlide>
        <SwiperSlide className="a">
          <Image src={img1} height={260} width={300} alt="img1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
