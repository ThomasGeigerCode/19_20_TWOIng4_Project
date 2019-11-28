import React from 'react';
import './card-style.css';
import Radars from './radar.js'

const Cardradar = props => {
  return(
    <div className="card text-center">
      <div className="overflow">
        <Radars />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
            {props.description}
        </p>
        <a href="#" className="btn btn-outline-success">{props.textbutton}</a>
      </div>
    </div>
  );
}

export default Cardradar;
