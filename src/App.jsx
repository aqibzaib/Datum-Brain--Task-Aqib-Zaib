import "./App.css";
import ComplexGrid from "./components/Home/ComplexGrid";
import ProductList from "./components/Home/ProductList";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ComplexGrid /> */}
      <ProductList />
    </div>
  );
}

export default App;
