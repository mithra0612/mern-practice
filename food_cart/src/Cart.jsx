import React, { useState } from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cartItems } = useCart(); 
  const{deleteFromCart} = useCart();
  const [search, setSearch] = useState("");

  const filteredData = cartItems.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  let total = 0;
  filteredData.forEach(item=>{
    total+=item.price;
  } )

  return (
    <div className="p-4 w-full">
      <h2 className="text-xl font-bold mb-4">Items Cart</h2>

      {/* Search bar */}
      <form className="flex items-center w-full mx-auto py-4">
        <input
          type="text"
          id="simple-search"
          className="bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:ring-1 outline-none text-sm rounded-lg flex-1 ps-3 p-2.5"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="flex flex-col gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="w-full p-4 border rounded-lg shadow-md bg-white flex justify-between items-center"
            >
              <div className="flex gap-4 justify-stretch items-center">
                <h3 className="text-lg font-semibold">{item.item}</h3>
                <p>Price: ₹{item.price}</p>
                <button className="text-red-800" onClick={()=>deleteFromCart(item)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty</p>
        )}
      </div>

      <div className="mt-6 p-4 border-t border-gray-300">
        <p className="text-lg font-bold">Total:{total}</p>
      </div>
    </div>
  );
}
