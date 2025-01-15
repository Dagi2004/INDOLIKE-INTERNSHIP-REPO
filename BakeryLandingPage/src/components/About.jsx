import React from "react";
import Lula from "../assets/images/lula.png";
import Quality from "../assets/images/QualityIngredients.png";
import Fresh from "../assets/images/Fresh.png";
import Art from "../assets/images/Artistry.png";

import wedding from "../assets/images/weddingserv.png";
import service from "../assets/images/servicebak.png";
import servbak from "../assets/images/servicebakery.png";

import werner from "../assets/images/WernerGalway.png";
import Shena from "../assets/images/Shena.png";
import Romona from "../assets/images/Romona.png";
import Renato from "../assets/images/RenatoCrome.png";
import Louanne from "../assets/images/Louanne.png";
import Kurt from "../assets/images/Kurt.png";
const Testimonials = [
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Michael Reynolds",
    image: werner,
    comment:
      "Their innovative approach completely transformed our online presence. We’ve seen incredible growth since partnering with them!",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Priya Sharma",
    image: Shena,
    comment:
      "From strategy to execution, they exceeded our expectations. Their results-driven approach made all the difference!",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Emily Carter",
    image: Romona,
    comment:
      "Their innovative approach completely transformed our online presence. We’ve seen incredible growth since partnering with them!",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Sarah Martinez",
    image: Renato,
    comment:
      "The team’s creativity and dedication are unmatched. They understood our vision and turned it into an amazing digital campaign.",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "David Chen",
    image: Louanne,
    comment:
      "Working with them was a game-changer for our business. Their strategies helped us reach a broader audience and boost sales.",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Fikir Niguse",
    image: Kurt,
    comment:
      "They truly understood our needs and delivered exceptional results. Our engagement rates have never been higher!",
  },
];

