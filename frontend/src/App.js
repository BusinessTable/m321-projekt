import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;