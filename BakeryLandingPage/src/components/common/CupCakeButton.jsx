import React from "react";

const CupCakeButton = ({ onClick, isActive }) => {
  return (
    <div>
      <button
        onClick={() => onClick("CupCake")}
        className={`md:py-2 border border-[#d38642] md:px-8 py-0 px-6 rounded-md ${
          isActive ? "bg-[#7f4f24] text-white" : "bg-[#E3E1DF] text-[#d38642]"
        }`}
      >
        Cupcakes 🧁
      </button>
    </div>
  );
};

export default CupCakeButton;
