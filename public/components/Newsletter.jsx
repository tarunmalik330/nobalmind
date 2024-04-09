"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import relativeimg from "../assets/images/webp/relativeimg.webp";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      email: /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
    };
    const errors = {};
    if (!regex.email.test(formData.email)) {
      errors.email = "email is invalid.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const [_document, set_document] = useState(null);
  useEffect(() => {
    set_document(document);
    if (showSuccessPopup === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, []);
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      email: "",
    });
    setFormErrors({
      email: "",
    });
  };
  return (
    <>
      <div
        id="service"
        className="relative max-sm:bg-btn-gradient max-sm:my-[50px]"
      >
        <Image
          src={relativeimg}
          alt="relativeimg"
          className="absolute max-w-[80px] w-full top-[15px] left-[35px] md:block hidden"
        />
        <div className="continer mx-auto xl:max-w-[1164px] px-3 xl:pt-[150px] sm:pt-[70px] relative z-[1]">
          <div className="sm:py-[60px] py-[35px] sm:px-0 px-3 rounded-[20px] sm:bg-[url('/assets/images/png/bgNewsletter.png')] bg-cover bg-center bg-no-repeat">
            <h2
              className="text-center xl:text-[48px] md:text-[43px] sm:text-[38px] text-[28px] text-[#FDFDFF] ff_outfit font-light leading-[120%] mb-2"
              data-aos="zoom-in"
            >
              Subscribe to our{" "}
              <span className="font-semibold">Newsletter!</span>
            </h2>
            <p
              className="text-center text-[#FDFDFF] text-[16px] font-normal sm:mb-[36px] mb-[25px] leading-[150%]"
              data-aos="zoom-in"
            >
              Be the first to get exclusive offers and the latest news.
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-[#FFFFFF0D] border border-solid border-[#FDFDFF33] max-w-[448px] w-full mx-auto lg:mt-[36px] mt-[24px] p-[10px] rounded-md flex items-center relative"
              data-aos="zoom-in"
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                className="sm:p-[14px] p-1 border-none outline-none bg-transparent ff_outfit text-[16px] font-semibold text-[#FDFDFF] leading-[150%] placeholder:text-[#fdfdff] placeholder:font-semibold placeholder:text-[16px] placeholder:ff_outfit w-full"
              />
              <button
                type="submit"
                className="sm:py-[14px] py-[11px] sm:px-[24px] px-[21px] border rounded-[4px] border-solid border-[#FDFDFF] leading-[150%] sm:text-[16px] text-[14px] font-semibold text-[#FDFDFF] hover:bg-[#FDFDFF] hover:text-[#9255d9] transition-all duration-300 ease-linear "
              >
                Subscribe
              </button>
              {formErrors.email && (
                <p className="absolute -bottom-9 left-0 font-normal text-[16px] leading-[150%] text-black opacity-70 mb-1">
                  {formErrors.email}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm z-40">
          <div className="md:p-10 p-4 bg-[#a854e9] flex flex-col items-center justify-center gap-7 rounded-[8px]">
            <p className="text-[24px] font-semibold text-[#FDFDFF] leading-[120%]">
              Form submitted successfully!
            </p>
            <button
              onClick={handlePopupClose}
              className="py-2 px-4 bg-white btn_1 rounded-lg text-[#A854E9] text-[16px] leading-[150%] mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
