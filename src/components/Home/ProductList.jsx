import { useState, useEffect } from "react";
import axios from "axios";
import ComplexGrid from "./ComplexGrid"; // Adjust the import path as needed
import { Box } from "@mui/material";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1> Results</h1>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem 0.5rem",
          border: "2px solid black",
        }}
      >
        {products.map((product) => (
          <ComplexGrid product={product} key={product.id} />
        ))}
      </Box>
    </div>
  );
}

export default ProductList;
