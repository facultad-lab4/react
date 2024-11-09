// src/components/NavBar.js
import React from 'react';
import CartWidget from './cartWidget';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>E-Commerce</h1>
      <ul style={styles.menu}>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Productos</a></li>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: '#fff' },
  logo: { fontSize: '1.5rem' },
  menu: { listStyle: 'none', display: 'flex', gap: '20px' },
};

export default NavBar;
