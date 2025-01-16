import React from "react";
import Link from "next/link";

const Pages = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-[150px] space-y-6 lg:space-y-0 lg:space-x-[70px] mt-6">
        <div className="bg-slate-700 w-full lg:w-[500px] h-[300px] lg:h-[460px]">
          <img
            src="Single Product.png"
            alt="Single Product"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-[500px]">
          <h1 className="text-[#272343] font-bold text-[28px] lg:text-[45px] leading-[36px] lg:leading-[60px] mb-3">
            Library Stool <br />
            Chair
          </h1>
          <button className="bg-[#029FAE] w-[120px] lg:w-[144px] h-[30px] rounded-[100px] mb-5 text-white items-center justify-center flex">
            $20.00 USD
          </button>
          <hr className="w-[85%] h-[1px] bg-slate-400" />
          <p className="font-normal text-[15px] lg:text-[17px] text-[#272343] opacity-60 pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
          <Link
            href="Cart"
            className="bg-[#029FAE] gap-[9px] mt-6 rounded-lg w-full lg:w-[212px] h-[50px] lg:h-[63px] text-white flex items-center justify-center"
          >
            <img src="Buy 2.png" className="filter invert" alt="Buy Now" />
            Add To Cart
          </Link>
        </div>
      </div>

      <div className="bg-lime-70 w-full lg:w-[1050px] mx-4 lg:mx-[150px] mt-[50px] flex flex-col p-4 lg:p-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-[22px] lg:text-[28px] font-Inter">
            Featured Products
          </h1>
          <h6 className="cursor-pointer text-black underline underline-offset-4 decoration-[2px] text-[14px] lg:text-[16px]">
            View all
          </h6>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[37px]">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <img
              src="Single-P1.png"
              className="w-[140px] md:w-[160px] lg:w-[180px] h-[140px] md:h-[160px] lg:h-[180px]"
              alt="Product 1"
            />
            <div className="flex flex-col items-center mt-4">
              <p className="text-[#272343] font-normal text-[12px] md:text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-[13px] md:text-[15px]">
                $99
              </h6>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <img
              src="Single-P2.png"
              className="w-[140px] md:w-[160px] lg:w-[180px] h-[140px] md:h-[160px] lg:h-[180px]"
              alt="Product 2"
            />
            <div className="flex flex-col items-center mt-4">
              <p className="text-[#272343] font-normal text-[12px] md:text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-[13px] md:text-[15px]">
                $99
              </h6>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <img
              src="Single-P3.png"
              className="w-[140px] md:w-[160px] lg:w-[180px] h-[140px] md:h-[160px] lg:h-[180px]"
              alt="Product 3"
            />
            <div className="flex flex-col items-center mt-4">
              <p className="text-[#272343] font-normal text-[12px] md:text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-[13px] md:text-[15px]">
                $99
              </h6>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <img
              src="Single-P4.png"
              className="w-[140px] md:w-[160px] lg:w-[180px] h-[140px] md:h-[160px] lg:h-[180px]"
              alt="Product 4"
            />
            <div className="flex flex-col items-center mt-4">
              <p className="text-[#272343] font-normal text-[12px] md:text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-[13px] md:text-[15px]">
                $99
              </h6>
            </div>
          </div>

          {/* Product 5 */}
          <div className="flex flex-col items-center">
            <img
              src="Single-P5.png"
              className="w-[140px] md:w-[160px] lg:w-[180px] h-[140px] md:h-[160px] lg:h-[180px]"
              alt="Product 5"
            />
            <div className="flex flex-col items-center mt-4">
              <p className="text-[#272343] font-normal text-[12px] md:text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-[13px] md:text-[15px]">
                $99
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
