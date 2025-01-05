import React, { useState } from "react";
import Sidebar from "./Sidebar";
// import Table from "./Table";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

export default function CartPage() {
  const [open, setOpen] = useState(false);

  return (
    <CartProvider>
      <div className="flex h-screen ">
        <div className="flex-1 ">
          <Cart />
        </div>
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </CartProvider>
  );
}
