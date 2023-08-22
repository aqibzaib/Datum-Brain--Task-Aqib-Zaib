import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const Context = createContext();

//fetching Porducts

function ContextProvider(props) {
  const [products, setProducts] = useState([]);
  const api = axios.create({
    baseURL: "https://fakestoreapi.com",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //adding item to vart
  const [cart, setCart] = useState([]);
  // ... other code

  // Adding item to cart
  const addToCart = (id) => {
    const itemToAdd = products.find((product) => product.id === id);
    if (itemToAdd) {
      setCart((prevCart) => [...prevCart, itemToAdd]);
    }
  };

  // Storing cart data in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Context.Provider
      value={{
        products: products,
        addToCart: addToCart,
        cart: cart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