const About = () => {
  return (
    <div className="mt-14" id="about">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 w-ful flex justify-center">
          <img
            src={Lula}
            alt="lula"
            className="rounded-lg hover:scale-95 transition duration-75 ease-in-out w-full max-w-[300px]"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left ">
          <h4 className="mb-4 ont-bold leading-tight text-[#7F4F24] text-[13px]">
            WHO IS LULA
          </h4>
          <p className="text-2xl  font-bold leading-tight text-[#7F4F24]">
            “You name it, we make it”
          </p>
          <p className="mt-4 text-[17px] leading-7 text-[#7F4F24]">
            Started as a passion project in 2020, Lula's Pastry & Cake has
            blossomed into a hub of quality and creativity in baking. I’m Lula,
            a dedicated baker who transforms your ideas into stunning, delicious
            treats. Join me as we embark on this delicious journey together!
          </p>
          <div className="mt-4">
            <a
              href="https://t.me/bestlulity"
              target="blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <button
                aria-label="Join My Channel"
                className="transition duration-150 ease-in-out text-lg font-semibold py-3 px-10 rounded-lg bg-[#7F4F24] text-white hover:bg-[#d38642] hover:shadow-lg hover:scale-105 shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-[#F7F4F3] focus:ring-[#d38642]"
              >
                Join My Channel
              </button>
            </a>
          </div>
          <div className="flex flex-col mt-6 md:flex-row justify-center gap-8 max-w-5xl w-full items-center">
            <div className="border-2 border-[#7F4F24] p-4  px-10 rounded-md">
              <div className="flex-flex-col">
                <h3 className="font-bold text-[#7F4F24]">15 Years + </h3>
                <p className="font-light text-[#7F4F24]">Experience</p>
              </div>
            </div>
            <div className=" border-2 border-[#7F4F24] p-4 px-10 rounded-md">
              <div className="flex-flex-col">
                <h3 className="font-bold text-[#7F4F24]">300+ </h3>
                <p className="font-light text-[#7F4F24]">Satisfied Customer</p>
              </div>
            </div>
            <div className=" border-2 border-[#7F4F24] p-4 px-10 rounded-md">
              <div className="flex-flex-col">
                <h3 className="font-bold text-[#7F4F24]">1,000 +</h3>
                <p className="font-light text-[#7F4F24]">Cakes baked </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post 1 */}
      <div className="mt-16">
        <h1 className="text-center text-3xl mt-7 font-bold text-[#7F4F24]">
          Core Values
        </h1>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-5 mb-10">
          {/* Blog Image */}
          <img
            src={Fresh}
            alt="Fresh"
            className="w-full lg:w-[480px] max-w-[380px] h-[347px] rounded-[32px] object-cover mb-5 lg:mb-0"
          />

          {/* Blog Content */}
          <div className="flex flex-col justify-center md:justify-start space-y-4 space-x-5 md:items-baseline items-center mx-auto">
            <h1 className="md:text-[35px] text-[#7F4F24] text-[27px] text-center md:text-left font-bold leading-tight">
              Freshness
            </h1>
            <p className=" md:text-[17px] text-[12px] max-w-md leading-6 text-center md:text-left text-[#7F4F24]">
              At Lula's Pastry & Cake, freshness is our top priority. We believe
              that the best treats start with the freshest ingredients, which is
              why we bake daily
            </p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-5 mb-10">
          <div className="flex flex-col justify-center space-x-5  md:justify-start space-y-4 md:items-baseline items-center mx-auto">
            <h1 className="md:text-[35px] text-[27px] text-center md:text-left text-[#7F4F24]  font-semibold leading-tight">
              Quality Ingredients
            </h1>
            <p className=" md:text-[17px] text-[12px] max-w-md leading-6 text-center md:text-left text-[#7F4F24]">
              Artistry is at the heart of Lula's Pastry & Cake. We view baking
              as a form of creative expression, transforming your ideas into
              stunning, edible masterpieces.
            </p>
          </div>
          {/* Blog Image */}
          <img
            src={Quality}
            alt="Quality"
            className="w-full lg:w-[480px] max-w-[360px] h-[347px] rounded-[32px] object-cover mb-5 mt-3 lg:mb-0"
          />

          {/* Blog Content */}
        </div>
        <div className="flex flex-col justify-center items-center  lg:flex-row lg:space-x-5 mb-10">
          {/* Blog Image */}
          <img
            src={Art}
            alt="Art"
            className="w-full lg:w-[480px] max-w-[380px] h-[347px] rounded-[32px] object-cover mb-5 lg:mb-0"
          />

          {/* Blog Content */}
          <div className="flex flex-col justify-center space-x-5  md:justify-start space-y-4 md:items-baseline items-center mx-auto">
            <h1 className="md:text-[35px] text-[27px] text-center md:text-left font-bold leading-5 text-[#7F4F24]">
              Artistry
            </h1>
            <p className=" md:text-[17px] text-[12px] max-w-md leading-6 text-center md:text-left text-[#7F4F24]">
              Artistry is at the heart of Lula's Pastry & Cake. We view baking
              as a form of creative expression, transforming your ideas into
              stunning, edible masterpieces.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center text-[#7F4F24] font-bold text-3xl md:text-4xl mb-3">
          My Service
        </h1>
        <p className="text-center text-[#7F4F24] text-[15px]">
          Creating memorable moments with every bite
        </p>
        <div className="flex flex-col md:flex-row justify-center py-8 gap-6 md:gap-12 mx-auto items-center">
          <div className="hover:border-y-4 hover:border-[#7F4F24] bg-white shadow-lg  rounded-lg p-6 max-w-[350px] w-full hover:scale-105 hover:shadow-[0_4px_20px_rgba(127,79,36,0.3)] transition-all duration-300 ease-in-out">
            <img
              src={wedding}
              alt="wedding-cake"
              className="rounded-lg w-full max-w-[280px] mx-auto mb-4"
            />
            <div className="text-center">
              <h1 className="text-[#7F4F24] font-bold  text-2xl mb-3">
                Custom Cakes
              </h1>
              <p className="text-[#7F4F24] text-[15px] mb-4">
                Crafted to perfection, our custom cakes are tailored to your
                unique vision, ensuring every slice is a delightful experience.
              </p>
              <button className="bg-[#7F4F24] text-white font-semibold text-[14px] md:text-[16px] px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>

          <div className="hover:border-y-4 border-[#7F4F24] bg-white shadow-lg rounded-lg p-6 max-w-[350px] w-full hover:scale-105 hover:shadow-[0_4px_20px_rgba(127,79,36,0.3)] transition-all duration-300 ease-in-out">
            <img
              src={service}
              alt="theme-based-cake"
              className="rounded-lg w-full max-w-[280px] mx-auto mb-4"
            />
            <div className="text-center">
              <h1 className="text-[#7F4F24] font-bold  text-2xl mb-3">
                Theme-Based Cakes
              </h1>
              <p className="text-[#7F4F24] text-[15px] mb-4">
                Bring your celebrations to life with our theme-based cakes,
                designed to match any occasion and theme, making your special
                moments unforgettable.
              </p>
              <button className="bg-[#7F4F24] text-white font-semibold text-[14px] md:text-[16px] px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>

          <div className="hover:border-y-4 border-[#7F4F24] bg-white shadow-lg   rounded-lg p-6 max-w-[350px] w-full hover:scale-105 hover:shadow-[0_4px_20px_rgba(127,79,36,0.3)] transition-all duration-300 ease-in-out">
            <img
              src={servbak}
              alt="dessert-catering"
              className="rounded-lg w-full max-w-[280px] mx-auto mb-4"
            />
            <div className="text-center">
              <h1 className="text-[#7F4F24] font-bold  text-2xl mb-3">
                Dessert Catering
              </h1>
              <p className="text-[#7F4F24] text-[15px] mb-4">
                Elevate your events with our dessert catering services,
                featuring a delectable selection of treats that will impress
                your guests.
              </p>
              <button className="bg-[#7F4F24] text-white font-semibold text-[14px] md:text-[16px] px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 md:ml-4 ">
        <p className="mb-2 mx-auto text-[#7F4F24] max-w-[103px] text-[13px] rounded-md px-1">
          What they say
        </p>
        <h2 className="text-[30px] text-[#7F4F24] font-bold leading-[45px] text-center">
          Testimonials
        </h2>
        <div className=" mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12  justify-center">
          {Testimonials.map((testimony, key) => (
            <div
              key={key}
              className="py-4 px-8  rounded-[32px] border border-[#7F4F24] text-center max-w-[400px] w-full"
            >
              <img
                src={testimony.image}
                alt={testimony.Name}
                className="w-[80px] h-[80px] rounded-full mx-auto my-4"
              />
              <h3 className="text-[20px] text-[#7F4F24] font-bold text-foundationblack">
                {testimony.Name}
              </h3>
              <p className="text-[12px] font-light leading-6 max-w-lg text-gray mt-2">
                {testimony.comment}
              </p>
              <p className="text-yellow mt-3">{testimony.star}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
