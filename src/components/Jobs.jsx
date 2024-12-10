import React from "react";

const Jobs = () => {
  const items = [
    {
      title: "Home based jobs",
      location: "Blue area , Islamabad",
      time: "1 weeks ago",
      image: "./src/assets/job1.webp",
    },
    {
      title: "Field support technician ",
      location: "Circular road , Gujrat",
      time: "5 days ago",
      image: "./src/assets/job2.webp",
    },
    {
      title: "Online jobs / Typing jobs",
      location: "Rasheedabad , Multan",
      time: "2 weeks ago",
      image: "./src/assets/job3.webp",
    },
    {
      title: "Repair technician",
      location: "DHA defence , Lahore",
      time: "3 weeks ago",
      image: "./src/assets/job4.webp",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Jobs</h2>
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

export default Jobs;
