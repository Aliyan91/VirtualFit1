'use client';
import Image from "next/image";

// Mock data for clothes (replace with real data later)
const clothes = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "Fashion Brand",
    price: "4000Rs",
    image: "/dress3.webp", // Image path relative to public directory
    category: "T-Shirts"
  },
  {
    id: 2,
    name: "Traditional Shalwar Kameez",
    brand: "Ethnic Wear",
    price: "5500Rs",
    image: "/dress2.webp",
    category: "Shalwar Kameez"
  },
  {
    id: 3,
    name: "Elegant Waistcoat",
    brand: "Formal Collection",
    price: "3500Rs",
    image: "/waistcoat.webp",
    category: "Waistcoat"
  },
  // Add more items as needed
];

const categories = [
  "All",
  "Shalwar Kameez",
  "Waistcoat",
  "Multani Churidar",
  "Sindhi Churidar",
  "Accessories"
];

export default function Catalog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Browse through our wide range of clothing options
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                hover:bg-blue-500 hover:text-white transition duration-300 shadow-md"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search clothes..."
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 
                text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          <select className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Clothes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clothes.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                transition duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 
                  shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {item.brand}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    {item.price}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 
                    transition duration-300">
                    Try On
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
            hover:bg-blue-500 hover:text-white transition duration-300 shadow-md">
            Previous
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md">
            1
          </button>
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
            hover:bg-blue-500 hover:text-white transition duration-300 shadow-md">
            2
          </button>
          <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
            hover:bg-blue-500 hover:text-white transition duration-300 shadow-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 