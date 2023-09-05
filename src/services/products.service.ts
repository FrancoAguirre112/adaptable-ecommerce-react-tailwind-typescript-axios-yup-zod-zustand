import { api } from "@/config/axios.config";

interface ProductFetchType {
  id: number;
  name: string;
  category: string;
  images: string[];
  description: string;
  price: number;
  has_stock: boolean;
  }

export const getProducts = async () => {
    const { data } = await api.get("/products", {
        'method': 'GET',
        'headers': {
          'apikey': import.meta.env.VITE_API_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
    });
    return data.filter((product: ProductFetchType)=>{return product.has_stock === true});
  };