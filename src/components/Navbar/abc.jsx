import React from "react";

export default function abc() {
  return (
    <div>
  
    </div>
  );
}
///////////////////////////////////
<Grid item sm={4} xs={12}>
            <ItemContainer sx={{ backgroundColor: "#F3F9FB" }}>
              <Menu />
              <SearchBar sx={{ border: "3px solid blue" }} />
            </ItemContainer>
          </Grid>
          <Grid item sm={4} xs={0}>
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