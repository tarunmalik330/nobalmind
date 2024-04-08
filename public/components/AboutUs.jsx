import Image from "next/image";
import AboutImg from "../assets/images/png/aboutImg.png";
import { Stars } from "./IconImg";
import Commonbtn from "./Commonbtn";
import relativeImg from "../assets/images/png/relativeimg.png";

export default function AboutUs() {
  return (
    <>
      <div
        id="about"
        className="container mx-auto xl:max-w-[1164px] px-3 xl:pt-[150px] sm:pt-[70px] pt-[50px]"
      >
        <div className="flex flex-row flex-wrap lg:justify-between items-center">
          <div className="lg:w-[48.7%] md:w-[70%] sm:w-[80%] w-11/12">
            <Image
              src={AboutImg}
              alt="AboutImg"
              className="w-full rounded-tr-[50px]"
              data-aos="zoom-in-right"
            />
          </div>
          <div className="xl:w-[45.5%] lg:w-[48%] w-full flex justify-center pt-7 lg:pt-0 relative">
            <Image
              src={relativeImg}
              alt="relativeImg"
              className="absolute max-w-[80px] w-full lg:block hidden right-[-16%] bottom-[5px]"
            />
            <div>
              <div className="flex gap-[6px] pb-2" data-aos="fade-down">
                <Stars />
                <p className="font-normal text-[16px] leading-[150%] text-[#131200] capitalize">
                  About Us
                </p>
              </div>
              <h2
                className="font-light ff_outfit xl:text-[48px] md:text-[43px] sm:text-[38px] text-[28px] leading-[120%] lg:max-w-[521px] text-black capitalize xl:mb-4 mb-3"
                data-aos="fade-down"
              >
                Pioneering Vision & Mission{" "}
                <span className="font-semibold">
                  -Driven Sectoral Innovation
                </span>
              </h2>
              <p
                className="lg:max-w-[491px] font-normal text-[16px] text-black opacity-70 leading-[150%] xl:mb-[42px] mb-[25px]"
                data-aos="fade-down"
              >
                Imagine a future in Saudi Arabia influenced by the potential of
                Al, with Noble Mind at the forefront of this transformation.
                Healthcare stands to gain with the promise of enhanced data
                precision. In education, there's the potential for
                individualized learning experiences. Finance could witness
                seamless transactions, and entertainment may revel in customized
                experiences. Through Al's promise, transportation could innovate
                and cities might adapt smarter infrastructures. In every domain,
                the vision of Noble Mind hints at a brighter, more efficient
                nation.
              </p>
              <div data-aos="fade-down">
                <Commonbtn btnname="Read More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
