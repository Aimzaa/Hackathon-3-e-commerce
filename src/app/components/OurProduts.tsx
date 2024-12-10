import React from 'react'

const OurProduts = () => {
  return (
    <div className="bg-green-40 w-[1320px] h-[793px] mt-[110px] mx-auto">
        {/* First section */}
        <div className="bg-yellow-10 w-[1050px] h-[380px] mt-9 ml-[150px] relative mr-[150px] flex gap-4">
            {/* Product 1 */}
            <div className="w-[312px] h-[377px] bg-green-20">
              <img src="Image.png" className="w-[312px] h-[312px]" />
              <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-295px] ml-5 py-[6px] px-[10px]">
                <p className="font-Inter font-medium text-[13px] text-white">New</p>
              </button>
              <div className=" bg-orange-60 w-[250px] h-[65px] flex items-center justify-between">
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
            <div className="w-[312px] h-[377px] bg-blue-20 relative">
              <img src="Image (1).png" className="w-[312px] h-[312px]" />
              <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute items-center flex mt-[-295px] ml-5 py-[6px] px-[10px]">
                <p className="font-Inter font-medium text-[13px] text-white">Sales</p>
              </button>
              <div className=" bg-orange-60 w-[250px] h-[65px] flex items-center justify-between">
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
            <div className="w-[312px] h-[377px] bg-red-20">
              <img src="Image (2).png" className="w-[312px] h-[312px]" />
              <div className=" bg-orange-60 w-[250px] h-[65px] flex items-center justify-between">
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
            <div className="w-[312px] h-[377px] bg-purple-20">
              <img src="Image (3).png" className="w-[312px] h-[312px]" />
              <div className=" bg-orange-60 w-[250px] h-[65px] flex items-center justify-between">
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
        <div className="bg-yellow-10 w-[1050px] h-[380px] mt-9 ml-[150px] relative mr-[150px] flex gap-4">
          <div className="w-[312px] h-[377px] bg-green-20">
            <img src="P-5.png" className="w-[312px] h-[312px]" />
            <button className="bg-[#01AD5A] w-[54px] h-[26px] rounded absolute items-center flex justify-center mt-[-295px] ml-5 py-[6px] px-[10px]">
              <p className="font-Inter font-medium text-[13px] text-white">New</p>
            </button>
            <div className=" bg-orange-60 w-[250px] h-[65px] flex items-center justify-between">
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
                     <div className="w-[312px] h-[377px] bg-blue-20 relative">
              <img src="P-6.png" className="w-[312px] h-[312px]" />
              <button className="bg-[#F5813F] w-[54px] h-[26px] rounded absolute items-center flex mt-[-295px] ml-5 py-[6px] px-[10px]">
                <p className="font-Inter font-medium text-[13px] text-white">Sales</p>
              </button>
              <div className=" bg-orange-60 w-[250px] h-[65px] flex items-center justify-between">
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
            <div className="w-[312px] h-[377px] bg-red-20">
              <img src="P-7.png" className="w-[312px] h-[312px]" />
              <div className=" bg-orange-60 w-[250px] h-[65px] flex items-center justify-between">
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
            <div className="w-[312px] h-[377px] bg-purple-20">
              <img src="P-8.png" className="w-[312px] h-[312px]" />
              <div className=" bg-orange-60 w-[250px] h-[65px] flex items-center justify-between">
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
    </div>
  )
}

export default OurProduts
