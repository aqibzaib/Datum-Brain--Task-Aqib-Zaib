import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Rating } from "@mui/material";
import AddToCartButton from "./components/CartButton";
import { Context } from "../../Context/Context";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  // maxHeight: "100%",
  maxHeight: 200,
});

export default function ComplexGrid({ product }) {
  // const { cart } = React.useContext(Context);
  ///Showing Button on Hover

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Paper
      sx={{
        marginLeft: 2,
        p: 2,
        width: "227px",
        maxHeight: 284,
        flexGrow: { xs: 1, md: "none" },
        flexWrap: "wrap",
        backgroundColor: "#F5F5F5",
        border: "1px solid #EDEDED",

        borderRadius: "16px",
      }}
    >
      <Grid container spacing={2} direction={"column"}>
        <Grid item container justifyContent={"center"}>
          <ButtonBase
            disableRipple
            sx={{
              width: 150,
              height: 188,

              // border: "3px solid black",
              display: "flex",
              justifyContent: "center !important",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                position: "relative",
                transition: "background-color 0.9s, transform 0.9s",
                color: isHovered ? "black" : "transparent",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            >
              <Img alt="complex" src={product.image} />
              {isHovered && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <AddToCartButton product={product} />
                </div>
              )}
            </div>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {
                  product.title.split(" ")[0] // Extract the first word from the title
                }
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  fontFamily: "Inter",
                  fontsize: "16px",
                  fontWeight: "700",
                  lineHeight: "18px",
                }}
              >
                ${product.price}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary"></Typography> */}
              <Rating name="read-only" value={product.rating.rate} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
