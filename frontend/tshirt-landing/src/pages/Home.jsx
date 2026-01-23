import ProductCard from "../components/ProductCard";

export default function Home({ products, error, onAdd }) {
  return (
    <>
      <section style={styles.hero}>
        <h1 style={styles.h1}>Premium T-Shirts for everyday comfort</h1>
        <p style={styles.p}>Clean designs. Soft cotton. Fast shipping.</p>
        <a href="#products" style={styles.cta}>Shop now</a>
      </section>

      <section id="products" style={styles.section}>
        <h2 style={styles.h2}>Featured Products</h2>
        {error && <p style={{ color: "crimson" }}>{error}</p>}

        <div style={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p._id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: { padding: "64px 22px", maxWidth: 1000, margin: "0 auto" },
  h1: { fontSize: 44, margin: "0 0 10px" },
  p: { fontSize: 18, margin: "0 0 18px", opacity: 0.75, maxWidth: 720 },
  cta: {
    display: "inline-block",
    padding: "12px 16px",
    borderRadius: 10,
    background: "#111",
    color: "#fff",
    textDecoration: "none"
  },
  section: { padding: "0 22px 60px", maxWidth: 1000, margin: "0 auto" },
  h2: { margin: "0 0 14px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }
};
