import { ProductType } from "../types";
import Product from "./Product";
import { useProductStore } from "@/zustand/products.store";

interface RecommendedProps {
  product: ProductType;
}

const Recommended = ({ product }: RecommendedProps) => {
  const { products } = useProductStore();

  const shortproduct = products
    .filter((p) => {
      return p.id !== Number(product?.id);
    })
    .filter((filteredProduct) => filteredProduct.category === product.category)
    .slice(0, 4);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {shortproduct.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </div>
  );
};

export default Recommended;
