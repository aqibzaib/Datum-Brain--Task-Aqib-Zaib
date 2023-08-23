import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

function ContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const api = axios.create({
    baseURL: "https://fakestoreapi.com",
  });

  useEffect(() => {
    fetchProducts();
    initializeCartFromLocalStorage();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const initializeCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  };

  const addToCart = (id) => {
    const itemToAdd = products.find((product) => product.id === id);
    if (itemToAdd) {
      setCart((prevCart) => [...prevCart, itemToAdd]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filterProducts = () => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearchQuery = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearchQuery;
    });
  };

  return (
    <Context.Provider
      value={{
        products: filterProducts(),
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        cart: cart,
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
