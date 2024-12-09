import React from "react";

const Banner = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <ul className="flex items-center space-x-4 px-6 py-3 text-gray-700 text-sm font-medium">
          <li className="hover:text-blue-600 cursor-pointer">ALL CATEGORIES</li>
          <li className="hover:text-blue-600 cursor-pointer">Mobile Phones</li>
          <li className="hover:text-blue-600 cursor-pointer">Cars</li>
          <li className="hover:text-blue-600 cursor-pointer">Motorcycles</li>
          <li className="hover:text-blue-600 cursor-pointer">Houses</li>
          <li className="hover:text-blue-600 cursor-pointer">Video-Audios</li>
          <li className="hover:text-blue-600 cursor-pointer">Tablets</li>
          <li className="hover:text-blue-600 cursor-pointer">Land & Plots</li>
        </ul>
      </nav>

      <div>
      <img
        src="./src/assets/banner image.jpeg"
        alt="banner"
        style={{
        padding: "30px"
        }}
        />
      </div>

      <div style={{
        marginTop: "-24px"
      }} className="bg-gray-100 text-center py-2 font-bold text-gray-500">
        <p>Ads by Google</p>
        <div className="flex justify-center space-x-4">
        <button className="text-blue-500 hover:underline">Send feedback</button>
        <button className="text-blue-500 hover:underline">Why this ad?</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
