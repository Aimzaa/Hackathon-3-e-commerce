import React from 'react'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#F0F2F3] w-full h-[790px] items-center flex mx-auto justify-between border rounded-bl-[48px] rounded-br-[48px] px-4 md:px-16 lg:px-[150px]">
        {/* Left Side */}
        <div className="bg-gray-40 w-full sm:w-[450px] h-auto sm:h-[300px] mt-[-30px] sm:mt-0 ml-[60px] items-center">
          <p className="w-[177px] h-[14px] font-normal font-Inter text-sm text-[#272343]">WELCOME TO CHAIRY</p>
          <div className="bg-neutral-70 w-full sm:w-[400px] h-auto sm:h-[200px] mt-[19px] mb-4">
            <h1 className="font-Inter font-bold text-[30px] sm:text-[40px] md:text-[45px]">Best Furniture Collection For Your Interior.</h1>
          </div>
          <button className="w-[171px] h-[52px] bg-[#029FAE] text-white rounded-lg py-[14px] px-6 flex gap-6">
            Shop Now <img src="Right arrow.png" className="w-6 h-6" />
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-slate-90 w-[434px] h-auto sm:h-[584px] items-center ml-[100px] mr-[60px] mt-[-20px] sm:mt-0">
          <img src="Product Image.png" className="w-full h-auto sm:w-[434px] sm:h-[584px]" />
        </div>
      </div>

      {/* Second Box */}
      <div className="bg-gray-90 w-full sm:w-[1050px] h-auto sm:h-[139px] mx-auto mt-10 flex items-center gap-10 px-4 sm:px-0">
        <img src="Logo.png" className="bg-green-20 w-[85px] h-[87px]" />
        <img src="Logo (1).png" className="bg-green-20 w-[85px] h-[87px]" />
        <img src="Logo (2).png" className="bg-green-20 w-[107px] h-[109px]" />
        <img src="Logo (3).png" className="bg-green-20 w-[135px] h-[139px]" />
        <img src="Logo (4).png" className="bg-green-20 w-[50px] h-[50px]" />
        <img src="Logo (5).png" className="bg-green-20 w-[98px] h-[101px]" />
        <img src="Logo (6).png" className="bg-green-20 w-[113px] h-[115px]" />
        <img src="Logo.png" className="bg-green-20 w-[84px] h-[87px]" />
      </div>
    </>
  )
}

export default Hero
