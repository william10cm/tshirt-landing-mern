import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home({ products, error, onAdd }) {
  return (
    <>
      <section className="home-hero">
        <h1 className="home-title">Premium T-Shirts for everyday comfort</h1>
        <p className="home-subtitle">Clean designs. Soft cotton. Fast shipping.</p>
        <a href="#products" className="home-cta">Shop now</a>
      </section>

      <section id="products" className="home-products-section">
        <h2 className="home-products-title">Featured Products</h2>
        {error && <p className="home-error">{error}</p>}

        <div className="home-grid">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </section>
    </>
  );
}
