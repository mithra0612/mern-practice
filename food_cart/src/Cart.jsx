import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Trash ,ListX} from "lucide-react";

export default function Cart() {
  const { cartItems, updateQuantity, deleteFromCart, clearCart } = useCart();
  const [search, setSearch] = useState("");

  const filteredData = cartItems.filter((item) =>
    item.item.toLowerCase().startsWith(search.toLowerCase())
  );

  const total = filteredData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between">
      <h2 className="text-xl font-bold mb-4">Items Cart</h2>
      <button className="text-md font-bold mb-4" onClick = {()=>clearCart()}><ListX/></button>
      </div>
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
              <div className="flex gap-4 justify-between items-center">
                <img src = {item.Image} className="w-30 h-20"></img>
                <h3 className="text-lg font-semibold">{item.item}</h3>
                <p>Price: ${item.price}</p>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => updateQuantity(item, item.quantity - 1)}
                  >
                    -
                  </button>

                  <p>{item.quantity}</p>

                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

           
                <button
                  className="text-red-800"
                  onClick={() => deleteFromCart(item)}
                >
                  <Trash className="h-6 w-6"></Trash>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty</p>
        )}
      </div>

      {/* Total */}
      <div className="mt-6 p-4 border-t border-gray-300">
        <p className="text-lg font-bold">Total: ${total}</p>
      </div>
    </div>
  );
}
