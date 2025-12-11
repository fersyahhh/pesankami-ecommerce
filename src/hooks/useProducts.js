import { getProducts } from "../services/product-service";
import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  
  // Function set data to products (useState)
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return { products };
}
