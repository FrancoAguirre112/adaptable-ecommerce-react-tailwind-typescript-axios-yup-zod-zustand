import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ProductState {
  products: Product[];
  loadingProducts: boolean;
  categories: string[];
  setProducts: (data: Product[]) => void;
}

interface Product {
  id: number;
  name: string;
  category: string;
  images: string[];
  description: string;
  price: number;
  hasStock: boolean;
}

export const useProductStore = create<ProductState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        categories: [],
        loadingProducts: true,
        setProducts: (data) =>
          set(() => ({
            products: data,
            categories: Array.from(
              new Set(data.map((product) => product.category))
            ),
            loadingProducts: false,
          })),
      }),
      {
        name: "product-storage",
      }
    )
  )
);
