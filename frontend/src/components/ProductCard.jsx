import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`} className="product-card-link">
        <img src={product.image} alt={product.name} className="product-card-img" />
      </Link>

      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>

        <div className="product-card-row">
          <span className="product-card-price">${Number(product.price).toFixed(2)}</span>
        </div>

        <div className="product-card-actions">
          <Link to={`/product/${product._id}`} className="product-card-details-btn">
            View details
          </Link>
          <button className="product-card-add-btn" onClick={() => onAdd(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
