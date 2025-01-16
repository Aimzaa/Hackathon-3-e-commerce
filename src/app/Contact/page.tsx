import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-1 w-full min-h-screen px-4 md:px-8 lg:px-20 flex flex-col items-center">
        <h1 className="text-black font-semibold text-2xl md:text-3xl lg:text-4xl pt-20">
          Get In Touch With Us
        </h1>
        <div className="w-full md:w-3/4 lg:w-1/2 bg-yellow-2 flex items-center justify-center mt-6 p-4">
          <p className="text-gray-600 font-normal text-sm md:text-base text-center">
            For More Information About Our Product & Services, please feel free
            to drop us an email. Our staff will always be there to help you out.
            Do not hesitate!
          </p>
        </div>
        <div className="bg-red-2 w-full md:w-11/12 lg:w-3/4 mt-8 p-6 flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="bg-green-2 flex-1 flex flex-col items-start p-4 gap-6">
            <div className="flex items-start gap-4">
              <img src="Vector.png" className="w-6 h-6" alt="Address Icon" />
              <h6 className="font-medium text-lg">Address</h6>
            </div>
            <p className="text-black font-normal text-sm">
              236 5th SE Avenue, New York NY10000, United States
            </p>

            <div className="flex items-start gap-4 mt-4">
              <img src="Vector (1).png" className="w-6 h-6" alt="Phone Icon" />
              <h6 className="font-medium text-lg">Phone</h6>
            </div>
            <p className="text-black font-normal text-sm">
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </p>

            <div className="flex items-start gap-4 mt-4">
              <img src="Vector (2).png" className="w-6 h-6" alt="Clock Icon" />
              <h6 className="font-medium text-lg">Working Time</h6>
            </div>
            <p className="text-black font-normal text-sm">
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-green-1 flex-1 p-4">
            <div className="flex flex-col gap-4">
              {/* Your Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-black font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                ></textarea>
              </div>
              

              {/* Submit Button */}
              <button className="bg-blue-500 text-white py-3 px-6 rounded-md mt-4 hover:bg-blue-600">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 max-w-[1000px] mx-auto py-20 flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {/* Feature 1 */}
          <div className="flex gap-4">
            <img src="trophy 1.png" className="w-12 h-12" alt="High Quality" />
            <div>
              <h1 className="text-black font-semibold text-lg">
                High Quality
              </h1>
              <p className="text-gray-600 text-sm">
                Crafted from top materials
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <img
              src="guarantee.png"
              className="w-12 h-12"
              alt="Warranty Protection"
            />
            <div>
              <h1 className="text-black font-semibold text-lg whitespace-nowrap">
                Warranty Protection
              </h1>
              <p className="text-gray-600 text-sm">Over 2 years</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <img
              src="customer-support.png"
              className="w-12 h-12"
              alt="24/7 Support"
            />
            <div>
              <h1 className="text-black font-semibold text-lg">24/7 Support</h1>
              <p className="text-gray-600 text-sm">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
