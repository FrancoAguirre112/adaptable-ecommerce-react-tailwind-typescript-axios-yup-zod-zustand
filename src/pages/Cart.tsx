import { useState } from "react";
import { Link } from "react-router-dom";
import { Payment } from "@mercadopago/sdk-react";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/cartContext";
import { onError, onReady } from "@/services/payment.service";
import { Modal } from "@/components";
import { api } from "@/config/axios.config";

const Cart = () => {
  const { cartItems, totalPrice } = useCartContext();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleClick = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  if (cartItems.length === 0) {
    return (
      <div className="animate-fade-in flex flex-col items-center justify-center text-center w-auto h-screen">
        <h1 className="text-3xl font-semibold">
          It seems like your cart it's empty, let's change that!
        </h1>
        <Link
          to="/store"
          className={`w-[50%]  mt-6 bg-main flex items-center justify-center text-lg text-white px-10 py-3 gap-3 font-semibold rounded-lg hover:scale-105 transition-transform`}
        >
          Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-10 min-h-screen">
      {cartItems.map((cartItem) => {
        const item = cartItem.product;
        return (
          <ul key={item.id} className="flex flex-col gap-6 px-4 lg:px-24">
            <CartItem item={item} quantity={cartItem.amount} />
            <hr className="h-2" />
          </ul>
        );
      })}
      <div className="bg-secondary px-4 lg:px-24 mt-auto">
        <div className="my-6 mx-4 lg:mx-24 font-semibold">
          <div className="flex gap-4 justify-between">
            <h1>Subtotal</h1>
            <h1>${totalPrice.toFixed(2)}</h1>
          </div>
          <div className="flex gap-4 justify-between">
            <h1>Shipping</h1>
            <h1>FREE</h1>
          </div>
        </div>

        <div className="flex gap-4 justify-between mx-4 lg:mx-24 mb-6 font-bold">
          <h1>Grand Total</h1>
          <h1>${totalPrice.toFixed(2)}</h1>
        </div>
        <hr className="h-2" />
        <button
          onClick={handleClick}
          className={`w-full  mt-6 bg-main flex items-center justify-center text-lg text-white px-10 py-3 gap-3 font-semibold rounded-lg hover:scale-105 transition-transform`}
        >
          Checkout
        </button>
        <Modal open={isCheckoutOpen} onClose={handleClick}>
          <Payment
            initialization={{ amount: totalPrice }}
            customization={{
              paymentMethods: {
                ticket: "all",
                creditCard: "all",
                debitCard: "all",
                mercadoPago: "all",
              },
            }}
            onSubmit={async ({ formData }) => {
              try {
                const order = ["1"];
                console.log(order);
                const { data } = await api.post("/payment", {
                  email: formData.payer.email,
                  payment_method_id: formData.payment_method_id,
                  order: cartItems.map(
                    (item) => `${item.product.name} x${item.amount}`
                  ),
                  transaction_amount: formData.transaction_amount,
                });
                console.log(data);

                // Redirect to the success page
                window.location.href = "/success";

                // Unmount the payment Brick after a successful transaction
              } catch (error) {
                console.error("Error during payment:", error);
              }
            }}
            onReady={onReady}
            onError={onError}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
