import React from "react";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { Context } from "../../Context";

const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  fontWeight: 400,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "white",
  borderColor: "#0063cc",
  width: "130px",
  height: "38px",
  borderRadius: "6px",
  color: "black",
  opacity: 0.9,

  // Add transition property for smooth animation
  transition:
    "background-color 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s",
  fontFamily: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),

  "&:hover": {
    backgroundColor: "#FFC915",
    borderColor: "grey",
    color: "black",
    boxShadow: "none",
  },
  // "&:active": {
  //   boxShadow: "none",
  //    backgroundColor: "#0062cc",
  //   borderColor: "#005cbf",
  // },
  "&:focus": {
    // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function AddToCartButton({ product }) {
  const { addToCart, cart } = React.useContext(Context);

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  // Calculate cart count
  const cartCount = cart.length;
  console.log(cartCount);

  return <CustomButton onClick={handleAddToCart}>Add to Cart</CustomButton>;
}
