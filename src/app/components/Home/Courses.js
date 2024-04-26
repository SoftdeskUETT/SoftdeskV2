import React from "react";
import Slider from "./Slider";
import spiral from "../../assets/home/spiral.png";
import Image from "next/image";
import course_bulb from "../../assets/home/course_bulb.png";

const Courses = () => {
  return (
    <div id="courses" className="min-h-[80vh] w-full relative">
      <Image
        src={course_bulb}
        height={40}
        width={40}
        alt=""
        className="absolute left-[7%] sm:left-[15%]"
      />
      <Image
        src={spiral}
        height={70}
        width={70}
        alt="spiral courses"
        className="hidden sm:block absolute  -top-[75px] right-40 rotate-[270deg]"
      />
      <div className="flex flex-col gap-9 w-[90%] mx-auto">
        <div className="mx-auto text-center w-[80%] sm:w-[60%]">
          <h2 className=" text-[1.3rem] sm:text-[1.8rem] pt-3 font-bold  text-black">
            Courses <span className="text-[#FF7420]">Tech Spectrum</span>
          </h2>
          <p className="h-[2px] w-[50px] bg-[#FF7420] mx-auto translate-x-[-80px] sm:translate-x-[-140px] translate-y-[10px]"></p>
        </div>
        <div>
          <p className="text-[#667085]">
            {"Let's"} explore our courses class, the knowledge provided will
            definitely be useful for you.
          </p>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Courses;
