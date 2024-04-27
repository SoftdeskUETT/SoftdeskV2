import React from "react";
import Image from "next/image";

import it_head from "../../assets/home/it_head.png";
import head_inner_icon from "../../assets/home/head_inner_icon.png";
import head_outer_icon from "../../assets/home/head_outer_icon.png";
import management from "../../assets/home/management.png";
import documentation from "../../assets/home/documentation.png";
import decor from "../../assets/home/decor.png";
import graphics from "../../assets/home/graphics.png";
import alumni from "../../assets/home/alumni.png";
import media from "../../assets/home/media.png";
import finance from "../../assets/home/finance.png";
import spiral from "../../assets/home/spiral.png";
import spiral_2 from "../../assets/home/spiral_2.png";
import hero_left_cursor from "../../assets/home/hero_left_cursor.png";
import hero_triangle from "../../assets/home/hero_triangle.png";
import hero_rectangle from "../../assets/home/hero_rectangle.png";
import hero_ellipse_2 from "../../assets/home/hero_ellipse_2.png";

const Heads = () => {
  return (
    <div id="heads" className="min-h-[100vh] bg-[#191A19]  p-4 flex flex-col gap-[70px] relative">
      <div className="mx-auto text-center w-[80%] sm:w-[60%]">
        <h2 className=" text-[1.3rem] sm:text-[1.8rem] font-bold  text-white">
          Connect with <span className="text-[#FF7420]">Heads</span>
        </h2>
        <p className="h-[2px] w-[50px] bg-[#FF7420] mx-auto translate-x-[-80px] sm:translate-x-[-110px] translate-y-[10px]"></p>
      </div>
      <Image
        src={spiral}
        height={80}
        width={30}
        alt="spiral"
        className="absolute top-[14%] right-0 h-[250px] w-[70px]"
      />
      <Image
        src={spiral_2}
        height={80}
        width={30}
        alt="spiral"
        className="absolute bottom-[14%] left-0 h-[250px] w-[70px]"
      />
      <Image
        src={hero_left_cursor}
        height={30}
        width={30}
        alt="spiral"
        className="absolute top-[30%] sm:top-[35%] left-[25%]"
      />
      <Image
        src={hero_rectangle}
        height={30}
        width={30}
        alt="spiral"
        className="absolute right-[25%] sm:right-[15%] bottom-[25%] sm:bottom-[20%]"
      />
      <Image
        src={hero_triangle}
        height={20}
        width={20}
        alt="spiral"
        className="absolute bottom-[30%] left-[20%]"
      />
      <Image
        src={hero_ellipse_2}
        height={20}
        width={20}
        alt="spiral"
        className="absolute top-[55%] sm:top-[50%] right-[43%]"
      />
      <div className="flex w-[100%] mx-auto flex-col p-5 sm:gap-y-[20px] relative">
        <div className="sm:flex  justify-between w-[95%] sm:w-[90%] mx-auto p-4">
          <div className="flex md:justify-center items-center gap-7 sm:gap-11">
            <div className="flex justify-center items-center">
              <Image
                src={it_head}
                height={120}
                width={120}
                alt="IT head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_inner_icon}
                height={120}
                width={120}
                alt="IT Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_outer_icon}
                height={150}
                width={150}
                alt="IT Head"
                className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
              />
            </div>
            <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[100px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
              <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                IT Head
              </h2>
              <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                FAHEEM ABBAS
              </h2>
            </div>
          </div>
          <div className="flex justify-end md:justify-center items-center gap-7 md:gap-11">
            <div className="flex justify-center items-center">
              <Image
                src={management}
                height={120}
                width={120}
                alt="Management head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_inner_icon}
                height={120}
                width={120}
                alt="IT Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_outer_icon}
                height={150}
                width={150}
                alt="IT Head"
                className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
              />
            </div>
            <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[100px] sm:w-[120px] md:w-[220px] rounded-tl-full rounded-bl-full sm:rounded-tr-full sm:rounded-br-full order-[-1] sm:order-[0]">
              <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                Management
              </h2>
              <h2 className="text-white text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem]">
                AWAIS AMJAD
              </h2>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto p-4 ">
          <div className="flex justify-start sm:justify-center items-center gap-7 sm:gap-11">
            <div className="flex justify-center items-center">
              <Image
                src={documentation}
                height={120}
                width={120}
                alt="Documentstion head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_inner_icon}
                height={120}
                width={120}
                alt="IT Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_outer_icon}
                height={150}
                width={150}
                alt="IT Head"
                className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
              />
            </div>
            <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[100px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
              <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                Documentation
              </h2>
              <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                GHUFRANULLAH
              </h2>
            </div>
          </div>
        </div>
        <div className="sm:flex justify-between w-[95%] sm:w-[90%] mx-auto p-4 ">
          <div className="flex justify-end md:justify-center items-center gap-7 sm:gap-11">
            <div className="flex justify-center items-center">
              <Image
                src={decor}
                height={120}
                width={120}
                alt="Decor head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_inner_icon}
                height={120}
                width={120}
                alt="IT Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_outer_icon}
                height={150}
                width={150}
                alt="IT Head"
                className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
              />
            </div>
            <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[100px] sm:w-[120px] md:w-[220px] rounded-tl-full rounded-bl-full sm:rounded-tr-full sm:rounded-br-full order-[-1] sm:order-[0]">
              <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                Decor
              </h2>
              <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                SEHAR NAVEED
              </h2>
            </div>
          </div>
          <div className="flex  justify-start md:justify-center items-center gap-7 md:gap-11">
            <div className="flex justify-center items-center">
              <Image
                src={graphics}
                height={120}
                width={120}
                alt="Graphics head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_inner_icon}
                height={120}
                width={120}
                alt="IT Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_outer_icon}
                height={150}
                width={150}
                alt="IT Head"
                className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
              />
            </div>
            <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[100px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
              <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                Graphics
              </h2>
              <h2 className="text-white text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem]">
                AMMAD AHMED
              </h2>
            </div>
          </div>
        </div>

        <div className="w-[95%] sm:w-[90%] mx-auto p-4">
          <div className="flex justify-end sm:justify-center items-center gap-7 sm:gap-11">
            <div className="flex justify-center items-center">
              <Image
                src={alumni}
                height={120}
                width={120}
                alt="Alumni head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_inner_icon}
                height={120}
                width={120}
                alt="IT Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_outer_icon}
                height={150}
                width={150}
                alt="IT Head"
                className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
              />
            </div>
            <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[100px] sm:w-[120px] md:w-[220px] rounded-tl-full rounded-bl-full sm:rounded-tr-full sm:rounded-br-full order-[-1] sm:order-[0]">
              <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                Alumni
              </h2>
              <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                USMAN ARSHAD
              </h2>
            </div>
          </div>
        </div>

        <div className="sm:flex justify-between w-[95%] sm:w-[90%] mx-auto p-4">
          <div className="flex md:justify-center items-center gap-7 sm:gap-11">
            <div className="flex justify-center items-center">
              <Image
                src={media}
                height={120}
                width={120}
                alt="Media Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_inner_icon}
                height={120}
                width={120}
                alt="IT Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_outer_icon}
                height={150}
                width={150}
                alt="IT Head"
                className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
              />
            </div>
            <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[100px] sm:w-[120px] md:w-[220px] rounded-tr-full rounded-br-full">
              <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                Media & Promotion
              </h2>
              <h2 className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-[1.2rem]">
                MUHAMMAD MEHDI
              </h2>
            </div>
          </div>
          <div className="flex justify-end md:justify-center items-center gap-7 md:gap-11">
            <div className="flex justify-center items-center">
              <Image
                src={finance}
                height={120}
                width={120}
                alt="Finance Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_inner_icon}
                height={120}
                width={120}
                alt="IT Head"
                className="absolute z-10 w-[50px] sm:w-[70px] md:w-[120px]"
              />
              <Image
                src={head_outer_icon}
                height={150}
                width={150}
                alt="IT Head"
                className="absolute z-10 w-[75px] sm:w-[100px] md:w-[150px]"
              />
            </div>
            <div className="bg-[#060606FC]  pl-[15px] sm:pl-[40px] py-[10px] md:py-[20px] w-[80px] sm:w-[120px] md:w-[220px] rounded-tl-full rounded-bl-full sm:rounded-tr-full sm:rounded-br-full order-[-1] sm:order-[0]">
              <h2 className="text-[#FF7420] text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem] font-bold">
                Finance
              </h2>
              <h2 className="text-white text-[0.4rem] sm:text-[0.6rem] md:text-[1.2rem]">
                ALI MIAN
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heads;
