import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSingleProduct = async (productID) => {
  try {
    const { data } = await axios.get(
      `https://inventory-manager-fglv.onrender.com/api/v1/products/${productID}`,
      { withCredentials: true }
    );
    return data;
  } catch (error) {
    console.log(error.response);
    return error;
  }
};

const useFetchSingleProduct = (productID) => {
  return useQuery({
    queryKey: ["products", productID],
    queryFn: () => fetchSingleProduct(productID),
  });
};

export default useFetchSingleProduct;
