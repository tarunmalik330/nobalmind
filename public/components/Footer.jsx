import Image from "next/image";
import pagelogo from "../assets/images/webp/FooterLogo.webp";
import { Facebook, Insta, Twitter, LinkedIn } from "../components/IconImg";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-[#131200]">
        <div className="container xl:max-w-[1164px] mx-auto px-3 sm:mt-[-86px]">
          <div className="flex flex-row md:justify-between flex-wrap sm:pt-[138px] pt-[50px] pb-[52px]">
            <div className="md:w-4/12 sm:6/12 w-full">
              <a href="" className="sm:pb-[28px] pb-4 inline-block">
                <Image
                  src={pagelogo}
                  alt="pagelogo"
                  className="w-full sm:max-w-[241px] max-w-[180px]"
                />
              </a>
              <p className="font-normal text-[16px] text-white capitalize mb-2 leading-[150%]">
                Follow Us
              </p>
              <div className="flex gap-4">
                <Facebook />
                <Insta />
                <Twitter />
                <LinkedIn />
              </div>
            </div>
            <div className="lg:w-[32%] md:w-7/12 sm:6/12 w-full pt-7 md:pt-0">
              <div className="flex lg:justify-between sm:gap-[50px] gap-12">
                {" "}
                <ul className="flex flex-col gap-[14px]">
                  <h4 className="ff_outfit font-semibold text-[16px] text-white leading-[150%] mb-4 max-sm:mb-0">
                    Maine
                  </h4>
                  <Link
                    href="#home"
                    className="font-normal capitalize text-[16px] opacity-70 hover:opacity-100 transition-all ease-linear duration-500 text-[#FDFDFF] leading-[150%]"
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="font-normal capitalize text-[16px] opacity-70 hover:opacity-100 transition-all ease-linear duration-500 text-[#FDFDFF] leading-[150%]"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#service"
                    className="font-normal capitalize text-[16px] opacity-70 hover:opacity-100 transition-all ease-linear duration-500 text-[#FDFDFF] leading-[150%]"
                  >
                    services
                  </Link>
                  <Link
                    href="#choose"
                    className="font-normal capitalize text-[16px] text-nowrap opacity-70 hover:opacity-100 transition-all ease-linear duration-500 text-[#FDFDFF] leading-[150%]"
                  >
                    Why Choose Us
                  </Link>
                </ul>
                <ul className="flex flex-col gap-[14px]">
                  <h4 className="ff_outfit font-semibold text-[16px] text-white leading-[150%] mb-4 max-sm:mb-0">
                    Legal
                  </h4>
                  <Link
                    href=""
                    className="font-normal capitalize text-[16px] text-nowrap opacity-70 hover:opacity-100 transition-all ease-linear duration-500 text-[#FDFDFF] leading-[150%]"
                  >
                    Term & Conduction
                  </Link>
                  <Link
                    href=""
                    className="font-normal capitalize text-[16px] text-nowrap opacity-70 hover:opacity-100 transition-all ease-linear duration-500 text-[#FDFDFF] leading-[150%]"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#contact"
                    className="font-normal capitalize text-[16px] opacity-70 hover:opacity-100 transition-all ease-linear duration-500 text-[#FDFDFF] leading-[150%]"
                  >
                    Contact
                  </Link>
                  <Link
                    href="tel:6295550129"
                    className="font-normal capitalize text-[16px] opacity-70 hover:opacity-100 transition-all ease-linear duration-500 text-[#FDFDFF] leading-[150%]"
                  >
                    (629) 555-0129
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-white opacity-30"></div>
        <p className="pt-[16px] pb-[35px] opacity-70 text-white font-normal text-[14px] leading-[150%] px-3 text-center">
          © Copyright 2023 Noble Mind | All rights reserved.{" "}
        </p>
      </div>
    </>
  );
}
