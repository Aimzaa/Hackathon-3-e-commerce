import React from "react";

const Faq = () => {
  return (
    <>
      <div className="bg-gray-1 max-w-[1200px] mx-auto px-4 py-10 flex flex-col items-center">
        <h1 className="text-[#000000] font-semibold text-2xl md:text-4xl pt-4 text-center">
          Questions Looks Here
        </h1>
        <div className="w-full md:w-[644px] bg-yellow-1 flex justify-center mt-6 mx-auto px-4 py-3 rounded">
          <p className="text-[#9F9F9F] font-normal text-sm md:text-base text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-pink-1 w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded">
          {/* Left Side FAQs */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#F7F7F7] w-full p-4 flex justify-between items-start rounded">
              <div className="flex flex-col">
                <h6 className="text-[#333333] font-bold text-base md:text-lg">
                  What types of chairs do you offer?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-sm md:text-base pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" alt="Expand" />
            </div>

            <div className="bg-[#F7F7F7] w-full p-4 flex justify-between items-start rounded">
              <div className="flex flex-col">
                <h6 className="text-[#333333] font-bold text-base md:text-lg">
                  Do your chairs come with a warranty?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-sm md:text-base pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" alt="Expand" />
            </div>

            <div className="bg-[#F7F7F7] w-full p-4 flex justify-between items-start rounded">
              <div className="flex flex-col">
                <h6 className="text-[#333333] font-bold text-base md:text-lg">
                  Can I try a chair before purchasing?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-sm md:text-base pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" alt="Expand" />
            </div>
          </div>

          {/* Right Side FAQs */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#F7F7F7] w-full p-4 flex justify-between items-start rounded">
              <div className="flex flex-col">
                <h6 className="text-[#333333] font-bold text-base md:text-lg">
                  How can we get in touch with you?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-sm md:text-base pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" alt="Expand" />
            </div>

            <div className="bg-[#F7F7F7] w-full p-4 flex justify-between items-start rounded">
              <div className="flex flex-col">
                <h6 className="text-[#333333] font-bold text-base md:text-lg">
                  What will be delivered? And When?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-sm md:text-base pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" alt="Expand" />
            </div>

            <div className="bg-[#F7F7F7] w-full p-4 flex justify-between items-start rounded">
              <div className="flex flex-col">
                <h6 className="text-[#333333] font-bold text-base md:text-lg">
                  How do I clean and maintain my Comforty chair?
                </h6>
                <p className="text-[#4F4F4F] font-normal text-sm md:text-base pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos molestiae
                  ipsa totam quidem?
                </p>
              </div>
              <img src="Plus.png" className="w-5 h-5 self-start" alt="Expand" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
