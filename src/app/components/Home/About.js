import React from "react";
import Image from "next/image";
import community from "../../assets/home/community.png";
import code from "../../assets/home/code.png";
import events from "../../assets/home/events.png";
import about from "../../assets/home/about.png";
import hero_triangle from "../../assets/home/hero_triangle.png";
import hero_ellipse_2 from "../../assets/home/hero_ellipse_2.png";

const About = () => {
  return (
    <div id="about" className="pt-11 flex flex-col gap-[50px]">
      <h2 className="font-bold text-[2.1rem] text-center relative">
        <Image
          src={about}
          height={30}
          width={30}
          alt=""
          className="hidden md:block absolute left-[25%] lg:left-[35%] -top-3"
        />
        <Image
          src={hero_triangle}
          height={30}
          width={30}
          alt=""
          className="hidden md:block absolute left-[20%] -top-7"
        />
        <Image
          src={hero_ellipse_2}
          height={30}
          width={30}
          alt=""
          className="hidden md:block absolute right-7 top-11 "
        />
        <p className="h-[4px] w-[50px] bg-[#FF7420] mx-auto translate-x-[-80px] sm:translate-x-[-100px] -translate-y-[3px] rounded"></p>
        About <span className="text-[#FF7420]">Softdesk</span>
      </h2>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        <div className="flex flex-col gap-7 text-center">
          <div className="p-4 bg-[#FFBF22] w-[70px] flex justify-center items-center rounded-xl mx-auto">
            <Image src={community} height={100} width={100} alt="community" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Passionate Learners</h2>
            <p>
              We foster a vibrant community of passionate and curious students.
              We share a common love for technology, innovation, and creativity.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-center">
          <div className="p-4 bg-[#19D6D4] w-[70px] flex justify-center items-center rounded-xl mx-auto">
            <Image src={code} height={100} width={100} alt="code" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Passionate Learners</h2>
            <p>
              Whether you&apos;re into coding, content creation, design, or
              marketing, there&apos;s a spot for you. Our events cover diverse
              interests and skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 text-center">
          <div className="p-4 bg-[#FF8155] w-[70px] flex justify-center items-center rounded-xl mx-auto">
            <Image src={events} height={100} width={100} alt="events" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Passionate Learners</h2>
            <p>
              Join us for coding challenges, hackathons, workshops, and guest
              speaker events. Our activities are designed to inspire, challenge,
              and nurture your talents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
