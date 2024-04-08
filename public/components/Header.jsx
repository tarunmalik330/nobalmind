"use client";
import Link from "next/link";
import { Logo, Stars } from "./IconImg";
import { useState, useEffect } from "react";
import Commonbtn from "./Commonbtn";
import Image from "next/image";
import hero from "../assets/images/png/hero.png";
import relativeImg from "../assets/images/png/relativeImg.png";

export default function Header() {
  const [nav, setNav] = useState(true);
  const [_document, set_document] = useState(null);
  useEffect(() => {
    set_document(document);
    if (nav === false) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  });

  return (
    <>
      <div className="bg-white lg:bg-[url('/assets/images/png/hero-bg-img.webp')] lg:bg-contain lg:bg-no-repeat xl:h-[810px] lg:h-[700px] lg:bg-top relative">
        <Image
          src={relativeImg}
          alt="relativeImg"
          className="absolute bottom-[-9%] left-[35px] max-w-[80px] w-full lg:block hidden"
        />
        <div className="container xl:max-w-[1164px] px-3 mx-auto relative z-10">
          <nav className="flex items-center justify-between sm:py-[19px] py-4">
            <Link href={"/"}>
              <Logo />
            </Link>
            <div
              className={`${
                nav ? "left-[-100%]" : "left-0"
              } flex max-lg:fixed max-lg:top-0 max-lg:h-full z-50 max-lg:w-full max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-white max-lg:min-h-screen max-lg:flex-col gap-10 items-center justify-center`}
            >
              <ul className="flex items-center gap-6 max-lg:flex-col">
                <Link
                  onClick={() => setNav(!nav)}
                  href={"#home"}
                  className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href={"#about"}
                  className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative"
                >
                  About Us
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href={"#service"}
                  className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative"
                >
                  Services
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href={"#choose"}
                  className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative"
                >
                  Why Choose Us
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href={"#blog"}
                  className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative"
                >
                  Blogs
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href={"#faq"}
                  className="text-[16px] text-[#131200] leading-[150%] hover:opacity-100 opacity-70 ease-linear transition-all duration-300 after:absolute after:transition-all after:ease-linear after:duration-300 after:bg-[#131200] after:w-0 after:left-[50%] after:h-[1.7px] after:rounded-[1px] after:bottom-[-1px] hover:after:w-full hover:after:left-0 relative"
                >
                  FAQ
                </Link>
              </ul>
              <Commonbtn btnname="Contact Us" />
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden w-[28px] h-[20px] relative z-50 flex justify-between flex-col cursor-pointer"
            >
              <span
                className={`${
                  nav
                    ? "h-[3.4px] w-full duration-300 rounded-[3px] bg-[#131200] ease-linear transition-all"
                    : "transition-all duration-300 bg-[#131200] rounded-[3px] ease-linear h-[3.4px] w-full rotate-[50deg] translate-y-[14px]"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "h-[3.4px] w-full bg-[#131200] duration-300 rounded-[3px] ease-linear transition-all"
                    : "duration-300 rounded-[3px] bg-[#131200] ease-linear transition-all hidden"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "h-[3.4px] w-full duration-300 bg-[#131200] rounded-[3px] ease-linear transition-all"
                    : "transition-all duration-300 bg-[#131200] rounded-[3px] ease-linear h-[3.4px] w-full rotate-[-50deg] translate-y-[-50%]"
                }`}
              ></span>
            </div>
          </nav>
          <div
            id="home"
            className="xl:pt-[138px] md:pt-[90px] sm:py-[50px] pt-[20px] pb-[40px] relative z-10"
          >
            <div
              className="flex items-center gap-[6px] mb-2"
              data-aos="zoom-in-up"
            >
              <Stars />
              <p className="text-[16px] font-normal leading-[150%] text-[#131200]">
                AI With Noble Mind
              </p>
            </div>
            <h2
              className="ff_outfit sm:text-[64px] text-[36px] font-light text-black leading-[120%] max-w-[584px]"
              data-aos="zoom-in-up"
            >
              Inspiring Innovation, Elevating Solutions –{" "}
              <span className="font-semibold">Noble Mind"</span>
            </h2>
            <p
              className="text-[16px] leading-[150%] text-black font-normal opacity-70 max-w-[584px] sm:mt-4 mt-3"
              data-aos="zoom-in-up"
            >
              At Noble Mind is a forward-thinking AI specialised company
              dedicated to reshaping the future of how we live, work, and learn.
              Our mission is to create ground-breaking AI solutions for
              Healthcare, Education, and beyond, aligning with Saudi Arabia’s
              Vision 2030.”
            </p>
          </div>
        </div>
        <div className="lg:hidden block absolute top-0 left-0 right-0 bottom-0 z-[1]">
          <Image
            src={hero}
            alt="hero"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </div>
    </>
  );
}
