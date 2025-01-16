import React from "react";
import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-[#272343] py-[8px] px-4 sm:px-8">
      {/* Parent Container */}
      <div className="max-w-[1000px] mx-auto flex flex-wrap justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <img
            src="check.png"
            className="w-[10px] h-[7px] opacity-70"
            alt="Check Icon"
          />
          <p className="text-[#FFFFFF] font-inter font-normal text-[10px] sm:text-[12px] md:text-[13px] text-opacity-70 text-center sm:text-left">
            Free Shipping On All Orders Over $50
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-0">
          {/* Language Dropdown */}
          <div className="flex items-center bg-transparent border border-opacity-20 rounded px-2 py-[2px]">
            <p className="text-[#FFFFFF] font-inter font-normal text-[10px] sm:text-[12px] md:text-[13px] text-opacity-70">
              Eng
            </p>
            <img
              src="down-arrow.png"
              className="w-[7px] h-[3px] ml-1 opacity-70"
              alt="Dropdown Icon"
            />
          </div>

          {/* Faq Link */}
          <Link
            href="/Faq"
            className="text-[#FFFFFF] font-inter font-normal text-[10px] sm:text-[12px] md:text-[13px] text-opacity-70 hover:underline"
          >
            Faqs
          </Link>

          {/* Help Section */}
          <div className="flex items-center gap-2">
            <img
              src="/alert-circle 1.png"
              className="w-[14px] h-[14px] opacity-70 hidden sm:block"
              alt="Help Icon"
            />
            <p className="text-[#FFFFFF] font-inter font-normal text-[10px] sm:text-[12px] md:text-[13px] text-opacity-70 text-center sm:text-left">
              Need Help
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
