import React, {Component} from 'react'
import Card from './cards.js'
import img1 from './images/profil.png';
import Cardventes from './card-ventes.js'
import Cardgraphique from './card-graphiques.js'
import Cardradar from './card-radar.js'

class Cards extends Component {
  render() {
    return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Card imgsrc={img1} textbutton="Modifier Profil" title="Jean Némar" description="Statut : En ligne"/>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardventes textbutton="Voir détails" title="Ventes" description="Total des derniers 31 jours"/>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardgraphique textbutton="Comparer" title="Ventes/Achats" description="pv = ventes / uv = achats"/>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardradar textbutton="Voir détails" title="Achats" description="Total des derniers 31 jours"/>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardventes textbutton="Voir details" title="Ventes" description="Total des derniers 31 jours"/>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardgraphique textbutton="Voir détails" title="Ventes/Achats" description="pv = ventes / uv = achats"/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Cards;
