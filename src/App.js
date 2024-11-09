// src/App.js
import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
