import React from "react";
import { useCartContext } from "../context/cartContext";
import { ProductType } from "../types";

type CartItemProps = {
  item: ProductType;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({ item, quantity }) => {
  const { addToCart, removeSingleFromCart, removeFromCart } =
    useCartContext();

  return (
    <div className="flex justify-around lg:grid lg:grid-cols-[7fr_repeat(5,1fr)] gap-2 lg:gap-24">
      {/* Product description */}
      <div className="flex gap-5 max-w-[18rem]">
        <img
          className="h-[6rem] w-[6rem] rounded-lg object-cover"
          src={item.images[0]}
          alt={`Image of  ${item.name}`}
        />
        <div className="hidden lg:flex flex-col gap-1">
          <h1 className="font-semibold line-clamp-2">{item.name}</h1>
          <h3 className="font-semibold text-icon">
            {item.category[0].toUpperCase() + item.category.slice(1)}
          </h3>
        </div>
      </div>

      {/* Product price */}
      <div className="hidden lg:flex font-bold w-[5rem]">
        <div className="flex justify-center items-center">
          <h1>${item.price.toFixed(2)}</h1>
        </div>
      </div>

      {/* Product quantity */}
      <div className="flex items-center justify-center w-[7rem]">
        <div className="flex items-center gap-2 bg-secondary rounded-2xl justify-center">
          <button
            className="px-2 pl-4 py-2 rounded-l-2xl hover:bg-slate-300 transition-colors"
            onClick={() => removeSingleFromCart(item.id)}
          >
            -
          </button>
          <div className="w-[1rem] flex justify-center">
            {quantity}
          </div>
          <button
            className="px-2 pr-4 py-2 rounded-r-2xl hover:bg-slate-300 transition-colors"
            onClick={() => addToCart(item)}
          >
            +
          </button>
        </div>
      </div>

      {/* Shipping */}
      <div className="lg:flex items-center hidden">
        <h1 className="text-secondary font-bold ">FREE</h1>
      </div>

      {/* Subtotal */}
      <div className="flex items-center font-bold w-[5rem]">
        <h1>${(quantity) * Number(item.price.toFixed(2))}</h1>
      </div>

      {/* Discard product */}
      <div className="flex items-center justify-start">
        <button
          className="text-main hover:scale-[120%] overflow-hidden flex justify-start"
          onClick={() => removeFromCart(item.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7l16 0"></path>
            <path d="M10 11l0 6"></path>
            <path d="M14 11l0 6"></path>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
