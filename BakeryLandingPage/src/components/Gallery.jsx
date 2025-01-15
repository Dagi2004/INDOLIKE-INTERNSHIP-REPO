import React, { useState } from "react";
import congra from "../assets/images/congra.png";
import triple from "../assets/images/triplecake.png";
import cake from "../assets/images/cakee.png";
import easter from "../assets/images/easterCake.png";
import anni from "../assets/images/anni.png";
import graduation from "../assets/images/graduation.png";
import graduationnTwo from "../assets/images/graduationtwo.png";
import wedding from "../assets/images/wedding.png";
import Lula from "../assets/images/LulaOne.png";

const GalleryItems = [
  { Image: congra, category: "Theme", name: "Congratulations Cake" },
  { Image: triple, category: "Seasonal", name: "Triple Layer Cake" },
  { Image: cake, category: "Seasonal", name: "Classic Cake" },
  { Image: easter, category: "Theme", name: "Easter Cake" },
  { Image: anni, category: "Customization", name: "Anniversary Cake" },
  { Image: graduation, category: "Customization", name: "Graduation Cake" },
  {
    Image: graduationnTwo,
    category: "Customization",
    name: "Graduation Cake Two",
  },
  { Image: wedding, category: "Seasonal", name: "Wedding Cake" },
  { Image: Lula, category: "Theme", name: "Lula's Custom Cake" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchvalue, setSearchValue] = useState("");

  const handleFilterChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleGalleryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredGallery = GalleryItems.filter((item) => {
    const matchFilter =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchSearch =
      searchvalue === "" ||
      item.name.toLowerCase().includes(searchvalue.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="mt-9" id="gallery">
      <h1 className="text-4xl text-[#7F4F24] mb-6 text-center">Gallery</h1>

      {/* Filter Buttons & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 max-w-[700px] mx-auto">
        <div className="flex gap-3">
          {["All", "Theme", "Seasonal", "Customization"].map((category) => (
            <button
              key={category}
              onClick={() => handleGalleryFilter(category)}
              className={`border border-[#d38642] px-4 py-2 rounded-md bg-[#E3E1DF] text-[#d38642] ${
                selectedCategory === category ? "bg-[#d38642] text-white" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex-grow md:flex-grow-0 md:w-1/3">
          <input
            type="text"
            value={searchvalue}
            onChange={handleFilterChange}
            placeholder="Search Gallery"
            className="w-full border border-[#d38642] px-4 py-2 rounded-md text-[#7F4F24] focus:outline-none focus:ring-2 focus:ring-[#E58C3C] focus:border-transparent transition duration-150 ease-in-out"
          />
        </div>
      </div>

      {/* Gallery Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8 px-4 max-w-5xl mx-auto">
        {filteredGallery.length > 0 ? (
          filteredGallery.map((gallery, index) => (
            <div key={index} className="w-full">
              <img
                src={gallery.Image}
                alt={gallery.name}
                className="w-full max-w-[300px] rounded-lg hover:scale-95 transition duration-75 ease-in-out"
              />
            </div>
          ))
        ) : (
          <div className=" col-span-full text-center">
            <p className="text-red-500  text-lg"> No Search Found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
