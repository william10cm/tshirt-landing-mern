import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";


import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

import {
  addToCart,
  clearCart,
  getCart,
  getCartCount,
  removeItem,
  removeOne,
  saveCart
} from "./utils/cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const [cart, setCart] = useState(() => getCart());

  const cartCount = useMemo(() => getCartCount(cart), [cart]);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setProducts(res.data);
      } catch (e) {
        setError("Could not load products. Is backend running on port 5000?");
        console.error(e);
      }
    }
    load();
  }, []);

  function handleAdd(product) {
    setCart((prev) => addToCart(prev, product));
  }
  function handleRemoveOne(productId) {
    setCart((prev) => removeOne(prev, productId));
  }
  function handleRemoveItem(productId) {
    setCart((prev) => removeItem(prev, productId));
  }
  function handleClear() {
    setCart([]);
    clearCart();
  }

  return (
    <BrowserRouter>
      <div className="app-page">
        <header className="app-header">
          <Link to="/" className="app-brand">TeeShop</Link>

          <nav className="app-nav">
            <Link to="/" className="app-link">Home</Link>
            <Link to="/cart" className="app-cart-btn">
              🛒 Cart <span className="app-badge">{cartCount}</span>
            </Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={<Home products={products} error={error} onAdd={handleAdd} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                onAdd={handleAdd}
                onRemoveOne={handleRemoveOne}
                onRemoveItem={handleRemoveItem}
                onClear={handleClear}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetails onAdd={handleAdd} />}
          />
        </Routes>

        <footer className="app-footer">© {new Date().getFullYear()} TeeShop</footer>
      </div>
    </BrowserRouter>
  );
}
