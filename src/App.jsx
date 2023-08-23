import { Box, Container } from "@mui/material";
import "./App.css";

import ProductList from "./components/Home/ProductList";
import Navbar from "./components/Navbar/navbar";
// import TestBar from "./components/Navbar/TestBar";
function App() {
  return (
    <div style={{ width: "100vw" }}>
      <Navbar />
      <Box sx={{ backgroundColor: "#e1e1e1" }}>
        <Container>
          <ProductList />
        </Container>
      </Box>
    </div>
  );
}

export default App;
