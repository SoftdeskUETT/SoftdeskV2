import React from "react";
import Image from "next/image";

import ellipse78 from "../../assets/home/Ellipse78.png";
import ellipse79 from "../../assets/home/Ellipse79.png";
import ellipse80 from "../../assets/home/Ellipse80.png";
import president from "../../assets/home/president.png";
import vice_president from "../../assets/home/vice_president.png";
import joint_secretary from "../../assets/home/joint_secretary.png";
import general_secretary from "../../assets/home/general_secretary.png";
import top_lead_icon from "../../assets/home/top_lead_icon.png";
import secretary_icon from "../../assets/home/secretary_icon.png";
import about from "../../assets/home/about.png";

const Cabinet = () => {
  return (
    <div id="cabinet" className=" pt-6 ">
      <h2 className="font-bold text-[2.1rem] text-center">
        Meet the <span className="text-[#FF7420]">Cabinet</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-11 md:items-center p-9">
        {/* <div className="  flex justify-center items-center"> */}
        <div className="min-h-[350px] md:min-h-[400px] flex justify-center items-center  w-[270px] sm:w-[370px] mx-auto">
          <Image
            src={ellipse78}
            height={150}
            width={150}
            alt="ellipse 78"
            className="absolute w-[120px] sm:w-[140px]"
          />
          <Image
            src={ellipse79}
            height={250}
            width={250}
            alt="ellipse 79"
            className="absolute w-[200px] sm:w-[250px]"
          />
          <Image
            src={ellipse80}
            height={350}
            width={350}
            alt="ellipse 80"
            className="absolute w-[300px] sm:w-[350px]"
          />
          <Image
            src={secretary_icon}
            height={45}
            width={45}
            alt="Secretary icon"
            className="absolute translate-x-[70px] translate-y-[-115px] sm:translate-x-[70px] sm:translate-y-[-160px]"
          />
          <Image
            src={president}
            height={110}
            width={110}
            alt="president"
            className="absolute w-[75px] sm:w-[80px]"
          />
          <div className="bg-white z-[10] absolute translate-x-[-70px] translate-y-[-10px]">
            <small className="text-[#096946] text-[8px] font-bold">
              President
            </small>
            <p className="text-[#2F4BDF] text-[8px] font-bold">
              MUBASHIR UR REHMAN
            </p>
          </div>
          <Image
            src={vice_president}
            height={80}
            width={80}
            alt="vice_president"
            className="absolute w-[55px] sm:w-[80px] translate-x-[-30px] translate-y-[90px] sm:translate-x-[-30px] sm:translate-y-[120px] z-[10] bg-white rounded-full"
          />
          <div className="bg-white z-[10] absolute translate-x-[50px] translate-y-[90px] sm:translate-x-[50px] sm:translate-y-[110px]">
            <small className="text-[#096946] text-[8px] font-bold">
              Vice. President
            </small>
            <p className="text-[#2F4BDF] text-[8px] font-bold">
              MUHAMMAD MAAZ KHALID
            </p>
          </div>
          <Image
            src={joint_secretary}
            height={80}
            width={80}
            alt="joint_secretary"
            className="absolute w-[55px] sm:w-[80px] translate-x-[-120px] translate-y-[-80px] sm:translate-x-[-170px] sm:translate-y-[-80px] bg-white rounded-full"
          />

          <div className="bg-white z-[10] absolute translate-x-[-60px] translate-y-[-90px] sm:translate-x-[-100px] sm:translate-y-[-100px]">
            <small className="text-[#096946] text-[8px] font-bold">
              Joint Secretary
            </small>
            <p className="text-[#2F4BDF] text-[8px] font-bold">
              MARYAM SHEHZAD
            </p>
          </div>
          <Image
            src={general_secretary}
            height={80}
            width={80}
            alt="general_secretary"
            className="absolute w-[55px] sm:w-[80px] translate-x-[140px] translate-y-[-30px] sm:translate-x-[180px] sm:translate-y-[-40px] bg-white rounded-full"
          />
          <div className="bg-white z-[10] absolute translate-x-[90px] translate-y-[-30px] sm:translate-x-[120px] sm:translate-y-[-60px]">
            <small className="text-[#096946] text-[8px] font-bold">
              General Secretary
            </small>
            <p className="text-[#2F4BDF] text-[8px] font-bold">ALI HAIDER</p>
          </div>
          <div className="bg-white z-[10] absolute flex justify-center items-center translate-x-[-120px] translate-y-[60px] sm:translate-x-[-140px] sm:translate-y-[80px]">
            <Image
              src={top_lead_icon}
              height={30}
              width={30}
              alt="Top lead icon"
            />
            <h2 className="text-[#2F4BDF] text-[8px]">Top Leads Heads</h2>
          </div>
        </div>
        {/* </div> */}
        <div className="w-[90%] sm:w-[90%] mx-auto  flex flex-col items-center justify-center gap-3 relative">
          <Image
            src={about}
            height={30}
            width={30}
            alt=""
            className="absolute -top-11 "
          />
          <h2 className="text-[1.2rem] sm:text-[1.8rem] font-bold sm:w-[90%] text-center sm:text-left">
            Manage everything in one workspace
          </h2>
          <div className="h-[2px] w-[50px] bg-[#FF7420]"></div>
          <p className="text-[#575757]">
            Planning, tracking and delivering your team&rsquo;s best work has
            never been easier. An integrated workspace that&rsquo;s simple to
            use, TeamFlow lets you spend less time managing your work and more
            time actually doing it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;
