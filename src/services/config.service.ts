import { api } from "@/config/axios.config";

export const getConfig = async () => {
    const { data } = await api.get("/config", {
        'method': 'GET',
        'headers': {
          'apikey': import.meta.env.VITE_API_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
    });
    
    return data[0];
  };