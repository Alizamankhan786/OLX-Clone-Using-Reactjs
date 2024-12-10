import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Cars</a></li>
            <li><a href="#" className="hover:underline">Flats for rent</a></li>
            <li><a href="#" className="hover:underline">Mobile Phones</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Trending Searches</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Bikes</a></li>
            <li><a href="#" className="hover:underline">Watches</a></li>
            <li><a href="#" className="hover:underline">Books</a></li>
            <li><a href="#" className="hover:underline">Dogs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Dubizzle Group</a></li>
            <li><a href="#" className="hover:underline">OLX Blog</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">OLX for Businesses</a></li>
          </ul>
        </div>

        {/* OLX */}
        <div>
          <h3 className="font-bold text-lg mb-4">OLX</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="flex space-x-2">
            <a href="#" className="hover:opacity-75">
              <img src="./src/assets/icon1.svg" alt="App Store" className="h-8"/>
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="./src/assets/icon2.svg" alt="Google Play" className="h-8"/>
            </a>
            <a href="#" className="hover:opacity-75">
              <img src="./src/assets/icon3.svg" alt="App Gallery" className="h-8"/>
            </a>
          </div>
        </div>
      </div>
      <div style={{
        fontFamily: "bold",
        textAlign: "right",
        paddingRight: "25px"
      }} className="bg-teal-800 text-white py-4 text-sm">
        Free Classifieds in Pakistan . © 2006-2024 OLX
      </div>
    </footer>
  );
};

export default Footer;
