import React from "react";

const Cart = () => {
  return (
    <div className="bg-purple-30 w-full md:w-[500px] lg:w-[1200px] h-auto mx-auto lg:flex flex-col md:mb-[50px] lg:mb-0 lg:flex-row">
      {/* Yellow Boxes Container */}
      <div className="flex flex-col sm:w-full lg:w-[900px] mx-auto lg:ml-[70px]">
        <div className="bg-yellow-20 h-auto md:mb-5 lg:mb-[50px] flex items-center gap-4 sm:flex-col lg:flex-row relative mt-16">
          {/* h1 Positioned Over Image */}
          <h1 className="absolute top-[-40px] md:top-[-40px] md:left-1/2 md:transform md:-translate-x-1/2 lg:left-0 text-xl font-bold text-black mb-6">
            Bag
          </h1>
          <img 
            src="Cart-1.png" 
            className="w-[180px] h-[211px] sm:w-[150px] sm:h-[180px] mb-1" 
            alt="Product" 
          />
          <div className="sm:text-center lg:text-left">
            <h6 className="font-normal text-base text-[#272343] mt-2 pb-6">
              Library Stool Chair
            </h6>
            <p className="text-[#757575] text-[15px] font-normal pb-2">
              Ashen Slate/Cobalt Bliss
            </p>
            {/* Size and Quantity in One Line */}
            <div className="flex gap-8 justify-center sm:justify-start">
              <p className="text-[#757575] text-[15px] font-normal">Size L</p>
              <p className="text-[#757575] text-[15px] font-normal">
                Quantity 1
              </p>
            </div>
            {/* Heart and Delete Icons Below */}
            <div className="flex gap-4 mt-6 justify-center sm:justify-start">
              <img src="delete (2).png" alt="Heart Icon" className="cursor-pointer" />
              <img src="delete (1).png" alt="Delete Icon" className="cursor-pointer" />
            </div>
            <hr className="w-full bg-gray-400 h-[2px] absolute bottom-[-16px] left-0" />
          </div>
        </div>

        <div className="bg-yellow-20 h-auto flex items-center gap-4 sm:flex-col lg:flex-row relative">
          <img 
            src="Cart-1.png" 
            className="w-[180px] h-[211px] sm:w-[150px] sm:h-[180px] mt-10" 
            alt="Product" 
          />
          <div className="sm:text-center lg:text-left">
            <h6 className="font-normal text-base text-[#272343] mt-2 pb-6">
              Library Stool Chair
            </h6>
            <p className="text-[#757575] text-[15px] font-normal pb-2">
              Ashen Slate/Cobalt Bliss
            </p>
            {/* Size and Quantity in One Line */}
            <div className="flex gap-8 justify-center sm:justify-start">
              <p className="text-[#757575] text-[15px] font-normal">Size L</p>
              <p className="text-[#757575] text-[15px] font-normal">
                Quantity 1
              </p>
            </div>
            {/* Heart and Delete Icons Below */}
            <div className="flex gap-4 mt-6 justify-center sm:justify-start">
              <img src="delete (2).png" alt="Heart Icon" className="cursor-pointer" />
              <img src="delete (1).png" alt="Delete Icon" className="cursor-pointer" />
            </div>
            <hr className="w-full bg-gray-400 h-[2px] absolute bottom-[-16px] left-0" />
          </div>
        </div>
      </div>

      {/* Pink Box */}
      <div className="bg-red-20 w-full sm:w-full lg:w-[400px] h-auto p-6 mx-auto md:mt-16 lg:mr-[70px] mt-16">
        <h1 className="font-medium text-[21px] text-[#111111] mb-4">Summary</h1>

        {/* Subtotal */}
        <div className="flex justify-between items-center mb-4">
          <h5 className="font-normal text-[15px] text-[#111111]">Subtotal</h5>
          <h5 className="font-medium text-sm">$198.00</h5>
        </div>

        {/* Estimated Delivery & Handling */}
        <div className="flex justify-between items-center">
          <h5 className="font-normal text-[15px] text-[#111111]">
            Estimated Delivery & Handling
          </h5>
          <h5 className="font-medium text-sm">Free</h5>
        </div>
        <hr className="w-full h-[2px] bg-gray-300 mt-8" />

        <div className="flex justify-between items-center pt-5">
          <h5 className="font-normal text-[15px] text-[#111111]">
            Total
          </h5>
          <h5 className="font-medium text-sm">$198.00</h5>
        </div>
        <hr className="w-full h-[2px] bg-gray-300 mt-4" />
        <button className="bg-[#029FAE] w-full lg:w-[334px] h-[60px] py-[18px] px-[70px] mt-8 rounded-[30px] text-white hover:bg-[#026D66]">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
