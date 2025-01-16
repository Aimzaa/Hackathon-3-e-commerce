import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-[150px] gap-4 mt-[50px]">
        {/* Left Box */}
        <div className="bg-[#007580] w-full lg:w-[672px] h-[382px] px-4 lg:px-[60px] py-4">
          <h1 className="font-bold text-[24px] lg:text-[32px] font-Inter text-white pt-4 lg:pt-[50px] pb-6">
            About US - Comforty
          </h1>
          <p className="font-normal text-sm text-white lg:text-base">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.{" "}
          </p>
          <button className="bg-[#F9F9F926] text-white mt-6 py-4 px-8">
            View Collection
          </button>
        </div>

        {/* Right Box */}
        <div className="bg-[#007580] w-full lg:w-[619px] h-[382px]">
          <img src="Image Block.png" className="w-full h-full object-cover" />
        </div>
      </div>

      <h1 className="text-[#272343] font-Inter font-semibold text-[24px] lg:text-[32px] pt-[110px] pb-10 flex justify-center">
        What Makes Our Make Different
      </h1>

      <div className="bg-gray-20 w-full lg:w-[1050px] h-[244px] mx-4 md:m-16 md:w-[700px] lg:mx-[150px] flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 lg:gap-8">
        {/* Box 1 */}
        <div className="bg-[#F9F9F9] w-full lg:w-[240px] h-[240px] flex items-center justify-center">
          <div className="bg-red-5 w-[213px] h-[148px] gap-3 text-left p-4">
            <img src="Delivery.png" className="w-6 h-6" />
            <h4 className="font-normal text-xl text-[#007580] font-sans pt-4 pb-3">
              Next day as standard
            </h4>
            <p className="font-normal text-base text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-[#F9F9F9] w-full lg:w-[240px] h-[240px] flex items-center justify-center">
          <div className="bg-red-5 w-[213px] h-[148px] gap-3 text-left p-4">
            <img src="Wallet.png" className="w-6 h-6" />
            <h4 className="font-normal text-xl text-[#007580] font-sans pt-4 pb-3">
              Made by true artisans
            </h4>
            <p className="font-normal text-base text-[#007580]">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-[#F9F9F9] w-full lg:w-[240px] h-[240px] flex items-center justify-center">
          <div className="bg-red-5 w-[213px] h-[148px] gap-3 text-left p-4">
            <img src="Check (2).png" className="w-6 h-6" />
            <h4 className="font-normal text-xl text-[#007580] font-sans pt-4 pb-3">
              Unbeatable prices
            </h4>
            <p className="font-normal text-base text-[#007580]">
              For our materials and quality, you won’t find better prices
              anywhere
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-[#F9F9F9] w-full lg:w-[240px] h-[240px] flex items-center justify-center">
          <div className="bg-red-5 w-[213px] h-[148px] gap-3 text-left p-4">
            <img src="Sproute.png" className="w-6 h-6" />
            <h4 className="font-normal text-xl text-[#007580] font-sans pt-4 pb-3">
              Recycled packaging
            </h4>
            <p className="font-normal text-base text-[#007580]">
              We use 100% recycled materials to ensure our footprint is more
              manageable
            </p>
          </div>
        </div>
      </div>

      {/* Gap added before Our Popular Products Section */}
      <h1 className="text-[#272343] font-Inter font-semibold md:mb-5 text-[24px] md:text-center lg:text-left lg:text-[32px] pt-[110px] px-4 lg:px-[150px]  mt-[700px] lg:mt-10">
        Our Popular Products
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap mx-4 md:text-center lg:text-left lg:mx-[150px] gap-4 mt-0 lg:mt-10">
        {/* First Box - Larger */}
        <div className="bg-red-1 w-full lg:w-[50%] flex-shrink-0">
          <img src="About-1.png" className="w-full h-auto max-h-[390px] object-contain" />
          <div className="bg-orange-40 w-full h-[63px] mt-5 p-4 md:mb-5">
            <p className="text-xl font-normal text-[#2A254B]">The Poplar suede sofa</p>
            <p className="font-normal text-lg text-[#2A254B] pt-2">$99.00</p>
          </div>
        </div>

        {/* Second Box - Smaller */}
        <div className="bg-red-1 w-full lg:w-[25%] flex-shrink-0">
          <img src="About-2.png" className="w-full h-auto max-h-[390px] object-contain" />
          <div className="bg-orange-40 w-full h-[63px] mt-5 p-4 md:mb-5">
            <p className="text-xl font-normal text-[#2A254B]">The Dandy chair</p>
            <p className="font-normal text-lg text-[#2A254B] pt-2">$99.00</p>
          </div>
        </div>

        {/* Third Box - Smaller */}
        <div className="bg-red-1 w-full lg:w-[25%] flex-shrink-0">
          <img src="About-3.png" className="w-full h-auto max-h-[390px] object-contain" />
          <div className="bg-orange-40 w-full h-[63px] mt-5 p-4 md:mb-5">
            <p className="text-xl font-normal text-[#2A254B]">The Dandy chair</p>
            <p className="font-normal text-lg text-[#2A254B] pt-2">$99.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
