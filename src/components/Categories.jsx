import React from "react";

const Categories = () => {
  const categories = [
    { name: "Mobiles", color: "bg-red-500", image: "./src/assets/mobiles.png" },
    { name: "Vehicles", color: "bg-yellow-500", image: "./src/assets/vehicles.png" },
    { name: "Property For Sale", color: "bg-orange-300", image: "./src/assets/property.png" },
    { name: "Property For Rent", color: "bg-blue-200", image: "./src/assets/key.png" },
    { name: "Electronics & Home Appliances", color: "bg-gray-400", image: "./src/assets/electronics.png" },
    { name: "Bikes", color: "bg-teal-300", image: "./src/assets/bikes.png" },
    { name: "Business, Industrial & Agriculture", color: "bg-cyan-300", image: "./src/assets/business.png" },
    { name: "Services", color: "bg-orange-200", image: "./src/assets/services.png" },
    { name: "Jobs", color: "bg-teal-400", image: "./src/assets/jobs.png" },
    { name: "Animals", color: "bg-yellow-300", image: "./src/assets/animals.png" },
    { name: "Furniture & Home Decor", color: "bg-red-400", image: "./src/assets/furniture.png" },
    { name: "Fashion & Beauty", color: "bg-blue-200", image: "./src/assets/fashion.png" },
    { name: "Books, Sports & Hobbies", color: "bg-orange-300", image: "./src/assets/books.png" },
    { name: "Kids", color: "bg-pink-300", image: "./src/assets/kids.png" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-6">All categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 group transition duration-300"
          >
            <div
              className={`${category.color} w-16 h-16 flex justify-center items-center rounded-full transition-transform transform group-hover:scale-110 group-hover:brightness-90`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-10 h-10 object-contain transition-transform transform group-hover:scale-110"
              />
            </div>
            <p className="text-center text-sm font-medium group-hover:text-blue-600">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
