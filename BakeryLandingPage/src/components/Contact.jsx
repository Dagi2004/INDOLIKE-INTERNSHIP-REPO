import React from "react";
import amico from "../assets/images/amico.png";
const Contact = () => {
  return (
    <div
      className="  mt-16 mx-auto flex flex-col-reverse md:flex-row rounded-lg md:max-w-4xl max-w-sm p-6 items-center justify-between "
      id="contact"
    >
      {/* Form */}
      <div className="w-full md:w-1/2 p-4">
        <div className="text-center mb-6">
          <p className="bg-Yellowish max-w-[83px] px-2 text-[12px] rounded-md text-foundationblack mx-auto">
            Contact Us
          </p>
          <h1 className="text-[28px] font-bold leading-[40px] text-[#7F4F24]">
            Get in Touch!
          </h1>
          <p className="text-[13px] font-[400] leading-7 text-[#7F4F24] mt-2">
            We’re excited to hear from you—whether you have questions, want to
            place a custom order, or need assistance for your next celebration,
          </p>
        </div>
        <form>
          {/* First Name */}
          <label
            htmlFor="firstName"
            className="text-sm text-lightBlue block mt-4"
          >
            Full Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter Full Name"
            className=" bg-[#7F4F24] opacity-30 border border-[#7F4F24] text-black font-light rounded-md p-2 w-full mt-2"
          />

          <label htmlFor="email" className="text-sm text-lightBlue block mt-4">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className=" bg-[#7F4F24] opacity-30 text-white font-normal rounded-md p-2 w-full mt-2 mb-4"
          />
          <label
            htmlFor="textarea"
            id="textarea"
            name="textarea"
            className=" text-black rounded-md p-2 w-full mb-7 "
          >
            Message
          </label>
          <textarea
            id="textarea"
            name="textarea"
            rows="5"
            cols="33"
            placeholder="Leave Us a Message"
            className=" bg-[#7F4F24] opacity-30 text-black font-normal rounded-md p-2 w-full mt-2"
          >
            Leave Us a Message
          </textarea>
          <div className="mt-4 mx-auto">
            <button className="bg-[#7F4F24] text-white font-semibold text-[14px] md:text-[16px] px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Image and Contact Details */}
      <div className="w-full md:w-1/2 mt-6 md:ml-10 md:mt-0">
        <img
          src={amico}
          alt="Contact Me Illustration"
          className="rounded-lg md:w-[555px] md:h-[351px] w-[420px] h-[260px]"
        />
      </div>
    </div>
  );
};

export default Contact;
