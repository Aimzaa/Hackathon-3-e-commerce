import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-red-30 w-full h-[80px] py-[14px] flex items-center border-b border-gray-200 px-4 sm:px-12 md:px-24 lg:px-[150px]">
      {/* Left Side: Navigation Links */}
      <div className="space-x-8 w-full sm:w-[339px] flex justify-center sm:justify-start">
        <Link href="/" className="text-[#007580]">Home</Link>
        <Link href="Shop" className="text-[#636270] font-inter font-medium text-base">Shop</Link>
        <Link href="Product" className="text-[#636270] font-inter font-medium text-base">Product</Link>
        <Link href="Pag" className="text-[#636270] font-inter font-medium text-base">Pages</Link>
        <Link href="About" className="text-[#636270] font-inter font-medium text-base">About</Link>
      </div>

      {/* Right Side: Contact Information */}
      <div className="flex items-center ml-auto gap-4">
        <Link href="Contact" className="font-inter font-normal text-sm text-[#636270]">Contact:</Link>
        <h5 className="font-inter font-medium text-sm text-[#272343]">(808) 555-0111</h5>
      </div>
    </div>
  );
};

export default Navbar;
