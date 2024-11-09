// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
  return (
    <div style={styles.cart}>
      🛒<span style={styles.cartCount}>3</span> {/* Número de items en el carrito */}
    </div>
  );
};

const styles = {
  cart: { fontSize: '1.5rem', cursor: 'pointer' },
  cartCount: { marginLeft: '8px', fontSize: '1rem', color: '#f0a500' },
};

export default CartWidget;
