import { useContext } from "react";
import ComplexGrid from "./Home"; // Adjust the import path as needed
import { Box } from "@mui/material";

import { Context } from "../../Context";

function ProductList() {
  const { products } = useContext(Context);

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
