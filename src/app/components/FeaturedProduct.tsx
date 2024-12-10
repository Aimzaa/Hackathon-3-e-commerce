import React from "react";

const FeaturedProduct = () => {
  return (
    <div className="bg-purple-70 w-full h-auto mt-6">
      <div className="w-full h-10 bg-orange-20 pl-[150px] pr-[150px] flex items-center">
        <h1 className="w-[286px] h-[35px] font-Inter text-3xl text-[#272343]">
          Featured Products
        </h1>
      </div>

      {/* Product Container */}
      <div className="flex flex-wrap justify-between gap-6 mt-9 px-[150px]">

        {/* Product 1 */}
        <div className="w-full sm:w-[23%] h-[377px] bg-green-20 group relative">
          <img
            src="Image.png"
            className="w-full h-[312px] transform group-hover:scale-110 transition-transform duration-300"
          />
          <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute items-center flex mt-[-295px] ml-5 py-[6px] px-[10px]">
            <p className="font-Inter font-medium text-[13px] text-white">New</p>
          </button>
          <div className="bg-orange-60 w-[250px] h-[65px] flex items-center justify-between absolute bottom-0 left-0">
            <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
              <p className="font-Inter font-normal text-base text-[#007580] pb-1">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#029FAE] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
              <img src="Buy 2.png" className="filter invert" />
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full sm:w-[23%] h-[377px] bg-blue-20 relative group">
          <img
            src="Image (1).png"
            className="w-full h-[312px] transform group-hover:scale-110 transition-transform duration-300"
          />
          <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute items-center flex mt-[-295px] ml-5 py-[6px] px-[10px]">
            <p className="font-Inter font-medium text-[13px] text-white">Sales</p>
          </button>
          <div className="bg-orange-60 w-[250px] h-[65px] flex items-center justify-between absolute bottom-0 left-0">
            <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
              <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                Library Stool Chair
              </p>
              <div className="flex items-center">
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
                <h5 className="text-[#9A9CAA] line-through text-sm font-normal font-Inter ml-2">
                  $30
                </h5>
              </div>
            </div>
            <button className="bg-[#029FAE] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
              <img src="Buy 2.png" className="filter invert" />
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full sm:w-[23%] h-[377px] bg-red-20 relative">
          <img
            src="Image (2).png"
            className="w-full h-[312px] transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="bg-orange-60 w-[250px] h-[65px] flex items-center justify-between absolute bottom-0 left-0">
            <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
              <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#029FAE] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
              <img src="Buy 2.png" className="filter invert" />
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full sm:w-[23%] h-[377px] bg-purple-20 relative">
          <img
            src="Image (3).png"
            className="w-full h-[312px] transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="bg-orange-60 w-[250px] h-[65px] flex items-center justify-between absolute bottom-0 left-0">
            <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
              <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#029FAE] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
              <img src="Buy 2.png" className="filter invert" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedProduct;
