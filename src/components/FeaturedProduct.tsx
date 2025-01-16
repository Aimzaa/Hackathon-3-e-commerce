import React from "react";

const FeaturedProduct = () => {
  return (
    <div className="bg-purple-70 flex flex-col justify-center items-center w-full h-auto mt-6">
      {/* Heading Section */}
      <div className="w-full h-auto bg-orange-20 px-4 md:px-[175px] flex items-center">
        <h1 className="w-full text-2xl md:text-3xl font-Inter text-[#272343]">
          Featured Products
        </h1>
      </div>

      {/* Product Container */}
      <div className="flex w-full max-w-[1000px] mx-auto h-auto items-center flex-wrap justify-center md:justify-between gap-4 mt-6 px-4 md:px-0">
        {/* Product 1 */}
        <div className="w-full sm:w-[48%] md:w-[23%] h-[400px] bg-green-20 group relative flex flex-col">
          <img
            src="Image.png"
            alt="Product 1"
            className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute top-4 left-4 flex items-center justify-center">
            <p className="font-Inter font-medium text-[13px] text-white">New</p>
          </button>
          <div className="bg-orange-60 w-full h-[80px] flex items-center justify-between px-4 absolute bottom-0 left-0">
            <div className="flex flex-col">
              <p className="font-Inter text-sm md:text-base text-[#007580]">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-base md:text-lg text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#029FAE] flex items-center justify-center w-[44px] h-[44px] rounded-lg">
              <img src="Buy 2.png" alt="Buy" className="filter invert" />
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full sm:w-[48%] md:w-[23%] h-[400px] bg-blue-20 group relative flex flex-col">
          <img
            src="Image (1).png"
            alt="Product 2"
            className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute top-4 left-4 flex items-center justify-center">
            <p className="font-Inter font-medium text-[13px] text-white">Sales</p>
          </button>
          <div className="bg-orange-60 w-full h-[80px] flex items-center justify-between px-4 absolute bottom-0 left-0">
            <div className="flex flex-col">
              <p className="font-Inter text-sm md:text-base text-[#007580]">
                Library Stool Chair
              </p>
              <div className="flex items-center">
                <h4 className="font-Inter text-base md:text-lg text-[#272343]">$20</h4>
                <h5 className="text-[#9A9CAA] line-through text-sm ml-2">$30</h5>
              </div>
            </div>
            <button className="bg-[#029FAE] flex items-center justify-center w-[44px] h-[44px] rounded-lg">
              <img src="Buy 2.png" alt="Buy" className="filter invert" />
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full sm:w-[48%] md:w-[23%] h-[400px] bg-red-20 group relative flex flex-col">
          <img
            src="Image (2).png"
            alt="Product 3"
            className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="bg-orange-60 w-full h-[80px] flex items-center justify-between px-4 absolute bottom-0 left-0">
            <div className="flex flex-col">
              <p className="font-Inter text-sm md:text-base text-[#007580]">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-base md:text-lg text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#029FAE] flex items-center justify-center w-[44px] h-[44px] rounded-lg">
              <img src="Buy 2.png" alt="Buy" className="filter invert" />
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full sm:w-[48%] md:w-[23%] h-[400px] bg-purple-20 group relative flex flex-col">
          <img
            src="Image (3).png"
            alt="Product 4"
            className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="bg-orange-60 w-full h-[80px] flex items-center justify-between px-4 absolute bottom-0 left-0">
            <div className="flex flex-col">
              <p className="font-Inter text-sm md:text-base text-[#007580]">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-base md:text-lg text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#029FAE] flex items-center justify-center w-[44px] h-[44px] rounded-lg">
              <img src="Buy 2.png" alt="Buy" className="filter invert" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
