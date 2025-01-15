import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiX, BiMenu } from "react-icons/bi";
import NavButton from "../common/NavButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-10 bg-[#7F4F24] w-full flex items-center justify-evenly md:justify-around px-6 py-4">
      <nav className="flex items-center justify-between w-full max-w-7xl">
        {/* Logo */}
        <div className="font-bold text-white text-3xl cursor-pointer">LULA</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:items-center md:gap-10 text-lg">
          {["Home", "Menu", "Gallery", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase().replace(" ", "")}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-72} // Matches header height
                duration={500}
                className="font-normal cursor-pointer text-white"
              >
                {item}
              </Link>
            </li>
          ))}
          <NavButton />
        </ul>

        {/* Mobile Menu Toggle */}
        {isOpen ? (
          <BiX
            className="block md:hidden text-4xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <BiMenu
            className="block md:hidden text-4xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-[#7F4F24] text-white fixed top-[72px] right-0 h-screen w-1/2 flex flex-col items-start px-6 py-8 md:hidden">
            <ul className="flex flex-col gap-8 w-full">
              {["Home", "Menu", "Gallery", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(" ", "")}
                    spy={true}
                    smooth={true}
                    offset={-72} // Matches header height
                    duration={500}
                    className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                    onClick={toggleMenu} // Close menu on link click
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 w-full flex">
              <NavButton />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
