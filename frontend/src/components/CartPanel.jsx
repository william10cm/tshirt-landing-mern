import "./CartPanel.css";

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
    <div className="cart-panel-backdrop" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-panel-header">
          <h3 className="cart-panel-title">Your Cart</h3>
          <button className="cart-panel-icon-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="cart-panel-empty">Cart is empty.</p>
        ) : (
          <>
            <div className="cart-panel-list">
              {cart.map((item) => (
                <div key={item._id} className="cart-panel-item">
                  <img src={item.image} alt={item.name} className="cart-panel-thumb" />
                  <div className="cart-panel-item-main">
                    <div className="cart-panel-item-name">{item.name}</div>
                    <div className="cart-panel-item-price">
                      ${Number(item.price).toFixed(2)}
                    </div>

                    <div className="cart-panel-qty-row">
                      <button className="cart-panel-qty-btn" onClick={() => onRemoveOne(item._id)}>
                        −
                      </button>
                      <span className="cart-panel-qty">{item.qty}</span>
                      <button className="cart-panel-qty-btn" onClick={() => onAdd(item)}>
                        +
                      </button>

                      <button
                        className="cart-panel-remove-btn"
                        onClick={() => onRemoveItem(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-panel-item-total">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-panel-footer">
              <div className="cart-panel-total-row">
                <span className="cart-panel-total-label">Subtotal</span>
                <span className="cart-panel-total-value">${subtotal.toFixed(2)}</span>
              </div>

              <div className="cart-panel-actions">
                <button className="cart-panel-clear-btn" onClick={onClear}>
                  Clear
                </button>
                <button
                  className="cart-panel-checkout-btn"
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
