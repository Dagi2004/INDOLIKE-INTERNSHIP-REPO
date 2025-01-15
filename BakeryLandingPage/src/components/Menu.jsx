import React, { useState } from "react";
import AllButton from "./common/AllButton";
import CakeButton from "./common/CakeButton";
import CupCakeButton from "./common/CupCakeButton";
import CookiesButton from "./common/CookiesButton";
import DonutsButton from "./common/DonutsButton";
import BlackForest from "../assets/images/ClassicBlackForest.png";
import CupCake from "../assets/images/Cupcake.png";
import ChocolateCherry from "../assets/images/ChocolateCherry.png";
import ChocolateChip from "../assets/images/ChocolateChipPerfection.png";
import Donout from "../assets/images/donout.png";
import CherryIndulgence from "../assets/images/CherryChocolate.png";
import OrderButton from "./common/OrderButton";

const MenuItems = [
  {
    image: BlackForest,
    Title: "Classic Black Forest",
    Content: "A rich chocolate sponge layered with whipped cream and cherries.",
    Price: "35$",
    category: "Cake",
  },
  {
    image: CupCake,
    Title: "Velvet Chocolate Cupcake",
    Content: "Moist chocolate cupcake topped with silky chocolate frosting",
    Price: "$3.50 each",
    category: "CupCake",
  },
  {
    image: ChocolateCherry,
    Title: "Chocolate Cherry Bliss",
    Content:
      "Decadent chocolate cake infused with cherry liqueur and fresh cherries.",
    Price: "40$",
    category: "Cakes",
  },
  {
    image: ChocolateChip,
    Title: "Chocolate Chip Perfection",
    Content: "Chewy cookies loaded with gooey chocolate chips.",
    Price: "35$",
    category: "Cookies",
  },
  {
    image: Donout,
    Title: "Classic Glazed Donut",
    Content: "Soft and fluffy donut with a sweet glaze",
    Price: "$1.50 each",
    category: "Donut",
  },
  {
    image: CherryIndulgence,
    Title: "Cherry Chocolate Indulgence",
    Content: "A luxurious blend of rich chocolate and tart cherry flavors.",
    Price: "44$",
    category: "Cookies",
  },
];

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const handleFilterMenu = (category) => {
    if (category === "All") {
      setFilter("All");
    } else {
      setFilter(category);
    }
  };
  const filteredMenu =
    filter === "All"
      ? MenuItems
      : MenuItems.filter((item) => item.category === filter);
  return (
    <div className="mt-12" id="menu">
      <h3 className="text-4xl text-center text-[#7F4F24]">Menu</h3>
      <p className="text-[#7F4F24] text-[16px] mb-3 mt-2 text-left md:text-center">
        "Explore The Menu of One of the Best Bakeries"
      </p>
      <div className="flex flex-row ml-4 mt-4 justify-center items-center gap-3">
        <AllButton onClick={handleFilterMenu} isActive={filter === "All"} />
        <CakeButton onClick={handleFilterMenu} isActive={filter === "Cakes"} />
        <CupCakeButton
          onClick={handleFilterMenu}
          isActive={filter === "CupCake"}
        />
        <CookiesButton
          onClick={handleFilterMenu}
          isActive={filter === "Cookies"}
        />
        <DonutsButton
          onClick={handleFilterMenu}
          isActive={filter === "Donut"}
        />
      </div>

      <div className="mt-2">
        <div className="grid grid-cols-1 ml-6 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-4 gap-7 mx-auto  ">
          {filteredMenu.map((item) => (
            <div key={item.Title} className="mt-3 ml-6">
              <div className="mt-3 ml-6 md:ml-4">
                <img
                  src={item.image}
                  alt={item.Title}
                  className="rounded-lg max-w-[320px] h-[265px] w-full object-cover"
                />
              </div>
              <div className="mt-6 ml-6 md:ml-5">
                <h2 className="mb-3 font-bold text-[#7F4F24]">{item.Title}</h2>
                <p className="text-black text-light text-[16px] leading-7">
                  {item.Content}
                </p>
                <p className="font-bold text-[#7F4F24] text-[17px] mt-2">
                  Price: {item.Price}
                </p>
                <div className="mt-2 w-full">
                  <OrderButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
