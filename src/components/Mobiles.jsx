import React from "react";

const Mobiles = () => {
  const items = [
    {
      price: "Rs 48,000",
      title: "Iphone Xsmax (read add)",
      location: "Commercial Market, Rawalpindi",
      time: "3 days ago",
      image: "./src/assets/xsmax.webp",
    },
    {
      price: "Rs 6,000",
      title: "Oneplus",
      location: "I-13, Islamabad",
      time: "5 days ago",
      image: "./src/assets/oneplus.webp",
    },
    {
      price: "Rs 68,000",
      title: "Iphone 11pro max Pta Approved",
      location: "DHA Phase 2 Extension, Karachi",
      time: "6 days ago",
      image: "./src/assets/11promax.webp",
    },
    {
      price: "Rs 75,000",
      title: "Vivo",
      location: "Cantt, Lahore",
      time: "9 days ago",
      image: "./src/assets/vivo.webp",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">More in Mobile Phones</h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold">{item.price}</h3>
                <p className="text-sm text-gray-700 truncate">{item.title}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-sm text-gray-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobiles;
