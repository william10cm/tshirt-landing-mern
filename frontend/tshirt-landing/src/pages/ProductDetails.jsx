import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails({ onAdd }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
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
      <div style={styles.wrap}>
        <p style={{ opacity: 0.75 }}>Loading...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div style={styles.wrap}>
        <Link to="/" style={styles.backLink}>← Back</Link>
        <p style={{ color: "crimson" }}>{error || "Product not found."}</p>
      </div>
    );
  }

  return (
    <div style={styles.wrap}>
      <Link to="/" style={styles.backLink}>← Back</Link>

      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.img} />

        <div style={styles.info}>
          <h1 style={{ marginTop: 0 }}>{product.name}</h1>

          <p style={{ opacity: 0.75, lineHeight: 1.5 }}>
            {product.description || "No description yet."}
          </p>

          <div style={styles.row}>
            <div style={styles.price}>${Number(product.price).toFixed(2)}</div>
            <button style={styles.btn} onClick={() => onAdd(product)}>
              Add to cart
            </button>
          </div>

          {/* Optional extra fields */}
          {product.category && (
            <div style={{ marginTop: 12, opacity: 0.75 }}>
              Category: {product.category}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: { maxWidth: 1000, margin: "0 auto", padding: 22 },
  backLink: { textDecoration: "none", color: "inherit", opacity: 0.8 },
  card: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
    marginTop: 14,
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 16,
    padding: 16
  },
  img: { width: "100%", height: 420, objectFit: "cover", borderRadius: 14 },
  info: { padding: 6 },
  row: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 },
  price: { fontSize: 22, fontWeight: 900 },
  btn: {
    border: "none",
    background: "#111",
    color: "#fff",
    padding: "12px 14px",
    borderRadius: 12,
    cursor: "pointer"
  }
};
