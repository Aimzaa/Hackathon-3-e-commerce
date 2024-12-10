import React from "react";

const Faq = () => {
  return (
    <>
      <div className="bg-gray-5 w-[1050px] h-[850px] mx-[150px] flex flex-col items-center">
        <h1 className="text-[#000000] font-semibold text-4xl pt-[90px]">
          Questions Looks Here
        </h1>
        <div className="w-[644px] h-[48px] bg-yellow-20 flex justify-center mt-8 mx-auto">
          <p className="text-[#9F9F9F] font-normal text-base text-center whitespace-nowrap">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
        </div>
        {/* Pink Box */}
        <div className="bg-pink-40 w-[1050px] h-[558px] mt-8 flex justify-between">
          {/* Left Side: 3 Purple Boxes */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#F7F7F7] w-[516px] h-[170px] p-4 flex justify-between items-start">
              <div className="flex flex-col justify-start">
                <h6 className="text-[#333333] font-bold text-[16px]">
                What types of chairs do you offer?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-base pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" />
            </div>

            <div className="bg-[#F7F7F7] w-[516px] h-[170px] p-4 flex justify-between items-start">
            <div className="flex flex-col justify-start">
                <h6 className="text-[#333333] font-bold text-[16px]">
                Do your chairs come with a warranty?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-base pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" />
            </div>

            <div className="bg-[#F7F7F7] w-[516px] h-[170px] p-4 flex justify-between items-start">
            <div className="flex flex-col justify-start">
                <h6 className="text-[#333333] font-bold text-[16px]">
                Can I try a chair before purchasing?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-base pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" />
            </div>
          </div>
          {/* Right Side: 3 Purple Boxes */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#F7F7F7] w-[516px] h-[170px] p-4 flex justify-between items-start"><div className="flex flex-col justify-start">
                <h6 className="text-[#333333] font-bold text-[16px]">
                How can we get in touch with you?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-base pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" /></div>

            <div className="bg-[#F7F7F7] w-[516px] h-[170px] p-4 flex justify-between items-start"><div className="flex flex-col justify-start">
                <h6 className="text-[#333333] font-bold text-[16px]">
                What will be delivered? And When?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-base pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" /></div>

            <div className="bg-[#F7F7F7] w-[516px] h-[170px] p-4 flex justify-between items-start">
            <div className="flex flex-col justify-start">
                <h6 className="text-[#333333] font-bold text-[16px]">
                How do I clean and maintain my Comforty chair?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-base pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
