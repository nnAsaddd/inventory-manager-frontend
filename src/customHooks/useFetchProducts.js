import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get(
    `https://inventory-manager-fglv.onrender.com/api/v1/products`,
    {
      withCredentials: true,
    }
  );
  console.log(data);
  return data;
};

const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useFetchProducts;
