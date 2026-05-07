const CART_KEY = "tshirt_cart_v1";

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCartCount(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

export function addToCart(cart, product) {
  const existing = cart.find((i) => i._id === product._id);
  if (existing) {
    return cart.map((i) =>
      i._id === product._id ? { ...i, qty: i.qty + 1 } : i
    );
  }
  return [
    ...cart,
    {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    }
  ];
}

export function removeOne(cart, productId) {
  return cart
    .map((i) => (i._id === productId ? { ...i, qty: i.qty - 1 } : i))
    .filter((i) => i.qty > 0);
}

export function removeItem(cart, productId) {
  return cart.filter((i) => i._id !== productId);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
