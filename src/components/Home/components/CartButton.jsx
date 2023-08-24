import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Context } from "../../../Context/Context";

import cartLogo from "../../../assets/cart.svg";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

const CustomButton = styled(Button)(({ width, theme }) => {
  const currentTheme = useTheme();
  return {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 14,
    fontWeight: 400,
    padding: "6px 12px",

    lineHeight: 1.5,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white", // Yellow background color on sm screens
    },
    [theme.breakpoints.only("xs")]: {
      backgroundColor: "#FFC915", // Red background color on xs screens
    },

    width: width || "130px", // Set the width, if not provided, default to 130px
    height: { xs: 0, sm: " 38px" },
    borderRadius: "6px",
    color: "black",
    opacity: 0.9,
    transition: {
      sm: " background-color 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s",
      xs: "none",
    },

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
  };
});

export default function AddToCartButton({ product }) {
  const { addToCart, removeFromCart, cart } = React.useContext(Context);

  const isProductInCart = cart.some((item) => item.id === product.id);
  const buttonText = isProductInCart ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img src={cartLogo} alt="Cart logo" style={{ maxWidth: "100%" }} />

      <Typography
        variant="caption"
        display="block"
        gutterBottom
        align="center"
        sx={{ fontSize: 12, margin: "0" }}
      >
        Remove from Cart
      </Typography>
    </div>
  ) : (
    "Add to Cart"
  );

  const buttonWidth = isProductInCart ? "160px" : "130px";

  const isAdded = isProductInCart;

  const handleCartAction = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  return (
    <CustomButton
      isAdded={isAdded}
      width={buttonWidth}
      onClick={handleCartAction}
    >
      {buttonText}
    </CustomButton>
  );
}
// import React from "react";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import { useTheme } from "@mui/material/styles";
// import { Context } from "../../../Context/Context";

// import cartLogo from "../../../assets/cart.svg";
// import { Typography } from "@mui/material";

// const CustomButton = styled(Button)(({ theme }) => {
//   const currentTheme = useTheme();

//   return {
//     boxShadow: "none",
//     textTransform: "none",
//     fontSize: 14,
//     fontWeight: 400,
//     padding: "6px 12px",
//     lineHeight: 1.5,
//     backgroundColor: "white",
//     borderRadius: "6px",
//     color: "black",
//     width: "130px",
//     height: "38px", // Adjust height as needed

//     opacity: 0.9,
//     transition:
//       "background-color 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s",

//     fontFamily: [
//       "Inter",
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//     "&:hover": {
//       backgroundColor: "#FFC915",
//       borderColor: "grey",
//       color: "black",
//       boxShadow: "none",
//     },
//   };
// });

// export default function AddToCartButton({ product }) {
//   const { addToCart, removeFromCart, cart } = React.useContext(Context);
//   const isProductInCart = cart.some((item) => item.id === product.id);

//   const buttonText = isProductInCart ? (
//     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//       <img src={cartLogo} alt="Cart logo" style={{ maxWidth: "100%" }} />
//       <Typography variant="caption" display="block" gutterBottom>
//         Remove from Cart
//       </Typography>
//     </div>
//   ) : (
//     "Add to Cart"
//   );

//   const handleCartAction = () => {
//     if (isProductInCart) {
//       removeFromCart(product.id);
//     } else {
//       addToCart(product.id);
//     }
//   };

//   return <CustomButton onClick={handleCartAction}>{buttonText}</CustomButton>;
// }
