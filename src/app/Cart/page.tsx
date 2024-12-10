import React from "react";

const Cart = () => {
  return (
    <div className="bg-purple-30 w-[1609] h-[550px] mx-[80px] flex">
      {/* Yellow Boxes Container */}
      <div className="flex flex-col w-[900px] ml-[70px]">
        <div className="bg-yellow-20 h-[211px] mb-[20px] flex items-center gap-8 relative mt-16">
          {/* h1 Positioned Over Image */}
          <h1 className="absolute top-[-12px] left-0 text-xl font-bold text-black">
            Bag
          </h1>
          <img src="Cart-1.png" className="maz-w-full h-auto" alt="Product" />
          <div>
            <h6 className="font-normal text-base text-[#272343] mt-2 pb-6">
              Library Stool Chair
            </h6>
            <p className="text-[#757575] text-[15px] font-normal pb-2">
              Ashen Slate/Cobalt Bliss
            </p>
            {/* Size and Quantity in One Line */}
            <div className="flex gap-8">
              <p className="text-[#757575] text-[15px] font-normal">Size L</p>
              <p className="text-[#757575] text-[15px] font-normal">
                Quantity 1
              </p>
            </div>
            {/* Heart and Delete Icons Below */}
            <div className="flex gap-4 mt-6">
              <img src="delete (2).png" alt="Heart Icon" className="cursor-pointer" />
              <img src="delete (1).png" alt="Delete Icon" className="cursor-pointer" />
            </div>
              <hr className="w-full bg-gray-400 h-[2px] absolute bottom-0 left-0" />
          </div>
        </div>

        <div className="bg-yellow-20 h-[211px] flex items-center gap-8 relative">
          <img src="Cart-1.png" className="maz-w-full h-auto" alt="Product" />
          <div>
            <h6 className="font-normal text-base text-[#272343] mt-2 pb-6">
              Library Stool Chair
            </h6>
            <p className="text-[#757575] text-[15px] font-normal pb-2">
              Ashen Slate/Cobalt Bliss
            </p>
            {/* Size and Quantity in One Line */}
            <div className="flex gap-8">
              <p className="text-[#757575] text-[15px] font-normal">Size L</p>
              <p className="text-[#757575] text-[15px] font-normal">
                Quantity 1
              </p>
            </div>
            {/* Heart and Delete Icons Below */}
            <div className="flex gap-4 mt-6">
              <img src="delete (2).png" alt="Heart Icon" className="cursor-pointer" />
              <img src="delete (1).png" alt="Delete Icon" className="cursor-pointer" />
            </div>
            <hr className="w-full bg-gray-400 h-[2px] absolute bottom-0 left-0" />
          </div>
        </div>
      </div>

      {/* Pink Box */}
      <div className="bg-red-20 w-[400px] h-[400px] mr-[70px] p-4 mt-16">
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
            Top
          </h5>
          <h5 className="font-medium text-sm">$198.00</h5>
        </div>
        <hr className="w-full h-[2px] bg-gray-300 mt-4" />
        <button className="bg-[#029FAE] w[334px] h-[60px] py-[18px] px-[70px] mt-8 rounded-[30px] text-white">Member Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
