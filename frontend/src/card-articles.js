import React from 'react';
import './card-style.css';

const Cardarticles = props => {
  return(
    <div className="card text-center">
      <h4 className="card-title"></h4>
      <h4 className="card-title">Votre magasin</h4>
      <div className="overflow">
        <img src={props.img1} alt="image1" className="card-img-top articles"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">129€</h4>
        <p className="card-text text-secondary">
            Nike - double rotor
        </p>
        <a href="#" className="btn btn-outline-success">Voir</a>
      </div>
      <div className="overflow">
        <img src={props.img2} alt="image1" className="card-img-top articles"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">39.99€</h4>
        <p className="card-text text-secondary">
            Sweat Pull&Bear
        </p>
        <a href="#" className="btn btn-outline-success">Voir</a>
      </div>
      <div className="overflow">
        <img src={props.img3} alt="image1" className="card-img-top articles"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">6899€</h4>
        <p className="card-text text-secondary">
            Rolex Submariner Black
        </p>
        <a href="#" className="btn btn-outline-success">Voir</a>
      </div>
    </div>
  );
}

export default Cardarticles;
