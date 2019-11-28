import React, {Component} from 'react'
import Card from './cards.js'
import imgpro from './images/profil.png';
import img1 from './images/chaussure.jpg';
import img2 from './images/pull.jpg';
import img3 from './images/rolex.jpg';
import Cardventes from './card-ventes.js'
import Cardgraphique from './card-graphiques.js'
import Cardradar from './card-radar.js'
import Cardarticles from './card-articles.js'
import Cardform from './card-form.js'

class Cards extends Component {
  render() {
    return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Card imgsrc={imgpro} textbutton="Modifier mon profil" title="Jean Némar" description="Statut : En ligne"/>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardventes textbutton="Voir détails" title="Répartition des ventes" description="Total des derniers 31 jours en €"/>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardgraphique textbutton="Comparer" title="Ventes/Achats" description="pv = ventes / uv = achats en €"/>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardradar textbutton="Voir détails" title="Répartition des acheteurs" description="Total des ventes des derniers 31 jours"/>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardarticles img1={img1} img2={img2} img3={img3}/>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-6">
            <Cardform textbutton="Voir détails" title="Ventes/Achats" description="pv = ventes / uv = achats"/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Cards;
