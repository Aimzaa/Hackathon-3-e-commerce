import React from "react";

const TopCategories = () => {
  return (
    <div className="mt-16">
      <div className="max-w-[1200px] w-full mx-auto flex gap-4 px-4">
        {/* Left Big Box */}
        <div className="w-1/2 h-[470px]">
          <img
            src="item-category 1.png"
            alt="Big Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side Box with 4 Images */}
        <div className="w-1/2 h-[470px] flex flex-col gap-4">
          {/* Top Row */}
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2 h-full">
              <img
                src="card-1.png"
                alt="Card 1"
                className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-1/2 h-full">
              <img
                src="card-2.png"
                alt="Card 2"
                className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2 h-full">
              <img
                src="card-3.png"
                alt="Card 3"
                className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-1/2 h-full">
              <img
                src="card-4.png"
                alt="Card 4"
                className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
