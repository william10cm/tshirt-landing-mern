import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";


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
        const res = await axios.get("http://localhost:5000/api/products");
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
      <div style={styles.page}>
        <header style={styles.header}>
          <Link to="/" style={styles.brand}>TeeShop</Link>

          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/cart" style={styles.cartBtn}>
              🛒 Cart <span style={styles.badge}>{cartCount}</span>
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

        <footer style={styles.footer}>© {new Date().getFullYear()} TeeShop</footer>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  page: { fontFamily: "system-ui, Arial", background: "#fafafa", minHeight: "100vh" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 22px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0
  },
  brand: { fontWeight: 900, letterSpacing: 0.5, textDecoration: "none", color: "inherit" },
  nav: { display: "flex", gap: 10, alignItems: "center" },
  link: { textDecoration: "none", color: "inherit", opacity: 0.85 },
  cartBtn: {
    textDecoration: "none",
    color: "inherit",
    border: "1px solid #eee",
    background: "#fff",
    padding: "10px 12px",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  badge: {
    display: "inline-block",
    minWidth: 26,
    textAlign: "center",
    padding: "2px 8px",
    borderRadius: 999,
    background: "#111",
    color: "#fff",
    fontSize: 12
  },
  footer: { padding: 22, textAlign: "center", opacity: 0.6 }
};
