import React from 'react'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#F0F2F3] w-full max-w-[1050px] mx-auto h-screen flex flex-col md:flex-row items-center justify-between border rounded-bl-[48px] rounded-br-[48px] px-4 md:px-16 lg:px-[50px]">
        {/* Left Side */}
        <div className="text-center md:text-left mt-10 md:mt-0 md:ml-0 lg:ml-[60px] flex flex-col items-center md:items-start">
          <p className="font-normal font-Inter text-sm text-[#272343]">
            WELCOME TO CHAIRY
          </p>
          <h1 className="font-Inter font-bold text-[24px] sm:text-[30px] md:text-[40px] lg:text-[35px] leading-tight mt-4">
            Best Furniture Collection <br /> For Your Interior.
          </h1>
          <button className="w-auto mt-6 bg-[#029FAE] text-white rounded-lg py-3 px-6 flex items-center gap-4">
            Shop Now <img src="Right arrow.png" alt="Arrow" className="w-6 h-6" />
          </button>
        </div>

        {/* Right Side */}
        <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src="Product Image.png"
            alt="Product"
            className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[100%] max-h-[400px] object-contain"
          />
        </div>
      </div>

      {/* Second Box */}
      <div className="bg-gray-90 w-full flex flex-wrap items-center justify-center gap-8 px-4 sm:px-8 py-8">
        <img
          src="Logo.png"
          alt="Logo 1"
          className="w-[70px] sm:w-[85px] h-[70px] sm:h-[85px] object-contain"
        />
        <img
          src="Logo (1).png"
          alt="Logo 2"
          className="w-[70px] sm:w-[85px] h-[70px] sm:h-[85px] object-contain"
        />
        <img
          src="Logo (2).png"
          alt="Logo 3"
          className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-contain"
        />
        <img
          src="Logo (3).png"
          alt="Logo 4"
          className="w-[90px] sm:w-[130px] h-[90px] sm:h-[130px] object-contain"
        />
        <img
          src="Logo (4).png"
          alt="Logo 5"
          className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] object-contain"
        />
        <img
          src="Logo (5).png"
          alt="Logo 6"
          className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-contain"
        />
        <img
          src="Logo (6).png"
          alt="Logo 7"
          className="w-[90px] sm:w-[110px] h-[90px] sm:h-[110px] object-contain"
        />
        <img
          src="Logo.png"
          alt="Logo 8"
          className="w-[70px] sm:w-[85px] h-[70px] sm:h-[85px] object-contain"
        />
      </div>
    </>
  )
}

export default Hero
