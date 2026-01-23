import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  return (
    <div style={styles.card}>
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.image} alt={product.name} style={styles.img} />
      </Link>

      <div style={styles.body}>
        <h3 style={styles.title}>{product.name}</h3>
        <p style={styles.desc}>{product.description}</p>

        <div style={styles.row}>
          <span style={styles.price}>${Number(product.price).toFixed(2)}</span>
        </div>

        <div style={styles.actions}>
          <Link to={`/product/${product._id}`} style={styles.detailsBtn}>
            View details
          </Link>
          <button style={styles.addBtn} onClick={() => onAdd(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { border: "1px solid #eee", borderRadius: 12, overflow: "hidden", background: "#fff" },
  img: { width: "100%", height: 220, objectFit: "cover" },
  body: { padding: 14 },
  title: { margin: "0 0 8px" },
  desc: { margin: "0 0 12px", opacity: 0.7 },
  row: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: { fontWeight: 700 },
  actions: { display: "flex", gap: 10, marginTop: 12 },
  detailsBtn: {
    flex: 1,
    textAlign: "center",
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #eee",
    textDecoration: "none",
    color: "inherit"
  },
  addBtn: {
    flex: 1,
    border: "none",
    padding: "10px 12px",
    borderRadius: 10,
    cursor: "pointer",
    background: "#111",
    color: "#fff"
  }
};
