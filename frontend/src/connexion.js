import React, {Component} from 'react'
import Card from './cards.js'
import imgpro from './images/profil.png';
import './card-style.css';

class Connexion extends Component {
  render() {
    return (
    <div>
      <a href="./connexion.js" className="btn btn-outline-success">Connexion</a>
    </div>
    );
  }
}

export default Connexion;
