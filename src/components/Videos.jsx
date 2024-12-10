import React from "react";

const Videos = () => {
  const items = [
    {
      price: "Rs 69,500",
      title: "Smart board",
      location: "Blue area , Islamabad",
      time: "1 weeks ago",
      image: "./src/assets/vid1.webp",
    },
    {
      price: "Rs 88,000",
      title: "Shotgun microphone",
      location: "F-10 , Islamabad",
      time: "2 weeks ago",
      image: "./src/assets/vid2.webp",
    },
    {
      price: "Rs 450,000",
      title: "Interactive Flat panel",
      location: "Gulberg , Lahore",
      time: "3 weeks ago",
      image: "./src/assets/vid3.webp",
    },
    {
      price: "Rs 5,999",
      title: "Walkie Talkie",
      location: "DHA phase-1 , Lahore",
      time: "2 weeks ago",
      image: "./src/assets/vid4.webp",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Videos-Audios</h2>
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

export default Videos;
