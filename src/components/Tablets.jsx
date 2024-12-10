import React from "react";

const Tablets = () => {
  const items = [
    {
      price: "Rs 19,500",
      title: "Lenovo M10 Plus",
      location: "Gulshan Ibqal , Karachi",
      time: "4 days ago",
      image: "./src/assets/tab1.webp",
    },
    {
      price: "Rs 75,000",
      title: "Samsung tab S7",
      location: "Johar town , Lahore",
      time: "2 days ago",
      image: "./src/assets/tab2.webp",
    },
    {
      price: "Rs 62,000",
      title: "Xiaomi tab 5",
      location: "Committe chowk , Rawalpindi",
      time: "3 weeks ago",
      image: "./src/assets/tab3.webp",
    },
    {
      price: "Rs 14,999",
      title: "Apple Ipad 4th Generation",
      location: "TownShip , Lahore",
      time: "4 days ago",
      image: "./src/assets/tab4.webp",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Tablets</h2>
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

export default Tablets;
