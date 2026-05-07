import "./CartPage.css";

export default function CartPage({ cart, onAdd, onRemoveOne, onRemoveItem, onClear }) {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart-page-wrap">
      <h2 className="cart-page-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-page-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-page-list">
            {cart.map((item) => (
              <div key={item._id} className="cart-page-item">
                <img src={item.image} alt={item.name} className="cart-page-thumb" />
                <div className="cart-page-item-main">
                  <div className="cart-page-item-name">{item.name}</div>
                  <div className="cart-page-item-price">${Number(item.price).toFixed(2)}</div>

                  <div className="cart-page-qty-row">
                    <button className="cart-page-qty-btn" onClick={() => onRemoveOne(item._id)}>−</button>
                    <span className="cart-page-qty">{item.qty}</span>
                    <button className="cart-page-qty-btn" onClick={() => onAdd(item)}>+</button>

                    <button className="cart-page-remove-btn" onClick={() => onRemoveItem(item._id)}>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-page-item-total">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-page-footer">
            <div className="cart-page-total-row">
              <span className="cart-page-total-label">Subtotal</span>
              <span className="cart-page-total-value">${subtotal.toFixed(2)}</span>
            </div>

            <div className="cart-page-actions">
              <button className="cart-page-clear-btn" onClick={onClear}>Clear</button>
              <button
                className="cart-page-checkout-btn"
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
