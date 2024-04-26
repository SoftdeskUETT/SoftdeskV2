"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import CourseCard from "./CourseCard";

import WebDesigningImg from "../../assets/home/CourseCard/WebDesignImg.jpg";
import DataScienceImg from "../../assets/home/CourseCard/DataScienceImg.jpg";
import WebDevImg from "../../assets/home/CourseCard/WebDevImg.jpg";
import CyberImg from "../../assets/home/CourseCard/CyberImg.jpg";
import CloudImg from "../../assets/home/CourseCard/CloudImg.jpg";
import FlutterImg from "../../assets/home/CourseCard/FlutterImg.jpg";

import DataScienceHead2 from "../../assets/home/CourseCard/DataScienceHead2.jpeg";
import DataScienceHead from "../../assets/home/CourseCard/DataScienceHead.jpeg";
import WebDevHead from "../../assets/home/CourseCard/WebDevHead.jpg";
import CloudHead from "../../assets/home/CourseCard/CloudHead2.jpg";
import CyberHead from "../../assets/home/CourseCard/CyberHead.jpeg";
import WebDevHead2 from "../../assets/home/CourseCard/WebHead2.jpeg";
import appDevHead from "../../assets/home/CourseCard/appDeveloper.jpeg";
import designer from "../../assets/home/CourseCard/designer.jpg";

const courseData = [
  {
    courseImageUrl: WebDesigningImg,
    courseTitle: "Design",
    courseHeading: "UI/UX Figma",
    courseDocumentUrl:
      "https://magnetic-opal-835.notion.site/UI-UX-Roadmap-07b95de2056a40f5bcd48585fb403b9c",
    courseDescription:
      "Learn how to apply development principles to your website designs.",
    courseHeadName: "Arslan Niazi",
    courseHeadSession: "20 session SED",
    courseHeadImgUrl: designer,
  },
  {
    courseImageUrl: DataScienceImg,
    courseTitle: "Data",
    courseHeading: "Data Science",
    courseDocumentUrl: "/DataScienceRoadmap.pdf",
    courseDescription:
      "Dive into the world of data science, where every dataset holds the keys to unlock infinite possibilities and insights.",
    courseHeadName: "Syed Ali Taqi",
    courseHeadSession: "21 session SED",
    courseHeadImgUrl: DataScienceHead2,
  },
  {
    courseImageUrl: WebDevImg,
    courseTitle: "Development",
    courseHeading: "Full Stack Development",
    courseDocumentUrl: "WebDevelopmentRoadmap.pdf",
    courseDescription:
      "Dive into the world of full-stack web development, where each click becomes a solution, sparking innovation and exploration.",
    courseHeadName: "M.Ammar Mubashir",
    courseHeadSession: "21 session SED",
    courseHeadImgUrl: WebDevHead,
  },
  {
    courseImageUrl: DataScienceImg,
    courseTitle: "Data",
    courseHeading: "Data Science",
    courseDocumentUrl: "DataScienceRoadmap.pdf",
    courseDescription:
      "Dive into the world of data science, where every dataset contains valuable information waiting to be discovered and used to solve problems.",
    courseHeadName: "Abdullah",
    courseHeadSession: "21 session SED",
    courseHeadImgUrl: DataScienceHead,
  },
  {
    courseImageUrl: CyberImg,
    courseTitle: "Security",
    courseHeading: "Cyber Security",
    courseDocumentUrl: "CyberSecurityRoadmap.pdf",
    courseDescription:
      "Learn the fundamental concepts of Cyber Security and Ethical Hacking from scratch.",
    courseHeadName: "M.Abdur Raffay",
    courseHeadSession: "21 session SED",
    courseHeadImgUrl: CyberHead,
  },
  {
    courseImageUrl: WebDevImg,
    courseTitle: "Development",
    courseHeading: "Full Stack Development",
    courseDocumentUrl: "DataScienceRoadmap.pdf",
    courseDescription:
      "Dive into the world of full-stack web development, where every interaction sparks innovative solutions and fosters exploration.",
    courseHeadName: "Syed Moazam Ali",
    courseHeadSession: "21 session SED",
    courseHeadImgUrl: WebDevHead2,
  },
  {
    courseImageUrl: CloudImg,
    courseTitle: "Cloud",
    courseHeading: "Cloud Computing",
    courseDocumentUrl: "CloudComputingRoadmap.pdf",
    courseDescription:
      "Master cloud computing by grasping its core concepts, understanding its infrastructure, and unlocking its transformative potential.",
    courseHeadName: "Hamza Sajid",
    courseHeadSession: "21 session SED",
    courseHeadImgUrl: CloudHead,
  },
  {
    courseImageUrl: FlutterImg,
    courseTitle: "Development",
    courseHeading: "App Development",
    courseDocumentUrl: "FlutterRoadmap.pdf",
    courseDescription:
      "Dive into the world of full-stack web development, where every interaction sparks innovative solutions and fosters exploration.",
    courseHeadName: "Faheem Abbass",
    courseHeadSession: "20 session SED",
    courseHeadImgUrl: appDevHead,
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        mousewheel={true} // Enable mousewheel control
        keyboard={true} // Enable keyboard control
        breakpoints={{
          740: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Keyboard, Mousewheel]}
        className=" p-5"
      >
        {courseData.map((data) => (
          <SwiperSlide key={data.courseHeadName}>
            <CourseCard data={data} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Slider;
