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
import './card-style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

class Cards extends Component {

  state = {
    users: []
  }

  compnentDidMount(){
    axios.get('https://localhost:3000/get-data').then(res => {
      console.log(res);
      this.setState({users: res.data});
    });

  }

  render() {
    return (
    <div>
    <Router>
      <div>
        <Link to="/" className="btn btn-outline-success">Home</Link>
        <Link to="/users" className="btn btn-outline-success">Admin</Link>
        <Switch>
          <Route path="/users">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
    );
  }
}

function Home() {
  return (<div>
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
        <Card imgsrc={imgpro} textbutton="Modifier mon profil" title="Jean Némar" description="Statut : Vendeur"/>
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
        <Cardradar textbutton="Voir détails" title="Vues du magasin" description="Total des vues des derniers 31 jours"/>
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

function Admin() {
  return (
    <div>
    <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4 col-xs-12 col-sm-6">
    <div className="card text-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Prénom</Form.Label>
        <Form.Control  placeholder="Entrez le prénom" name="prenom"/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control  placeholder="Entrez le nom" name="nom"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Statut</Form.Label>
          <Form.Control  placeholder="Entrez le statut" name="statut"/>
          <Form.Text className="text-muted">
            Vendeur ou Acheteur
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Individu certifié" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajouter aux utilisateurs
        </Button>
      </Form>
    </div>
    </div>
  </div>
</div>
<div className="container-fluid d-flex justify-content-center">
<div className="row">
  <div className="col-md-4 col-xs-12 col-sm-6">
<div className="card text-center">



  <div className="card-body text-dark">
    <h4 className="card-title">Prénom Nom</h4>
    <p className="card-text text-secondary">
        Statut :
    </p>
    <a href="#" className="btn btn-outline-success">Supprimer</a>
  </div>

</div>
</div>
</div>
</div>
</div>
);
}

export default Cards;
