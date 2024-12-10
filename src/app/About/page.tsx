import React from "react";

const About = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-[150px] gap-4 mt-[50px]">
        {/* Left Box */}
        <div className="bg-[#007580] w-[672px] h-[382px]">
          <h1 className="font-bold text-[32px] font-Inter text-white pt-[50px] pl-[60px] pb-6">About Us- Comforty</h1>
          <p className="font-normal text-sm text-white pl-[60px] pr-[50px]">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
          <button className="bg-[#F9F9F926] text-white ml-[60px] mt-[90px] py-4 px-8">View Collection</button>
        </div>

        {/* Right Box */}
        <div className="bg-[#007580] w-[619px] h-[382px]">
          <img src="Image Block.png" className=""/>
        </div>
      </div>
      <h1 className="text-[#272343] font-Inter font-semibold text-[32px] pt-[110px] pb-10 flex justify-center">
        What Makes Our Make Different
      </h1>

      <div className="bg-gray-20 w-[1050px] h-[244px] mx-[150px] flex justify-between items-center">
        {/* Box 1 */}
        <div className="bg-[#F9F9F9] w-[240px] h-[240px] flex items-center justify-center">
          <div className="bg-red-5 w-[213px] h-[148px] gap-3">
          <img src="Delivery.png" className="w-6 h-6"/>
          <h4 className="font-normal text-xl text-[#007580] font-sans pt-4 pb-3">Next day as standard</h4>
          <p className="font-normal text-base text-[#007580]">Order before 3pm and get your order the next day as standard</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-[#F9F9F9] w-[240px] h-[240px] flex items-center justify-center">
        <div className="bg-red-5 w-[213px] h-[148px] gap-3">
        <img src="Wallet.png" className="w-6 h-6"/>
          <h4 className="font-normal text-xl text-[#007580] font-sans pt-4 pb-3">Made by true artisans</h4>
          <p className="font-normal text-base text-[#007580]">Handmade crafted goods made with real passion and craftmanship</p>
        </div>
        </div>

        {/* Box 3 */}
        <div className="bg-[#F9F9F9] w-[240px] h-[240px] flex items-center justify-center">
        <div className="bg-red-5 w-[213px] h-[148px] gap-3">
        <img src="Check (2).png" className="w-6 h-6"/>
          <h4 className="font-normal text-xl text-[#007580] font-sans pt-4 pb-3">Unbeatable prices</h4>
          <p className="font-normal text-base text-[#007580]">For our materials and quality you won’t find better prices anywhere</p>
        </div>
        </div>

        {/* Box 4 */}
        <div className="bg-[#F9F9F9] w-[240px] h-[240px] flex items-center justify-center">
        <div className="bg-red-5 w-[213px] h-[148px] gap-3">
          <img src="Sproute.png" className="w-6 h-6"/>
          <h4 className="font-normal text-xl text-[#007580] font-sans pt-4 pb-3">Recycled packaging</h4>
          <p className="font-normal text-base text-[#007580]">We use 100% recycled to ensure our footprint is more manageable</p>
        </div>
        </div>
      </div>

      <h1 className="text-[#272343] font-Inter font-semibold text-[32px] pt-[110px] px-[150px]">
        Our Popular Products
      </h1>
      <div className="flex mx-[150px] gap-4">
        {/* First Box */}
        <div className="bg-red-10 w-[630px] h-[390px]">
          <img src="About-1.png"/>
          <div className="bg-orange-40 w-[212px] h-[63px] mt-5">
            <p className="text-xl font-normal text-[#2A254B]">The Poplar suede sofa</p>
            <p className="font-normal text-lg text-[#2A254B] pt-2">$99.00</p>
          </div>
        </div>

        {/* Second Box */}
        <div className="bg-red-10 w-[305px] h-[390px]">
        <img src="About-2.png"/>
        <div className="bg-orange-40 w-[155px] h-[63px] mt-5">
        <p className="text-xl font-normal text-[#2A254B]">The Dandy chair</p>
        <p className="font-normal text-lg text-[#2A254B] pt-2">$99.00</p>
        </div>
        </div>

        {/* Third Box */}
        <div className="bg-red-10 w-[305px] h-[390px]">
        <img src="About-3.png"/>
        <div className="bg-orange-40 w-[155px] h-[63px] mt-5">
        <p className="text-xl font-normal text-[#2A254B]">The Dandy chair</p>
        <p className="font-normal text-lg text-[#2A254B] pt-2">$99.00</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
