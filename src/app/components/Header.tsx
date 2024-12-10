import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#F0F2F3] w-full h-[84px] flex justify-between items-center px-4 sm:px-12 md:px-24 lg:px-[150px] py-5">
      {/* Left Section: Logo */}
      <div className="bg-pink-10 w-[166px] h-[40px] flex items-center justify-center gap-2">
        <img src="Logo Icon.png" alt="LOGO" className="w-10 h-10" />
        <h1 className="text-[26px] font-medium font-inter text-[#272343]">
          Comforty
        </h1>
      </div>

      {/* Right Section: Cart */}
      <div className="bg-white w-[120px] h-[44px] flex items-center pl-4 justify-between">
        <Link href="/Cart">
          {/* Link component ka use yahan */}
          <div className="bg-purple-100 w-[56px] h-[22px] flex items-center gap-2 cursor-pointer">
            <img src="Buy 2.png" alt="Cart Icon" />
            <p className="font-medium text-xs">Cart</p>
            <img src="No.png" className="ml-2" alt="Close Icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
