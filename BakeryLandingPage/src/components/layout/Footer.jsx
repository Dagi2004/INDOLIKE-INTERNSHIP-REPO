import React from "react";
import { RiTelegramLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full bg-[#7F4F24] text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="flex flex-col md:items-start items-center space-y-4">
          <h2 className="text-lg font-bold">LULA</h2>
          <div>
            <p className="text-white">
              “Handcrafted with love and premium ingredients"
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 items-center">
              <a
                href="https://t.me/bestlulity "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <RiTelegramLine />
              </a>
              <a
                href="https://www.tiktok.com/@bestlulity?_t=ZM-8sqbWmCjjxm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.instagram.com/best_bakery16?igsh=b2l4ZjRqYjRsMXY4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-bold mb-4">Navigation</h1>
          <ul className="space-y-2">
            {["Home", "Menu", "Gallery", "About", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase().replace(" ", "")}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-72} // Matches header height
                  duration={500}
                  className="font-light cursor-pointer text-white hover:text-[#E58C3C]"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-4">Services</h1>
          <div className="flex flex-col leading-6">
            <ul className="space-y-2">
              <li className="font-light">Custom Cakes</li>
              <li className="font-light">Dessert Catering</li>
              <li className="font-light">Theme-Based Cakes</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-4">Contact</h1>

          <ul className="space-y-2">
            <li className="font-light">
              <RiTelegramLine className="inline-block mr-2 " /> Ethiopia, Addis
              Ababa
            </li>
            <li className="font-light">
              <FaPhoneAlt className="inline-block mr-2" /> +251912345678
            </li>
            <li className="font-light">
              <CgMail className="inline-block mr-2" /> lulabakery@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © Copyright 2025, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
