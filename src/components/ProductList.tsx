import React, { useEffect, useState } from 'react';
import Product from "./Product";
import Spinner from "./Spinner";
import { ProductType } from "../types";
import { useProductStore } from "@/zustand/products.store";

interface ProductListProps {
  search?: string;
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({ search = "", category = "" }) => {
  const { products, loadingProducts } = useProductStore();
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);

  useEffect(() => {
    if (loadingProducts) {
      return;
    }

    let filtered = products;

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Filter by search
    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [loadingProducts, category, search, products]);

  if (loadingProducts) {
    return <Spinner />;
  }

  if (filteredProducts.length === 0) {return (<div className=" flex flex-col items-center justify-center text-center w-full">
    <h1 className="text-xl font-semibold">It seems like the product you are trying to search doesn't exist.</h1>
    
  </div>)}


  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {filteredProducts.map((product: ProductType) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
