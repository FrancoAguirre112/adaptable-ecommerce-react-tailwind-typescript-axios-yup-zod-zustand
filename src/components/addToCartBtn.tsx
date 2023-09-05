import { ProductType } from "../types";
import { useCartContext } from "../context/cartContext";
import { useEffect, useState } from "react";

function AddToCartBtn({
  minimized = false,
  product,
}: {
  minimized?: boolean;
  product: ProductType;
}) {
  const [isInCart, setIsInCart] = useState(false);

  const { addToCart, removeFromCart, cartItems } = useCartContext();


  const handleClick = () => {
    if (!isInCart) {
      addToCart(product);
    } else {
      removeFromCart(product.id);
    }
  };

  useEffect(() => {
    const itemInCart = cartItems.some((item) => item.product.id === product.id);
    setIsInCart(itemInCart);
  }, [cartItems]);

  return (
    <button
      className={`flex items-center justify-center text-lg text-white px-8 py-3 gap-1 font-semibold ${
        isInCart ? "bg-red-900" : `bg-main`
      } rounded-lg transition-all flex-grow`}
      onClick={handleClick}
    >
      {minimized == false &&
        (isInCart ? (
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
            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M12.5 17h-6.5v-14h-2"></path>
            <path d="M6 5l14 1l-1 7h-13"></path>
            <path d="M16 19h6"></path>
          </svg>
        ) : (
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
            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M12.5 17h-6.5v-14h-2"></path>
            <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
            <path d="M16 19h6"></path>
            <path d="M19 16v6"></path>
          </svg>
        ))}
    </button>
  );
}

export default AddToCartBtn;
