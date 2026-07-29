import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

export default function ProductDetails({ onAdd }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
        setProduct(res.data);
      } catch (e) {
        setError("Could not load product details.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="product-details-wrap">
        <p className="product-details-loading">Loading...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-details-wrap">
        <Link to="/" className="product-details-back-link">← Back</Link>
        <p className="product-details-error">{error || "Product not found."}</p>
      </div>
    );
  }

  return (
    <div className="product-details-wrap">
      <Link to="/" className="product-details-back-link">← Back</Link>

      <div className="product-details-card">
        <img src={product.image} alt={product.name} className="product-details-img" />

        <div className="product-details-info">
          <h1 className="product-details-name">{product.name}</h1>

          <p className="product-details-description">
            {product.description || "No description yet."}
          </p>

          <div className="product-details-row">
            <div className="product-details-price">${Number(product.price).toFixed(2)}</div>
            <button className="product-details-btn" onClick={() => onAdd(product)}>
              Add to cart
            </button>
          </div>

          {product.category && (
            <div className="product-details-category">
              Category: {product.category}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
