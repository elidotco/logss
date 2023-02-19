/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="hero h-full">
      <div className="absolute -top-[370px] right-0    rotate-180 rounded-t-full  bg-green-400 w-[950px] h-[950px]">
        {/* <img src={line} alt="line" className="w-full" /> */}
      </div>

      <div
        className="flex  items-center h-[700px] md:flex-row justify-between  flex-col px-5 "
        id="home"
      >
        <div className="z-10  my-14">
          <p className="md:text-5xl text-3xl pt-20 animate__animated animate__backInLeft font-bold md:pl-20 md:px-20 text-white">
            Book A Truck For your Waste Collection
          </p>
          <p className="lg:text-3xl text-xl py-2 animate__animated animate__backInLeft font-light text-white md:px-40 md:pl-20 ">
            Book A Truck For your Waste Collection
          </p>
          <div className="mt-5 md:flex hidden  gap-10 ml-20">
            <div
              className="32 items-center h-12 flex flex-row  px-6 py-3 
                 rounded-full bg-green-400 text-white text-xl
              "
            >
              <a
                href="#"
                className="flex-row flex items-center justify-between gap-x-2"
              >
                <AiFillApple />
                Appsore
              </a>
            </div>
            <div
              className="32 items-center h-12 flex flex-row  px-6 py-3 
                 rounded-full border text-white text-xl
              "
            >
              <a
                href="#"
                className="flex-row flex items-center justify-between gap-x-2"
              >
                <IoLogoGooglePlaystore />
                PLayStore
              </a>
            </div>
          </div>
        </div>

        <div className="w-full z-10 md:w-2/6 h-[500px] ">
          <img
            src="/images/im/hero.png"
            alt="alt"
            className=" w-4/5 h-[500px]  "
          />
        </div>
      </div>

      {/* <div className=" -rotate-1 ml-20 mb-20">
        <div className="h-7 w-14 bg-[#007F66] relative rounded translate-x-px -top-10 skew-y-12"></div>
        <div className="h-7 w-14 bg-green-500 relative rounded -bottom-10-right-5 skew-y-12"></div>
      </div> */}
    </div>
  );
};

export default Hero;
