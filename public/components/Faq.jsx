import Frequently from "./Frequently";
import Image from "next/image";
import relativeimg from "../assets/images/webp/relativeimg.webp";

export default function Faq() {
  return (
    <>
      <div id="faq" className="xl:pt-[150px] sm:pt-[70px] pt-[50px] relative">
        <Image
          src={relativeimg}
          alt="relativeimg"
          className="absolute max-w-[80px] w-full top-[12%] left-[35px] md:block hidden"
        />
        <Image
          src={relativeimg}
          alt="relativeimg"
          className="absolute max-w-[80px] w-full bottom-[17%] lg:block hidden right-[20px]"
        />
        <div className="container xl:max-w-[1164px] mx-auto px-3 sm:mb-[52px] mb-[30px]">
          <h2
            className="ff_outfit font-lignt xl:text-[48px] md:text-[43px] sm:text-[38px] text-[28px] leading-[120%] text-[#131200] mb-4 capitalize text-center"
            data-aos="zoom-in"
          >
            Frequently <span className="font-semibold">Asked Questions</span>
          </h2>
          <p
            className="font-normal text-[16px] leading-[150%] text-[#131200] lg:max-w-[497px] text-center mx-auto opacity-70"
            data-aos="zoom-in"
          >
            Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu
            volutpat mi leo. Nibh nisl consequat metus.
          </p>
        </div>
        <Frequently />
      </div>
    </>
  );
}
