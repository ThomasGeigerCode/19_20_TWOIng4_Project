import React from 'react';
import './card-style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Cardform = props => {
  return(
    <div className="card text-center">
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Rechercher un magasin</Form.Label>
        <Form.Control type="email" placeholder="Entrez le nom du magasin" />
        <Form.Text className="text-muted">
          Les magasins sans artilces n'apparaissent pas dans la recherche.
        </Form.Text>
        </Form.Group>
        <Form.Group>
        <Button variant="primary" type="submit">
          Rechercher
        </Button>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Rechercher un vendeur</Form.Label>
          <Form.Control type="email" placeholder="Entrez le nom du vendeur" />
          <Form.Text className="text-muted">
            Tous nos nos vendeurs sont certifiés.
          </Form.Text>
        </Form.Group>
        <Button variant="danger" type="submit">
          Rechercher
        </Button>
      </Form>
    </div>
  );
}

export default Cardform;
