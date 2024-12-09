import React from "react";

const Bikes = () => {
  const items = [
    {
      price: "Rs 248,000",
      title: "Yamaha Ybr",
      location: "Makkah Town , Multan",
      time: "3 days ago",
      image: "./src/assets/ybr.webp",
    },
    {
      price: "Rs 165,000",
      title: "CG 125",
      location: "Korangi , Karachi",
      time: "5 days ago",
      image: "./src/assets/125.webp",
    },
    {
      price: "Rs 268,000",
      title: "CB Suzuki 150",
      location: "Munawar colony , Rawalpindi",
      time: "6 days ago",
      image: "./src/assets/150.webp",
    },
    {
      price: "Rs 255,000",
      title: "Harley Davidson",
      location: "100 Ft road , Sukkur",
      time: "9 days ago",
      image: "./src/assets/davidson.webp",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Bikes & Motorcycles</h2>
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

export default Bikes;
