import React from "react";
import Link from "next/link";

const Pages = () => {
  return (
    <>
      <div className="flex mx-[150px] space-x-[70px]">
        {" "}
        <div className="bg-slate-700 w-[500px] h-[460px]">
          <img
            src="Single Product.png"
            alt="Single Product"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-slate-70 w-[500px] h-[460px]">
          <h1 className="text-[#272343] font-bold text-[45px] leading-[60px] mb-3">
            Library Stool <br />
            Chair
          </h1>
          <button className="bg-[#029FAE] w-[144px] h-[30px] rounded-[100px] mb-5 text-white items-center justify-center flex">
            $20.00 USD
          </button>
          <hr className="w-[85%] h-[1px] bg-slate-400" />
          <p className="font-normal text-[17px] text-[#272343] opacity-60 pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
          <Link href="Cart" className="bg-[#029FAE] gap-[9px] mt-6 rounded-lg w-[212px] h-[63px] text-white flex items-center justify-center">
            {" "}
            <img src="Buy 2.png" className="filter invert" />
            Add To Cart
          </Link>
        </div>
      </div>
      <div className="bg-lime-70 w-[1050px] h-[320px] mx-[150px] mt-[50px] flex flex-col">
        <div className="flex justify-between mb-12">
          <h1 className="font-bold text-[28px] font-Inter">
            Featured Products
          </h1>
          <h6 className="cursor-pointer w-[75px] h-[31px] text-black underline underline-offset-4 decoration-[2px]">
            View all
          </h6>
        </div>

        <div className="flex flex-wrap gap-[37px] gap-y-8 mt-2">
          {/* Product 1 */}
          <div className="flex flex-col items-start">
            <img
              src="Single-P1.png"
              className="w-[180px] h-[180px]"
              alt="Product 1"
            />
            <div className="flex items-center justify-between mt-6 w-full">
              <p className="text-[#272343] font-normal text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-sm">$99</h6>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-start">
            <img
              src="Single-P2.png"
              className="w-[180px] h-[180px]"
              alt="Product 2"
            />
            <div className="flex items-center justify-between mt-6 w-full">
              <p className="text-[#272343] font-normal text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-sm">$99</h6>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-start">
            <img
              src="Single-P3.png"
              className="w-[180px] h-[180px]"
              alt="Product 3"
            />
            <div className="flex items-center justify-between mt-6 w-full">
              <p className="text-[#272343] font-normal text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-sm">$99</h6>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-start">
            <img
              src="Single-P4.png"
              className="w-[180px] h-[180px]"
              alt="Product 4"
            />
            <div className="flex items-center justify-between mt-6 w-full">
              <p className="text-[#272343] font-normal text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-sm">$99</h6>
            </div>
          </div>

          {/* Product 5 */}
          <div className="flex flex-col items-start mb-0">
            <img
              src="Single-P5.png"
              className="w-[180px] h-[180px]"
              alt="Product 5"
            />
            <div className="flex items-center justify-between mt-6 w-full">
              <p className="text-[#272343] font-normal text-[14px]">
                Library Stool Chair
              </p>
              <h6 className="text-[#000000] font-bold text-sm">$99</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
