import React from "react";
import { ChevronLeft } from "lucide-react";
import {useCart} from './CartContext'

export default function Sidebar({ open, setOpen }) {
  const {addToCart} = useCart();
  const items = [
    { item: "Burger", price: 120 },
    { item: "Pizza", price: 300 },
    { item: "Pasta", price: 250 },
    { item: "Sandwich", price: 100 },
    { item: "Juice", price: 80 },
    { item: "Fries", price: 60 },
    { item: "Ice Cream", price: 150 },
    { item: "Hot Dog", price: 90 },
    { item: "Milkshake", price: 120 },
    { item: "Tacos", price: 130 },
    { item: "Donut", price: 70 },
    { item: "Smoothie", price: 110 },
  ];

  return (
    <div>
      <span
        className={`h-full ${
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
            <h2 className="text-xl font-bold mb-4">Items</h2>
            <div className="grid grid-cols-3 gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-full p-4 border rounded-lg shadow-md bg-white"
                >
                  <h3 className="text-lg font-semibold">{item.item}</h3>
                  <p>Price: ₹{item.price}</p>
                  <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={()=>addToCart(item)}
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
