import React from "react";

const Houses = () => {
  const items = [
    {
      price: "Rs 14,994,000",
      title: "Luxury brand new house",
      location: "Park view villa , Lahore",
      time: "1 days ago",
      image: "./src/assets/house1.webp",
    },
    {
      price: "Rs 45,000,000",
      title: "Prime Location 3200 square feet house",
      location: "Jinnah gardens phase , Islamabad",
      time: "4 days ago",
      image: "./src/assets/house2.webp",
    },
    {
      price: "Rs 17,000,000",
      title: "3.5 Marla house for sale",
      location: "Johar town , Lahore",
      time: "1 days ago",
      image: "./src/assets/house3.webp",
    },
    {
      price: "Rs 15,000,000",
      title: "5 Marla beautiful grey structure house for sale",
      location: "Chenab rangers road , Sialkot",
      time: "3 days ago",
      image: "./src/assets/house4.webp",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Houses</h2>
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

export default Houses;
