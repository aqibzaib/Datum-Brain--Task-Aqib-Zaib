import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/logo.svg";
import { IconButton, Toolbar, Typography } from "@mui/material";
import Menu from "./DropDown";
import SearchBar from "./searchBar";
import cartLogo from "../../assets/cart.svg";

import { makeStyles } from "@mui/styles";
import { Context } from "../../Context";

const useStyles = makeStyles({
  customText: {
    fontFamily: "Inter !important",
    fontWeight: " 700 !important",
    fontSize: "16px !important",
    lineHeight: "18px !important",
    color: "#666666 !important",
  },
  customBox: {
    width: "9px",
    height: "9px",
    borderRadius: "24px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // gap: "10px",
    backgroundColor: "#008ECC",
    color: "white",
  },
});

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   // height:theme.spacing
// }));

const ItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // border: "2px solid black",
  height: "100%", // Set a fixed height
}));

export default function Navbar() {
  const { cart } = React.useContext(Context);

  const classes = useStyles();
  return (
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Grid item sm={4} xs={6}>
            <ItemContainer>
              <img src={Logo} alt="Logo" style={{ marginRight: "8px" }} />
              <Typography
                variant="h6"
                style={{ margin: "0" }}
                color={"primary"}
              >
                MegaMart
              </Typography>
            </ItemContainer>
          </Grid>
          <Grid item sm={4} xs={12}>
            <ItemContainer sx={{ backgroundColor: "#F3F9FB" }}>
              <Menu />
              <SearchBar sx={{ border: "3px solid blue" }} />
            </ItemContainer>
          </Grid>
          <Grid item sm={4} xs={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                // border: "3px dotted brown",
                gap: "1rem",
                height: "100%",
              }}
            >
              {/* <IconButton> */}
              <img
                src={cartLogo}
                alt="Cart logo"
                style={{ maxWidth: "100%" }}
              />
              {/* </IconButton> */}
              <Typography
                // variant="h6"
                // style={{ margin: "0" }}
                className={classes.customText}
              >
                Cart
              </Typography>
              {cart.length > 0 && (
                <div className={classes.customBox}>{cart.length}</div>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Toolbar>
  );
}
