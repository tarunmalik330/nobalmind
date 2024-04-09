'use-client'
import { react, useEffect, useState } from "react";
import Image from "next/image";
import { Exo_2 } from "next/font/google";
import Header from "../../public/components/Header";
import AboutUs from "../../public/components/AboutUs";
import Industries from "../../public/components/Industries";
import ContactUs from "../../public/components/ContactUs";
import Faq from "../../public/components/Faq";
import Newsletter from "../../public/components/Newsletter";
import Footer from "../../public/components/Footer";
import Preloader from "../../public/components/Preloader";
import backtotop from "../../public/assets/images/webp/BackToTop.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Home() {
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  // -------------------backToTop--------------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // // -------------------preloader------------------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <main
          className={`${exo_2.className} overflow-hidden`}
        >
          <Header />
          <AboutUs />
          <Industries />
          <ContactUs />
          <Faq />
          <Newsletter />
          <Footer />
          <div>
            <div onClick={() => top()} className={backToTop ? "backTopBtn shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center backTopBtn rounded-[50px] bg-btn-gradient cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[2%] z-30" : "hidden"}>
              <Image src={backtotop} alt='backtotop' />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
