import React from "react";

const Product = () => {
  return (
    <>
      <div className="bg-pink-40 w-full justify-center items-center flex flex-col h-auto md:h-[2010px] px-4 md:px-[130px] mt-5">
        <h1 className="w-full text-center h-[35px] font-Inter text-3xl text-[#272343]">
          All Products
        </h1>

        {/* First Section */}
        <div className="bg-yellow-10 w-full md:w-[1050px] h-auto md:h-[380px] mt-9 relative flex flex-col md:flex-row gap-4">
          {/* Product 1 */}
          <div className="w-full md:w-[312px] h-[377px] bg-green-20 group relative overflow-visible">
            <img
              src="Image.png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-250px] ml-5 py-[6px] px-[10px]">
              <p className="font-Inter font-medium text-[13px] text-white">
                New
              </p>
            </button>
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
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
          <div className="w-full md:w-[312px] h-[377px] bg-green-20 group relative overflow-visible">
            <img
              src="Image (1).png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-250px] ml-5 py-[6px] px-[10px]">
              <p className="font-Inter font-medium text-[13px] text-white">
                Sales
              </p>
            </button>
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#007580] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full md:w-[312px] h-[377px] bg-red-20 group relative overflow-visible">
            <img
              src="Image (2).png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-00 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-full md:w-[312px] h-[377px] bg-purple-20 group relative overflow-visible">
            <img
              src="Image (3).png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-yellow-10 w-full md:w-[1050px] h-auto md:h-[380px] mt-14 relative flex flex-col md:flex-row gap-4">
          {/* Product 1 */}
          <div className="w-full md:w-[312px] h-[377px] bg-green-20 group relative overflow-visible">
            <img
              src="C-2.png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-250px] ml-5 py-[6px] px-[10px]">
              <p className="font-Inter font-medium text-[13px] text-white">
                New
              </p>
            </button>
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full md:w-[312px] h-[377px] bg-blue-20 group relative overflow-visible">
            <img
              src="P-6.png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-250px] ml-5 py-[6px] px-[10px]">
              <p className="font-Inter font-medium text-[13px] text-white">
                Sales
              </p>
            </button>
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
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
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full md:w-[312px] h-[377px] bg-blue-20 group relative overflow-visible">
            <img
              src="P-7.png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-full md:w-[312px] h-[377px] bg-blue-20 group relative overflow-visible">
            <img
              src="P-8.png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="bg-yellow-10 w-full md:w-[1050px] h-auto md:h-[380px] mt-14 relative flex flex-col md:flex-row gap-4">
          {/* Product 1 */}
          <div className="w-full md:w-[312px] h-[377px] bg-green-20 group relative overflow-visible">
            <img
              src="C-1.png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-250px] ml-5 py-[6px] px-[10px]">
              <p className="font-Inter font-medium text-[13px] text-white">
                New
              </p>
            </button>
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full md:w-[312px] h-[377px] bg-green-20 group relative overflow-visible">
            <img
              src="Image (1).png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-250px] ml-5 py-[6px] px-[10px]">
              <p className="font-Inter font-medium text-[13px] text-white">
                Sales
              </p>
            </button>
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full md:w-[312px] h-[377px] bg-green-20 group relative overflow-visible">
            <img
              src="Image (2).png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-full md:w-[312px] h-[377px] bg-green-20 group relative overflow-visible">
            <img
              src="C-3.png"
              className="w-full md:w-[312px] h-[270px] transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="bg-orange-60 w-full md:w-[250px] h-[65px] flex items-center justify-between">
              <div className="bg-yellow-30 w-[180px] h-[51px] mt-4">
                <p className="font-Inter font-normal text-base text-[#272343] pb-1">
                  Library Stool Chair
                </p>
                <h4 className="font-Inter text-lg text-[#272343]">$20</h4>
              </div>
              <button className="bg-[#F0F2F3] items-center justify-center flex w-[44px] h-[44px] mt-4 rounded-lg">
                <img src="Buy 2.png" className="text-[#272343]" />
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter and Instagram Section */}
        <div className="bg-zinc-5 flex flex-col w-full h-auto md:h-[480px] pt-[50px] mt-20">
          <div className="bg-blue-100 w-full md:w-[550px] h-[165px] flex flex-col justify-center items-center relative mb-4 mx-auto">
            <h1 className="text-[#000000] text-xl font-medium mb-8">
              Or Subscribe To The Newsletter
            </h1>
            {/* Input and Submit Section */}
            <div className="flex w-full justify-between items-center px-4">
              {/* Email Address Section */}
              <div className="flex flex-col items-start">
                <label
                  htmlFor="email"
                  className="text-gray-500 text-sm font-medium mb-2 cursor-text"
                >
                  Email Address 
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full md:w-[400px] border-b border-gray-400 bg-transparent outline-none focus:border-gray-600 text-sm text-gray-800 py-1"
                />
              </div>

              {/* Submit Section */}
              <button className="flex flex-col items-center mt-7">
                <p className="text-gray-500 text-sm font-medium mb-2">Submit</p>
                <span className="w-[100px] border-b border-gray-400"></span>
              </button>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="bg-orange-30 w-full h-auto md:h-[230px] mt-[30px]">
            <h1 className="text-black font-medium text-[30px] flex justify-center">
              Follow Products And Discounts On Instagram
            </h1>
            <div className="bg-red-30 w-full h-auto md:h-[160px] mt-8 flex justify-center">
              {/* Container for images */}
              <div className="w-full max-w-[1000px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4 md:gap-36">
                {/* Image 1 */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <img
                    src="News-1.png"
                    className="w-full h-full object-cover transition-transform duration-300 hover:translate-y-4"
                  />
                </div>

                {/* Image 2 */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <img
                    src="News-2.png"
                    className="w-full h-full object-cover transition-transform duration-300 hover:translate-y-4"
                  />
                </div>

                {/* Image 3 */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <img
                    src="News-3.png"
                    className="w-full h-full object-cover transition-transform duration-300 hover:translate-y-4"
                  />
                </div>

                {/* Image 4 */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <img
                    src="News-4.png"
                    className="w-full h-full object-cover transition-transform duration-300 hover:translate-y-4"
                  />
                </div>

                {/* Image 5 */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <img
                    src="News-5.png"
                    className="w-full h-full object-cover transition-transform duration-300 hover:translate-y-4"
                  />
                </div>

                {/* Image 6 */}
                <div className="w-full aspect-square relative overflow-hidden">
                  <img
                    src="News-6.png"
                    className="w-full h-full object-cover transition-transform duration-300 hover:translate-y-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;