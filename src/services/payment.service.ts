import { initMercadoPago } from "@mercadopago/sdk-react";
import { IBrickError } from "@mercadopago/sdk-react/bricks/util/types/common";


// Define the onError function for handling errors
const onError = async (error: IBrickError) => {
  // Callback called for all Brick error cases
  console.error("Error in MercadoPago Brick:", error);
};

// Define the onReady function for handling when the Brick is ready
const onReady = async () => {
  // Initialize MercadoPago with the API key from environment variables
  initMercadoPago(import.meta.env.VITE_MP_KEY);
  /*
    Callback called when the Brick is ready.
    You can hide loaders on your site here, for example.
  */
};

// Export all the necessary functions and variables
export { onError, onReady };
