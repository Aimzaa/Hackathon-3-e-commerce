import React from "react";

const OurProduts = () => {
  return (
    <div className="bg-green-40 md:flex flex-col w-[1000px] h-auto mt-[130px] mx-auto">

       {/* Heading Section */}
       <div className="w-full h-auto bg-orange-20 px-4 md:px-0 flex items-center">
        <h1 className="w-full text-2xl md:text-3xl font-Inter text-[#272343] text-center mb-6">
          Our Products
        </h1>
      </div>

      {/* First section */}
      <div className="bg-yellow-10 w-full h-auto mt-9 mx-auto flex flex-nowrap gap-8 justify-center">
        {/* Product 1 */}
        <div className="w-[220px] h-[300px] bg-green-20">
          <img src="Image.png" className="w-[220px] h-[220px]" />
          <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-200px] ml-5 py-[6px] px-[10px]">
            <p className="font-Inter font-medium text-[13px] text-white">New</p>
          </button>
          <div className="bg-orange-60 w-[200px] h-[60px] flex items-center justify-between mt-2">
            <div className="bg-yellow-30 w-[150px]">
              <p className="font-Inter font-normal text-sm text-[#007580] pb-1">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-base text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#029FAE] items-center justify-center flex w-[36px] h-[36px] rounded-lg">
              <img src="Buy 2.png" className="filter invert" />
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-[220px] h-[300px] bg-blue-20">
          <img src="Image (1).png" className="w-[220px] h-[220px]" />
          <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute items-center flex mt-[-200px] ml-5 py-[6px] px-[10px]">
            <p className="font-Inter font-medium text-[13px] text-white">
              Sales
            </p>
          </button>
          <div className="bg-orange-60 w-[200px] h-[60px] flex items-center justify-between mt-2">
            <div className="bg-yellow-30 w-[150px]">
              <p className="font-Inter font-normal text-sm text-[#272343] pb-1">
                Library Stool Chair
              </p>
              <div className="flex items-center">
                <h4 className="font-Inter text-base text-[#272343]">$20</h4>
                <h5 className="text-[#9A9CAA] line-through text-xs font-normal font-Inter ml-2">
                  $30
                </h5>
              </div>
            </div>
            <button className="bg-[#F0F2F3] items-center justify-center flex w-[36px] h-[36px] rounded-lg">
              <img src="Buy 2.png" className="text-[#272343]" />
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-[220px] h-[300px] bg-red-20">
          <img src="Image (2).png" className="w-[220px] h-[220px]" />
          <div className="bg-orange-60 w-[200px] h-[60px] flex items-center justify-between mt-2">
            <div className="bg-yellow-30 w-[150px]">
              <p className="font-Inter font-normal text-sm text-[#272343] pb-1">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-base text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#F0F2F3] items-center justify-center flex w-[36px] h-[36px] rounded-lg">
              <img src="Buy 2.png" className="text-[#272343]" />
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-[220px] h-[300px] bg-purple-20">
          <img src="Image (3).png" className="w-[220px] h-[220px]" />
          <div className="bg-orange-60 w-[200px] h-[60px] flex items-center justify-between mt-2">
            <div className="bg-yellow-30 w-[150px]">
              <p className="font-Inter font-normal text-sm text-[#272343] pb-1">
                Library Stool Chair
              </p>
              <h4 className="font-Inter text-base text-[#272343]">$20</h4>
            </div>
            <button className="bg-[#F0F2F3] items-center justify-center flex w-[36px] h-[36px] rounded-lg">
              <img src="Buy 2.png" className="text-[#272343]" />
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-yellow-10 w-full h-auto mt-9 mx-auto flex flex-nowrap gap-8 justify-center">
        {/* Product 1 */}
        <div className="w-[220px] h-[300px] bg-green-20">
          <img src="P-5.png" className="w-[220px] h-[220px]" />
          <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-200px] ml-5 py-[6px] px-[10px]">
            <p className="font-Inter font-medium text-[13px] text-white">New</p>
          </button>
          <div className="bg-orange-60 w-[200px] h-[60px] flex items-center justify-between mt-2">
            <div className="bg-yellow-30 w-[150px]">
              <p className="font-Inter font-normal text-sm text-[#007580] pb-1">
                Wooden Chair
              </p>
              <h4 className="font-Inter text-base text-[#272343]">$15</h4>
            </div>
            <button className="bg-[#029FAE] items-center justify-center flex w-[36px] h-[36px] rounded-lg">
              <img src="Buy 2.png" className="filter invert" />
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-[220px] h-[300px] bg-blue-20">
          <img src="P-6.png" className="w-[220px] h-[220px]" />
          <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute items-center flex mt-[-200px] ml-5 py-[6px] px-[10px]">
            <p className="font-Inter font-medium text-[13px] text-white">
              Sales
            </p>
          </button>
          <div className="bg-orange-60 w-[200px] h-[60px] flex items-center justify-between mt-2">
            <div className="bg-yellow-30 w-[150px]">
              <p className="font-Inter font-normal text-sm text-[#272343] pb-1">
                Dining Table
              </p>
              <div className="flex items-center">
                <h4 className="font-Inter text-base text-[#272343]">$40</h4>
                <h5 className="text-[#9A9CAA] line-through text-xs font-normal font-Inter ml-2">
                  $50
                </h5>
              </div>
            </div>
            <button className="bg-[#F0F2F3] items-center justify-center flex w-[36px] h-[36px] rounded-lg">
              <img src="Buy 2.png" className="text-[#272343]" />
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-[220px] h-[300px] bg-red-20">
          <img src="P-7.png" className="w-[220px] h-[220px]" />
          <div className="bg-orange-60 w-[200px] h-[60px] flex items-center justify-between mt-2">
            <div className="bg-yellow-30 w-[150px]">
              <p className="font-Inter font-normal text-sm text-[#272343] pb-1">
                Modern Lamp
              </p>
              <h4 className="font-Inter text-base text-[#272343]">$25</h4>
            </div>
            <button className="bg-[#F0F2F3] items-center justify-center flex w-[36px] h-[36px] rounded-lg">
              <img src="Buy 2.png" className="text-[#272343]" />
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-[220px] h-[300px] bg-purple-20">
          <img src="P-8.png" className="w-[220px] h-[220px]" />
          <div className="bg-orange-60 w-[200px] h-[60px] flex items-center justify-between mt-2">
            <div className="bg-yellow-30 w-[150px]">
              <p className="font-Inter font-normal text-sm text-[#272343] pb-1">
                Office Chair
              </p>
              <h4 className="font-Inter text-base text-[#272343]">$30</h4>
            </div>
            <button className="bg-[#F0F2F3] items-center justify-center flex w-[36px] h-[36px] rounded-lg">
              <img src="Buy 2.png" className="text-[#272343]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduts;
