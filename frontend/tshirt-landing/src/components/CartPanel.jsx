export default function CartPanel({
  open,
  onClose,
  cart,
  onAdd,
  onRemoveOne,
  onRemoveItem,
  onClear
}) {
  if (!open) return null;

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div style={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3 style={{ margin: 0 }}>Your Cart</h3>
          <button style={styles.iconBtn} onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <p style={{ opacity: 0.7 }}>Cart is empty.</p>
        ) : (
          <>
            <div style={styles.list}>
              {cart.map((item) => (
                <div key={item._id} style={styles.item}>
                  <img src={item.image} alt={item.name} style={styles.thumb} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{item.name}</div>
                    <div style={{ opacity: 0.75 }}>
                      ${Number(item.price).toFixed(2)}
                    </div>

                    <div style={styles.qtyRow}>
                      <button style={styles.qtyBtn} onClick={() => onRemoveOne(item._id)}>
                        −
                      </button>
                      <span style={{ minWidth: 24, textAlign: "center" }}>{item.qty}</span>
                      <button style={styles.qtyBtn} onClick={() => onAdd(item)}>
                        +
                      </button>

                      <button
                        style={styles.removeBtn}
                        onClick={() => onRemoveItem(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700 }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.footer}>
              <div style={styles.totalRow}>
                <span style={{ fontWeight: 700 }}>Subtotal</span>
                <span style={{ fontWeight: 700 }}>${subtotal.toFixed(2)}</span>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button style={styles.clearBtn} onClick={onClear}>
                  Clear
                </button>
                <button
                  style={styles.checkoutBtn}
                  onClick={() => alert("Next step: Checkout page 😄")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 50
  },
  panel: {
    width: "min(420px, 92vw)",
    height: "100%",
    background: "white",
    padding: 16,
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    paddingBottom: 10,
    marginBottom: 10
  },
  iconBtn: {
    border: "none",
    background: "transparent",
    fontSize: 18,
    cursor: "pointer"
  },
  list: { overflow: "auto", paddingRight: 6 },
  item: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    borderBottom: "1px solid #f0f0f0",
    padding: "10px 0"
  },
  thumb: { width: 62, height: 62, objectFit: "cover", borderRadius: 10 },
  qtyRow: { display: "flex", alignItems: "center", gap: 8, marginTop: 8 },
  qtyBtn: {
    width: 32,
    height: 32,
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
  footer: {
    borderTop: "1px solid #eee",
    paddingTop: 12,
    marginTop: "auto"
  },
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
