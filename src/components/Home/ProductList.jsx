// import { useContext } from "react";
// import ComplexGrid from "./Home"; // Adjust the import path as needed
// import { Box } from "@mui/material";

// import { Context } from "../../Context";

// function ProductList() {
//   const { products } = useContext(Context);

//   return (
//     <div>
//       <h1> Results</h1>
//       <Box
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: "1rem 0.5rem",
//           border: "2px solid black",
//         }}
//       >
//         {products.map((product) => (
//           <ComplexGrid product={product} key={product.id} />
//         ))}
//       </Box>
//     </div>
//   );
// }

// export default ProductList;
// import React, { useContext, useState } from "react";
// import ComplexGrid from "./Home"; // Adjust the import path as needed
// import { Box, TextField, MenuItem } from "@mui/material";

// import { Context } from "../../Context";

// function ProductList() {
//   const { products } = useContext(Context);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredProducts = products.filter((product) => {
//     const matchesCategory =
//       selectedCategory === "All" || product.category === selectedCategory;

//     const matchesSearchQuery = product.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());

//     return matchesCategory && matchesSearchQuery;
//   });

//   return (
//     <div>
//       <h1>Results</h1>
//       <Box
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: "1rem 0.5rem",
//           border: "2px solid black",
//         }}
//       >
//         <Box>
//           <TextField
//             label="Category"
//             select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             variant="outlined"
//           >
//             <MenuItem value="All">All</MenuItem>
//             <MenuItem value="Mobile">Mobile</MenuItem>
//             <MenuItem value="Games">Games</MenuItem>
//             <MenuItem value="Toys">Toys</MenuItem>
//           </TextField>
//         </Box>
//         <Box>
//           <TextField
//             label="Search"
//             variant="outlined"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </Box>
//         {filteredProducts.map((product) => (
//           <ComplexGrid product={product} key={product.id} />
//         ))}
//       </Box>
//     </div>
//   );
// }

// export default ProductList;

import React, { useContext } from "react";
import ComplexGrid from "../Home/Home"; // Adjust the import path as needed
import { Box, TextField, MenuItem } from "@mui/material";

import { Context } from "../../Context";

function ProductList() {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
  } = useContext(Context);

  return (
    <div>
      <h1>Results</h1>
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
