"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false); // State variable to control drawer visibility

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div className="h-[60px] bg-[#191A19] w-full flex justify-between relative z-50">
      <div className="p-4">
        <Image
          src={Logo}
          height={100}
          width={100}
          alt="Navbar logo"
          className="h-[50px] w-[60px] md:h-[70px] md:w-[90px]"
        />
      </div>
      <div className="h-[60px] w-[90%] sm:w-[50%] md:w-[80%] lg:w-[70%] text-white bg-[#191A19] shadow-lg shadow-black rounded-full rounded-tr-none rounded-br-none flex items-center justify-between px-8 py-4">
        <div className="hidden md:flex bg-inherit gap-5">
          <Link
            href="/"
            className="cursor-pointer bg-inherit"
            onClick={closeDrawer}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="cursor-pointer bg-inherit"
            onClick={closeDrawer}
          >
            About Us
          </Link>
          <Link
            href="/#cabinet"
            className="cursor-pointer bg-inherit"
            onClick={closeDrawer}
          >
            Cabinet
          </Link>
          <Link
            href="/#courses"
            className="cursor-pointer bg-inherit"
            onClick={closeDrawer}
          >
            Courses
          </Link>
          <Link
            href="/events"
            className="cursor-pointer bg-inherit"
            onClick={closeDrawer}
          >
            Events
          </Link>
          <Link
            href="/gallery"
            className="cursor-pointer bg-inherit"
            onClick={closeDrawer}
          >
            Gallery
          </Link>
        </div>
        {/*  */}
        <Link
          href="/contact"
          className="bg-[#FF7420] px-3 rounded-xl h-[40px] flex items-center"
          onClick={closeDrawer}
        >
          Contact Us
        </Link>
        <GiHamburgerMenu
          className="md:hidden text-[30px] text-white"
          onClick={() => setShowDrawer(!showDrawer)}
        />
      </div>

      {
        <div
          className={`fixed z-[100] top-0 left-0 md:hidden w-[300px] h-screen bg-white overflow-hidden transition-transform transform ${
            showDrawer ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <IoClose
            className="text-[30px] text-black absolute right-4 top-4"
            onClick={() => setShowDrawer(false)}
          />
          <div className="p-4">
            <Link
              href="/"
              className="block py-2 text-black"
              onClick={closeDrawer}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block py-2 text-black"
              onClick={closeDrawer}
            >
              About Us
            </Link>
            <Link
              href="/#cabinet"
              className="block py-2 text-black"
              onClick={closeDrawer}
            >
              Cabinet
            </Link>
            <Link
              href="/#courses"
              className="block py-2 text-black"
              onClick={closeDrawer}
            >
              Courses
            </Link>
            <Link
              href="/events"
              className="block py-2 text-black"
              onClick={closeDrawer}
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className="block py-2 text-black"
              onClick={closeDrawer}
            >
              Gallery
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
