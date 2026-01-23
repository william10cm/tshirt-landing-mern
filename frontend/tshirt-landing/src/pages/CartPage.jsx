export default function CartPage({ cart, onAdd, onRemoveOne, onRemoveItem, onClear }) {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={styles.wrap}>
      <h2 style={{ marginTop: 0 }}>Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ opacity: 0.7 }}>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.list}>
            {cart.map((item) => (
              <div key={item._id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.thumb} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800 }}>{item.name}</div>
                  <div style={{ opacity: 0.75 }}>${Number(item.price).toFixed(2)}</div>

                  <div style={styles.qtyRow}>
                    <button style={styles.qtyBtn} onClick={() => onRemoveOne(item._id)}>−</button>
                    <span style={{ minWidth: 24, textAlign: "center" }}>{item.qty}</span>
                    <button style={styles.qtyBtn} onClick={() => onAdd(item)}>+</button>

                    <button style={styles.removeBtn} onClick={() => onRemoveItem(item._id)}>
                      Remove
                    </button>
                  </div>
                </div>

                <div style={{ fontWeight: 800 }}>
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.footer}>
            <div style={styles.totalRow}>
              <span style={{ fontWeight: 800 }}>Subtotal</span>
              <span style={{ fontWeight: 800 }}>${subtotal.toFixed(2)}</span>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button style={styles.clearBtn} onClick={onClear}>Clear</button>
              <button
                style={styles.checkoutBtn}
                onClick={() => alert("Next: checkout + payments later")}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  wrap: { maxWidth: 900, margin: "0 auto", padding: "22px" },
  list: { display: "flex", flexDirection: "column", gap: 10 },
  item: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    padding: 12,
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 14
  },
  thumb: { width: 74, height: 74, objectFit: "cover", borderRadius: 12 },
  qtyRow: { display: "flex", alignItems: "center", gap: 8, marginTop: 8 },
  qtyBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    border: "1px solid #eee",
    background: "#fff",
    cursor: "pointer"
  },
  removeBtn: {
    marginLeft: "auto",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    opacity: 0.75
  },
  footer: { marginTop: 14, paddingTop: 14, borderTop: "1px solid #eee" },
  totalRow: { display: "flex", justifyContent: "space-between", marginBottom: 12 },
  clearBtn: {
    flex: 1,
    border: "1px solid #eee",
    background: "#fff",
    padding: "12px 12px",
    borderRadius: 12,
    cursor: "pointer"
  },
  checkoutBtn: {
    flex: 1,
    border: "none",
    background: "#111",
    color: "#fff",
    padding: "12px 12px",
    borderRadius: 12,
    cursor: "pointer"
  }
};
