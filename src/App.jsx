import "./App.css";

import ProductList from "./components/Home/ProductList";
import Navbar from "./components/Navbar/navbar";
// import TestBar from "./components/Navbar/TestBar";
function App() {
  return (
    <div>
      {/* <TestBar /> */}
      <Navbar />

      <ProductList />
    </div>
  );
}

export default App;
