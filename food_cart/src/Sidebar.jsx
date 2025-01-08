import React from "react";
import { ChevronLeft } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";

export default function Sidebar({ open, setOpen }) {
  const { addToCart } = useCart();
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const items = [
    {
      item: "Pizza",
      price: 12.99,
      Image:
        "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
      category: "Non-Veg",
    },
    {
      item: "Burger",
      price: 8.99,
      Image:
        "https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg",
      category: "Non-Veg",
    },
    {
      item: "Pasta",
      price: 10.99,
      Image:
        "https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M=",
      category: "Veg",
    },
    {
      item: "Sushi",
      price: 15.99,
      Image:
        "https://t4.ftcdn.net/jpg/01/35/23/71/360_F_135237184_vZnNVRuaHQZclXjxJ7ftEa3IyerhDF2y.jpg",
      category: "Non-Veg",
    },
    {
      item: "Salad",
      price: 6.99,
      Image:
        "https://media.istockphoto.com/id/1454741285/photo/roast-fish-and-vegetable-salad-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Slmk-RLvdR3317E5W2UKLul4y1ZH3axjL2XCNOBZbhE=",
      category: "Veg",
    },
    {
      item: "Tacos",
      price: 7.99,
      Image:
        "https://media.istockphoto.com/id/1200136076/photo/shrimp-street-tacos.jpg?s=612x612&w=0&k=20&c=QSliAiLbFEmF7WPN69yEc-weAInG6A4GquGxaGEgBzE=",
      category: "Non-Veg",
    },
    {
      item: "Ice Cream",
      price: 5.99,
      Image:
        "https://cdn.prod.website-files.com/630a4d18e83aaa000bcd651e/6691780e4f5a682a2e3648c0_shutterstock_2429103279.jpg",
      category: "Veg",
    },
    {
      item: "Steak",
      price: 20.99,
      Image:
        "https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?s=612x612&w=0&k=20&c=F_vrvwIOWe3vBR2y16Dp4z6d46K1sIY3togU3VYjrpA=",
      category: "Non-Veg",
    },
    {
      item: "Fries",
      price: 3.99,
      Image:
        "https://www.tastingtable.com/img/gallery/the-origin-of-french-fries-might-surprise-you/l-intro-1642720908.jpg",
      category: "Veg",
    },
  ];

  const sortedItems = [...items].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );
  const filteredData = sortedItems.filter((item) =>
    selectedCategory === "All" || item.category === selectedCategory
  );
  
  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <span
        className={`min-h-screen ${
          open ? "bg-blue-100 w-[600px] min-h-full" : "bg-inherit w-[20px]"
        } flex flex-col px-4 relative`}
      >
        <button
          onClick={() => setOpen(!open)}
          className={`absolute transition-all duration-300 ${
            open ? "right-0 top-1" : "left-0 top-1"
          }`}
        >
          <ChevronLeft
            className={`w-8 h-8 transform ${open ? "rotate-180" : "rotate-0"}`}
          />
        </button>

        {open && (
          <div className="p-4">
  <div className="flex justify-between items-center">
    <h2 className="text-xl font-bold mb-4">Items</h2>

    <select
      value = {selectedCategory}
      onChange = {(e) => handleFilter(e.target.value)}
      className="py-1 px-4 mb-4 border rounded-md bg-white text-gray-700 focus:ring-0 "
    >
      <option value="All">All</option>
      <option value="Veg">Veg</option>
      <option value="Non-Veg">Non-Veg</option>
    </select>

    {/* Sort Button */}
    <button
      className="py-1 mb-4 pr-8  rounded-md"
      onClick={handleSort}
    >
      Sort by price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
    </button>
  </div>

  <div className="grid grid-cols-3 gap-4">
    {filteredData.map((item, index) => (
      <div
        key={index}
        className="w-full p-4 border rounded-lg shadow-md bg-white"
      >
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{item.item}</h3>
          <h3
            className={`text-[12px] px-2 py-2 rounded-md ${
              item.category === "Veg"
                ? "text-green-700 bg-green-100"
                : "text-red-700 bg-red-100"
            }`}
          >
            {item.category}
          </h3>
        </div>
        <p className="mb-2">Price: ${item.price}</p>
        <img src={item.Image} className="h-20 w-30 "></img>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>

        )}
      </span>
    </div>
  );
}
