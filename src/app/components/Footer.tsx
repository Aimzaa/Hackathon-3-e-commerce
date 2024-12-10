import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-bl w-full h-auto mt-20 flex flex-wrap justify-between items-start px-[5%] py-10 border-t border-b border-gray-200">
        <div className="bg-red-40 w-full sm:w-[300px] lg:w-[300px] h-auto mb-6 sm:mb-0">
          <div className="bg-yellow-20 w-full sm:w-[168px] h-[40px] flex justify-between pr-2 items-center">
            <img src="Logo Icon.png" className="w-10 h-10" />
            <h1 className="text-[#272343] font-Inter text-[26px]">Comforty</h1>
          </div>
          <div className="bg-yellow-20 w-full sm:w-[300px] h-auto mt-6">
            <p className="text-[#272343] font-normal text-base opacity-60">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus{" "}
            </p>
          </div>
          <div className="bg-yellow-20 w-full sm:w-[206px] h-auto mt-6 flex justify-between">
            <img src="F-1.png" className="w-8 h-8" />
            <img src="F-2.png" className="w-8 h-8" />
            <img src="F-3.png" className="w-8 h-8" />
            <img src="F-4.png" className="w-8 h-8" />
            <img src="F-5.png" className="w-8 h-8" />
          </div>
        </div>

        {/* Second Box */}
        <div className="bg-red-40 w-full sm:w-[105px] lg:w-[105px] h-auto sm:ml-[40px] mb-6 sm:mb-0">
          <h1 className="text-[#9A9CAA] font-medium text-[13px]">CATEGEORY</h1>
          <div className="bg-orange-5 w-full sm:w-[105px] h-auto mt-4 pt-1">
            <h4 className="font-Inter font-normal text-base text-[#272343] mb-1">
              Sofa
            </h4>
            <h4 className="font-Inter font-normal text-base text-[#272343] mb-1">
              Armchair
            </h4>
            <h4 className="font-Inter font-normal text-base text-[#272343] mb-1">
              Wing Chair
            </h4>
            <h4 className="font-Inter font-normal text-base text-[#007580] underline mb-1">
              Desk Chair
            </h4>
            <h4 className="font-Inter font-normal text-base text-[#272343] mb-1">
              Wooden Chair
            </h4>
            <h4 className="font-Inter font-normal text-base text-[#272343]">
              Park Bench
            </h4>
          </div>
        </div>

        {/* Third Box */}
        <div className="bg-red-40 w-full sm:w-[156px] lg:w-[156px] h-auto sm:ml-[50px] mb-6 sm:mb-0">
          <h1 className="text-[#9A9CAA] font-medium text-[13px]">SUPPORT</h1>
          <div className="bg-orange-5 w-full sm:w-[156px] h-auto mt-4 pt-1">
            <h4 className="text-[#272343] font-normal text-base mb-1 pt-1">
              Help & support
            </h4>
            <h4 className="text-[#272343] font-normal text-base mb-1">
              Terms & Conditions
            </h4>
            <h4 className="text-[#272343] font-normal text-base mb-1">
              Privacy Policy
            </h4>
            <h4 className="text-[#272343] font-normal text-base">Help</h4>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="bg-red-40 w-full sm:w-[330px] lg:w-[330px] h-auto sm:ml-[40px]">
          <h1 className="text-[#9A9CAA] font-medium text-[13px]">NEWSLETTER</h1>
          {/* Email Box */}
          <input
            type="email"
            placeholder="Enter Email"
            className="border border-gray-300 rounded px-2 py-1 w-[70%] mt-5 mr-3"
          />

          {/* Button */}
          <button className="bg-blue-500 text-white px-4 py-1 rounded">
            Submit
          </button>
          <div className="bg-pink-30 w-full sm:w-[330px] h-auto mt-6">
            <p className="text-[#272343] font-normal text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-20 w-full h-auto px-[5%] py-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="bg-green-30 w-full sm:w-[341px] h-auto">
          <p className="text-[#9A9CAA] font-normal text-sm">
            @ 2021 - Blogy - Designed & Developed by{" "}
            <span className="text-[#272343] font-normal text-sm">
              zakirsoft
            </span>
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-green-40 w-full sm:w-[227px] h-auto flex justify-between items-center">
          <img src="/Pay-1.png" alt="Pay 1" className="w-9 h-auto bg-none" />
          <img src="/Pay-2.png" alt="Pay 2" className="w-9 h-auto" />
          <img src="/Pay-3.png" alt="Pay 3" className="w-9 h-auto" />
          <img src="/Pay-4.png" alt="Pay 4" className="w-9 h-auto" />
        </div>
      </div>
    </>
  );
};

export default Footer;
