import { useContext } from "react";
import ComplexGrid from "../Home/Home"; // Adjust the import path as needed
import { Box, Typography } from "@mui/material";

import { Context } from "../../Context/Context";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  text: {
    fontFamily: "Inter, sans-serif !important",
    fontWeight: 500,
    fontSize: "32px !important",
    lineHeight: "38.73px !important",
  },
});
function ProductList() {
  const classes = useStyles();
  const { products } = useContext(Context);

  return (
    <Box>
      <Typography
        color={"primary"}
        sx={{
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
        className={classes.text}
      >
        Results
      </Typography>

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem 0.5rem",
        }}
      >
        {products.map((product) => (
          <ComplexGrid product={product} key={product.id} />
        ))}
      </Box>
    </Box>
  );
}

export default ProductList;
