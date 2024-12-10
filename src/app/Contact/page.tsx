import React from "react";

const Contact = () => {
  return (
    <>
    <div className="bg-gray-5 w-[1200px] h-[960px] mx-[80px] flex flex-col items-center">
      <h1 className="text-[#000000] font-semibold text-4xl pt-[90px]">
        Get In Touch With Us
      </h1>
      <div className="w-[644px] h-[48px] bg-yellow-20 flex items-center justify-center mt-8 mx-auto">
        <p className="text-[#9F9F9F] font-normal text-base text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="bg-red-40 w-[900px] h-[520px] mt-[50px] mx-[30px] gap-8 flex">
        {/* Left Section */}
        <div className="bg-green-20 w-[393px] h-[480px] mt-10 flex flex-col items-start px-12 gap-1">
          <div className="flex items-start gap-4 mt-[50px]">
            <img src="Vector.png" className="w-[22px] h-[27px]" />
            <h6 className="font-medium text-xl">Address</h6>
          </div>
          <p className="text-[#000000] font-normal text-base text-start pl-9">
            236 5th SE Avenue, New York NY10000, United States
          </p>

          <div className="flex items-start gap-4 mt-[50px]">
            <img src="Vector (1).png" className="w-[23px] h-[23px]" />
            <h6 className="font-medium text-xl">Phone</h6>
          </div>
          <p className="text-[#000000] font-normal text-base text-start pl-9">
            Mobile: +(84) 546-6789 <br />
            Hotline: +(84) 456-6789
          </p>

          <div className="flex items-start gap-4 mt-[50px]">
            <img src="Vector (2).png" className="w-[23px] h-[23px]" />
            <h6 className="font-medium text-xl">Working Time</h6>
          </div>
          <p className="text-[#000000] font-normal text-base text-start pl-9">
            Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-green-5 w-[510px] h-[700px]">
          <div className="bg-green-10 w-[510px] h-[700px] p-12 flex flex-col gap-6">
            {/* Your Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-black font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-black font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-black font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-black font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[150px]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 w-[200px] h-[55px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#F4F4F4] w-[] h-[270px] mx-[150px] items-center flex justify-center mb-[-80px]">
      <div className="bg-green-30 w-[950px] h-[70px] justify-between flex">
        <div className="bg-yellow-30 w-[250px] h-[70px] flex justify-between gap-1">
          <div className="bg-orange-30 w-[60px] h-[69px] items-center flex">
            <img src="trophy 1.png"/>
          </div>
          <div className="bg-orange-30 w-[190px] h-[69px]">
          <h1 className="text-[#242424] font-semibold text-[20px] pt-1">High Quality</h1>
          <p className="text-[#898989] font-medium text-[16px] pt-3">crafted from top materials</p>
          </div>
        </div>

        <div className="bg-yellow-30 w-[250px] h-[70px] flex justify-between gap-1">
        <div className="bg-orange-30 w-[60px] h-[69px] items-center flex">
            <img src="guarantee.png"/>
          </div>
          <div className="bg-orange-30 w-[190px] h-[69px]">
          <h1 className="text-[#242424] font-semibold text-[19px] pt-1">Warranty Protection</h1>
          <p className="text-[#898989] font-medium text-[16px] pt-3">Over 2 years</p>
          </div>
        </div>

        <div className="bg-yellow-30 w-[250px] h-[70px] flex justify-between gap-1">
        <div className="bg-orange-30 w-[60px] h-[69px] items-center flex">
            <img src="customer-support.png"/>
          </div>
          <div className="bg-orange-30 w-[190px] h-[69px]">
          <h1 className="text-[#242424] font-semibold text-[20px] pt-1">24/7 Support</h1>
          <p className="text-[#898989] font-medium text-[16px] pt-3">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
