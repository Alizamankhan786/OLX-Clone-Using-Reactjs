
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white py-3 px-4 shadow">
      {/* Logo */}
      <div className="flex items-center">
        <img style={{
          width: "100px"
        }} src="./src/assets/olx logo.jpg" alt="OLX Logo" />
      </div>

      {/* Categories */}
      <div className="flex space-x-6 text-sm font-medium text-gray-700">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20 10H4v10h16V10zm-1 2v6H5v-6h14zm2-9H3v6h18V3z" />
          </svg>
          <span style={{
            fontSize: "20px"
          }} className="font-bold" >Motors</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 12H2v6h2v-6zm0-2V4h18v6H4zm4 8h2v-6H8v6zm10 0h2v-6h-2v6zm2-8H6v10h12V10z" />
          </svg>
          <span style={{
            fontSize: "20px"
          }} className="font-bold">Property</span>
        </button>
      </div>
      <br />

      {/* Location and Search */}
      <div className=" flex items-center space-x-4">
        {/* Location */}
        <div style={{
          height: "40px"
        }} className="w-80 flex items-center bg-gray-100 rounded px-3 py-2">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.4 2 5.6 4.8 5.6 8.4c0 6.8 6.4 11.6 6.4 11.6s6.4-4.8 6.4-11.6c0-3.6-2.8-6.4-6.4-6.4zm0 10c-1.6 0-2.8-1.2-2.8-2.8S10.4 6.4 12 6.4s2.8 1.2 2.8 2.8S13.6 12 12 12z" />
          </svg>
          <span className="ml-2 text-sm">Pakistan</span>
        </div>

        {/* Search */}
        <div style={{
          height: "40px"
        }} className="w-80 flex bg-gray-100 rounded px-3 py-2">
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
            className="flex-grow bg-transparent outline-none text-sm"
          />
          <button>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M9 2C4.6 2 1 5.6 1 10s3.6 8 8 8c1.6 0 3.2-.4 4.4-1.2L19.6 21 21 19.6l-6.4-6.4c.8-1.2 1.2-2.8 1.2-4.4 0-4.4-3.6-8-8-8zm0 2c3.4 0 6 2.6 6 6s-2.6 6-6 6-6-2.6-6-6 2.6-6 6-6z" />
            </svg>
          </button>
        </div>
      </div>
      

      <div className="flex items-center space-x-4">
        <button className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
          + SELL
        </button>
      </div>
    </div>
  );
};

export default Header;
