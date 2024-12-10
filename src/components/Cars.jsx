import React from "react";

const Cars = () => {
  const items = [
    {
      price: "Rs 3,300,000",
      title: "Honda Civic",
      location: "Aimdabad road , Sialkot",
      time: "3 weeks ago",
      image: "./src/assets/car1.webp",
    },
    {
      price: "Rs 5,500,000",
      title: "Mitsubishi Ek Wagon",
      location: "Khalid bin waleed road , Krachi",
      time: "1 weeks ago",
      image: "./src/assets/car2.webp",
    },
    {
      price: "Rs 3,250,000",
      title: "Suzuki wagon R",
      location: "Begampura , Lahore",
      time: "2 weeks ago",
      image: "./src/assets/car3.webp",
    },
    {
      price: "Rs 3,300,000",
      title: "Daihatsu wagon R",
      location: "Gulshan-e-Iqbal town , karachi",
      time: "3 days ago",
      image: "./src/assets/car4.webp",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Cars</h2>
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

export default Cars;
