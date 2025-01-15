import React from "react";
import Hero from "../assets/images/HeroImage.png";
import Navigation from "./layout/Navigation";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <>
      <Navigation />
      <div
        className="bg-[#7F4F24] md:mt-9 mt-12 w-full  px-6 md:px-12 py-10 md:py-6"
        id="home"
      >
        <div className=" flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left ">
            <h1 className="tracking-normal  text-4xl md:text-5xl font-bold leading-tight text-white">
              Indulge in{" "}
              <span className="text-[#E58C3C] font-bold">Sweet Delights</span>{" "}
              at Lula’s Bakery
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-white">
              Welcome to{" "}
              <span className="text-[#CC7E37] font-bold">
                Lula’s Cake and Bakery Center!
              </span>{" "}
              Order from our delightful range of artisanal treats, including
              cakes , cupcakes , cookies , and donuts , all made with the finest
              ingredients to make your moments sweeter!
            </p>
            <div className=" mt-6 ">
              <Link
                to="menu"
                spy={true}
                smooth={true}
                offset={-50} // Adjust offset based on header height
                duration={500}
              >
                <button
                  aria-label="Explore Menu"
                  className="transition duration-150 ease-in-out text-lg font-semibold py-3 px-10 rounded-lg bg-[#E58C3C] text-white hover:bg-[#d38642] hover:shadow-lg hover:scale-105 shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-[#F7F4F3] focus:ring-[#d38642]"
                >
                  Explore Menu
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-ful flex justify-center">
            <img
              src={Hero}
              alt="herosection"
              className="rounded-lg hover:scale-95 transition duration-75 ease-in-out w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
