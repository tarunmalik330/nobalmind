import Image from "next/image";
import contactImg from "../assets/images/webp/ContactImg.webp";
import { useState, useEffect } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
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
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      email: /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.lastname.test(formData.lastname)) {
      errors.lastname = "lastName is invalid.";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "email is invalid.";
    }
    if (!formData.message || formData.message.trim() === "") {
      errors.message = "Message is required.";
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
  });
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });
    setFormErrors({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div id="contact" className="xl:pt-[150px] sm:pt-[70px] pt-[50px]">
        <div className="container xl:max-w-[1164px] px-3 mx-auto">
          <div className="flex flex-row flex-wrap lg:justify-between items-center">
            <div className="lg:w-[42%] w-full">
              <h2
                className="ff_outfit font-semibold xl:text-[48px] md:text-[43px] sm:text-[38px] text-[28px] leading-[120%] text-[#131200] mb-4"
                data-aos="zoom-in-up"
              >
                Contact <span className="font-light">Us</span>
              </h2>
              <p
                className="font-normal text-[16px] text-[#131200] lg:max-w-[409px] leading-[150%] opacity-70 mb-[18px]"
                data-aos="zoom-in-up"
              >
                Feel free to contact us any time . We will get back to you as
                soon as we can!{" "}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-[11px] mb-4 w-full">
                  <div className="w-full" data-aos="zoom-in-up">
                    <label
                      htmlFor="name"
                      className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-2 border border-solid border-[#13120033] outline-none w-full rounded-[8px] mt-2"
                    />
                    {formErrors.name && (
                      <p className="font-normal text-[16px] leading-[150%] text-[#cc4646] opacity-70 mb-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div className="w-full" data-aos="zoom-in-up">
                    <label
                      htmlFor="lastname"
                      className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70"
                    >
                      LastName
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="py-3 px-2 border border-solid border-[#13120033] outline-none w-full rounded-[8px] mt-2"
                    />
                    {formErrors.lastname && (
                      <p className="font-normal text-[16px] leading-[150%] text-[#cc4646] opacity-70 mb-1">
                        {formErrors.lastname}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4" data-aos="zoom-in-up">
                  <label
                    htmlFor="email"
                    className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-2 border border-solid border-[#13120033] outline-none w-full rounded-[8px] mt-2"
                  />
                  {formErrors.email && (
                    <p className="error-messagefont-normal text-[16px] leading-[150%] text-[#cc4646] opacity-70 mb-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div className="mb-4" data-aos="zoom-in-up">
                  <label
                    htmlFor="message"
                    className="font-normal text-[16px] leading-[150%] text-[#131200] opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-2 border border-solid border-[#13120033] outline-none w-full rounded-[8px] mt-2 max-h-[135px] resize-none"
                    rows={5}
                  />
                  {formErrors.message && (
                    <p className="font-normal text-[16px] leading-[150%] text-[#cc4646] opacity-70 mb-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <div data-aos="zoom-in-up">
                  <button
                    type="submit"
                    className="sm:text-[16px] text-[14px] font-semibold leading-[150%] text-[#FDFDFF] bg-btn-gradient border-none sm:py-[14px] py-[11px] sm:px-6 px-[21px] rounded-[4px] ff_outfit hover:shadow-[0_3px_20px_rgba(168,_84,_233,_1)] transition-all ease-linear duration-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-[52.5%] sm:w-11/12 md:w-9/12 w-full pt-8 lg:pt-0">
              <Image
                src={contactImg}
                alt="contactImg"
                className="w-full h-full max-sm:h-[250px] max-sm:object-cover rounded-[12px]"
                data-aos="zoom-in-left"
              />
            </div>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm z-40">
          <div className="md:p-10 p-4 bg-[#000000] flex flex-col items-center justify-center gap-7 rounded-[8px]">
            <p className="sm:text-[24px] text-[20px] font-semibold text-[#FDFDFF] leading-[120%]">
              Form submitted successfully!
            </p>
            <button
              onClick={handlePopupClose}
              className="py-2 px-4 bg-white btn_1 rounded-lg text-[#000000] ff_outfit font-medium text-[16px] leading-[150%] mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
