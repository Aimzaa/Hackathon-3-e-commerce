import React from 'react'
import Link from 'next/link'

const Top = () => {
  return (
    <div className='bg-[#272343] w-full h-[45px] py-[14px] px-4 sm:px-12 md:px-24 lg:px-[150px] flex justify-between'>
      {/* Left Side */}
      <div className='w-full sm:w-auto flex items-center gap-[8px]'>
        <img src="check.png" className='w-[10.67px] h-[7.33px] opacity-70' />
        <p className='text-[#FFFFFF] font-inter font-normal text-[13px] text-opacity-70'>
          Free Shipping On All Orders Over $50
        </p>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-6 sm:gap-3 md:gap-4'>
        {/* Language Dropdown */}
        <div className='bg-pink-10 w-[37px] h-[17px] flex items-center gap-1'>
          <p className='text-[#FFFFFF] font-inter font-normal text-[13px] text-opacity-70'>Eng</p>
          <img src="down-arrow.png" className='w-[7px] h-[3.5px] opacity-70'/>
        </div>

        {/* Faq Link */}
        <Link href="Faq" className='bg-pink-10 w-[30px] h-[17px] flex items-center justify-center text-[#FFFFFF] font-inter font-normal text-[13px] text-opacity-70'>
          Faqs
        </Link>

        {/* Help Section */}
        <div className='bg-pink-10 w-[87px] h-[17px] flex items-center gap-1'>
          <img src="alert-circle 1.png" className='w-[16px] h-[16px] opacity-70'/>
          <p className='text-[#FFFFFF] font-inter font-normal text-[13px] text-opacity-70'>Need Help</p>
        </div>
      </div>
    </div>
  )
}

export default Top
