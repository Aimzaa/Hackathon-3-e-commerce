import React from "react";

const TopCategories = () => {
  return (
    <div className="mt-16 w-full px-4">
      {/* New Section with 3 Images */}
      <div className="max-w-[1000px] mx-auto flex flex-col gap-8">
        <h2 className="text-left text-2xl font-bold text-gray-800">
          Top Categorie
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Image 1 with Black Box */}
          <div className="w-[300px] h-[300px] relative group">
            <img
              src="C-1.png"
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Black Transparent Box */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Wing Chair</h3>
              <p className="text-sm">3,584 Products</p>
            </div>
          </div>

          {/* Image 2 with Black Box */}
          <div className="w-[300px] h-[300px] relative group">
            <img
              src="C-2.png"
              alt="Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Wooden Chair</h3>
              <p className="text-sm">157 Products</p>
            </div>
          </div>

          {/* Image 3 with Black Box */}
          <div className="w-[300px] h-[300px] relative group">
            <img
              src="C-3.png"
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">Desk Chair</h3>
              <p className="text-sm">154 Products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="mt-36 max-w-[1000px] mx-auto flex flex-col md:flex-row gap-4 relative">
        {/* Left Big Box */}
        <div className="md:w-1/2 w-full h-[300px] md:h-[485px] relative">
          {/* Vertical Text Outside Image */}
          <div className="absolute -left-60 top-1/2 -translate-y-1/2 -rotate-90 text-[22px] font-bold text-gray-600">
            EXPLORE NEW AND POPULAR STYLES
          </div>

          <img
            src="item-category 1.png"
            alt="Big Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side Box with 4 Images */}
        <div className="md:w-1/2 w-full h-[470px] flex flex-col gap-4">
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
