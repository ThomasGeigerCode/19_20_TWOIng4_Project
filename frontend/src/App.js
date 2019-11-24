import React from 'react';
import Graphique from './graphiques.js'
import Ventes from './ventes.js'
import Achats from './achats.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>

        <Ventes />

        <Achats />

      </div>
      <div>

        <Graphique />
        
      </div>
    </div>
  );
}

export default App;
