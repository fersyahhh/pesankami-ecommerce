import { getProducts } from "../services/product-service";
import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function set data to products (useState)
  useEffect(() => {
    getProducts((data) => {
      console.log("Data diterima:", data);
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return { products, loading };
}
