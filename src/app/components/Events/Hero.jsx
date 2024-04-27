import React from "react";
import Image from "next/image";
import { EventButton } from "../shared/button";
import { FaArrowRight } from "react-icons/fa6";

import heroBg from "../../assets/events/hero-event.png";
import orangeSvg from "../../assets/events/svg-circle.png";
import mouse from "../../assets/events/mouse.png";
import triangle from "../../assets/events/triangle.png";
import clock from "../../assets/events/clock.png";
import square from "../../assets/events/square.svg";
const Hero = ({ title, subTitleHead, subTitle, content, img1, img2, img3 }) => {
  return (
    <>
      <section className="w-[90%] mx-auto    xl:h-[calc(100vh-60px)] wraper-events  ">
        <div className="flex flex-col xl:flex-row  ">
          <div className=" h-full sm:h-[50%] xl:h-full  w-full px-8  py-12 bg-secondary xl:flex-[2] realtive">
            <div className="flex flex-col">
              <h2 className="text-primary font-bold text-[40px]   relative">
                {title}
                <Image
                  src={square}
                  alt="clock"
                  width={30}
                  height={30}
                  className="absolute -top-5 -right-0"
                />
              </h2>
              <h3 className="text-white font-semibold text-[30px] leading-10 relative">
                <span className="text-primary">{subTitleHead} </span>
                {subTitle}
                <span className="absolute top-1/2 -right-5 xl:-right-10">
                  {" "}
                  <Image src={mouse} alt="mouse" width={30} height={30} />
                </span>
              </h3>
              <p className="text-white text-[16px] font-light text-justify sm:text-start mt-[10px] relative">
                {content}
                <span className="absolute bottom-1  xl:top-1/2 right-0">
                  <Image src={triangle} alt="triangle" width={20} height={20} />
                </span>
              </p>
              <EventButton
                styles={"mt-2  justify-center  flex items-center gap-1"}
              >
                <span>Images</span>
                <FaArrowRight className="text-white" />
              </EventButton>
            </div>
          </div>
          <div className="w-full div-1-events bg-secondary flex-[0.5] -z-30 hidden xl:flex "></div>
          <div className="w-full xl:flex-[2] relative items-center h-full sm:h-[55rem] xl:h-full">
            <div className="flex flex-col px-12 py-10 sm:py-[100px] xl:py-10 relative items-center  xl:items-start">
              <div className="relative w-[250px] sm:w-[400px] xl:w-[300px] h-[180px]  sm:h-[250px] xl:h-[180px] rounded-md">
                <Image
                  src={img1}
                  alt={title}
                  fill
                  className="object-cover w-full h-full rounded-md z-30"
                />
              </div>
              <div className="relative w-[250px] sm:w-[400px]  xl:w-[300px] h-[180px] sm:h-[250px] xl:h-[180px] -translate-y-5  -translate-x-20 sm:-translate-x-40 rounded-md">
                <Image
                  src={img2}
                  alt={subTitleHead}
                  fill
                  className="object-cover w-full h-full rounded-md z-20"
                />
              </div>
              {/*  Absolute pic secondary */}
              <div className="relative w-[250px] sm:w-[400px]  xl:w-[330px] sm:h-[300px] xl:h-[180px] -translate-y-[400px]  xl:-translate-y-[280px] -translate-x-[80px]  xl:-translate-x-[120px]  -z-10">
                <Image
                  src={heroBg}
                  alt="pic1"
                  className="object-cover  w-full h-full  rounded-t-2xl"
                  fill
                />
                <Image
                  src={mouse}
                  alt="pic1"
                  className="absolute top-[170px] xl:top-[110px] right-5 z-100"
                  height={30}
                  width={30}
                />
              </div>

              <div className="relative  w-[250px] sm:w-[400px] xl:w-[300px] h-[180px] sm:h-[250px] xl:h-[180px] rounded-md -translate-y-[50px] sm:-translate-y-[400px]  xl:-translate-y-[280px] sm:translate-x-20 ">
                <Image
                  src={img3}
                  alt={subTitle}
                  fill
                  className="object-cover w-full h-full rounded-md z-30"
                />
              </div>
            </div>
            {/*  Abdolute small images */}
            <Image
              src={orangeSvg}
              alt="pic1"
              className="absolute top-0 right-0"
              height={100}
              width={100}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
