"use client";
import { Stars, OneSvg, TwoSvg, ThreeSvg } from "./IconImg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import PlanningImg from "../assets/images/png/PlanningImg.png";
import Image from "next/image";
import relativeImg from "../assets/images/png/relativeimg.png";

export default function Industries() {
  var settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        id="choose"
        className="xl:pt-[150px] sm:pt-[70px] pt-[50px] relative"
      >
        <Image
          src={relativeImg}
          alt="relativeImg"
          className="absolute max-w-[80px] w-full left-[35px] top-[11%] md:block hidden"
        />
        <Image
          src={relativeImg}
          alt="realativeImg"
          className="absolute max-w-[80px] w-full lg:block hidden bottom-0 right-[20px]"
        />
        <div className="container xl:max-w-[1164px] px-3 mx-auto">
          <div
            className="flex justify-center items-center gap-[6px] pb-2"
            data-aos="zoom-in-up"
          >
            <Stars />
            <p className="capitalize text-[#131200] font-normal text-[16px] leading-[150%]">
              Why Choose Us
            </p>
          </div>
          <h2
            className="text-black font-semibold text-center leading-[120%] xl:text-[48px] md:text-[43px] sm:text-[38px] text-[28px] sm:mb-[52px] mb-[20px] ff_outfit"
            data-aos="zoom-in-up"
          >
            {" "}
            <span className="font-light lg:block"> Driving Innovation & </span>
            Transforming Industries
          </h2>
          <div>
            <Slider {...settings}>
              <div className="px-3 overflow-hidden">
                <div className="p-[18px] rounded-[12px] max-h-[208px] w-full h-full box-hover border border-[#a854e933] border-solid cursor-pointer">
                  <div className="w-[36px] h-[36px] bg-[#a854e93d] rounded-[50px] flex justify-center items-center mb-[11px]">
                    <div className="w-[24px] h-[24px] bg-[#FDFDFD] rounded-[50px] flex justify-center items-center">
                      <OneSvg />
                    </div>
                  </div>
                  <p className="mb-1 capitalize leading-[120%] text-[#131200] ff_outfit font-normal text-[20px]">
                    Customer-Centric
                  </p>
                  <p className="text-[#131200] opacity-70 text-[16px] font-normal leading-[150%] pb-[24px]">
                    Prioritize and anticipate client needs, ensuring our
                    technology solutions consistently deliver unparalleled
                    value.
                  </p>
                </div>
              </div>
              <div className="px-3 overflow-hidden">
                <div className="p-[18px] rounded-[12px] max-h-[208px] w-full h-full box-hover border border-[#a854e933] border-solid cursor-pointer">
                  <div className="w-[36px] h-[36px] bg-[#a854e93d] rounded-[50px] flex justify-center items-center mb-[11px]">
                    <div className="w-[24px] h-[24px] bg-[#FDFDFD] rounded-[50px] flex justify-center items-center">
                      <TwoSvg />
                    </div>
                  </div>
                  <p className="mb-1 capitalize leading-[120%] text-[#131200] ff_outfit font-normal text-[20px]">
                    Workplace Harmony
                  </p>
                  <p className="text-[#131200] opacity-70 text-[16px] font-normal leading-[150%] pb-[24px]">
                    Create a nurturing and peaceful environment for our staff,
                    fostering growth, well-being, and unity. We are more than a
                    team; we are a family.
                  </p>
                </div>
              </div>
              <div className="px-3 overflow-hidden">
                <div className="p-[18px] box-hover max-h-[208px] w-full h-full rounded-[12px] border border-[#a854e933] border-solid cursor-pointer">
                  <div className="w-[36px] h-[36px] bg-[#a854e93d] rounded-[50px] flex justify-center items-center mb-[11px]">
                    <div className="w-[24px] h-[24px] bg-[#FDFDFD] rounded-[50px] flex justify-center items-center">
                      <ThreeSvg />
                    </div>
                  </div>
                  <p className="mb-1 capitalize leading-[120%] text-[#131200] ff_outfit font-normal text-[20px]">
                    Ethical Leadership
                  </p>
                  <p className="text-[#131200] opacity-70 text-[16px] font-normal leading-[150%] pb-[24px]">
                    Maintain the highest standards in all practices, ensuring
                    our solutions are responsible, safe, and transparent.
                  </p>
                </div>
              </div>
              <div className="px-3 overflow-hidden">
                <div className="p-[18px] box-hover max-h-[208px] w-full h-full rounded-[12px] border border-[#a854e933] border-solid cursor-pointer">
                  <div className="w-[36px] h-[36px] bg-[#a854e93d] rounded-[50px] flex justify-center items-center mb-[11px]">
                    <div className="w-[24px] h-[24px] bg-[#FDFDFD] rounded-[50px] flex justify-center items-center">
                      <ThreeSvg />
                    </div>
                  </div>
                  <p className="mb-1 capitalize leading-[120%] text-[#131200] ff_outfit font-normal text-[20px]">
                    Ethical Leadership
                  </p>
                  <p className="text-[#131200] opacity-70 text-[16px] font-normal leading-[150%] pb-[24px]">
                    Maintain the highest standards in all practices, ensuring
                    our solutions are responsible, safe, and transparent.
                  </p>
                </div>
              </div>
            </Slider>
            <div className="pt-[59px]">
              <Image
                src={PlanningImg}
                alt="PlanningImg"
                className="w-full max-sm:h-[280px] max-sm:object-cover rounded-3xl"
                data-aos="zoom-in-up"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
