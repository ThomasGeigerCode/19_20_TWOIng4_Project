import React from "react";
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import buy from "./images/icons8-buy-48.png";
import profil from "./images/icons8-profile-48.png";
import sell from "./images/icons8-sell-48.png";
import save from "./images/icons8-heart-48.png";
import help from "./images/icons8-help-48.png";
import graph from "./images/icons8-graph-48.png";

export default class Menu extends React.Component {
    render() {
        return (
          <div>
            <button><img src={profil} /></button>

            <button><img src={sell} /></button>

            <button><img src={buy} /></button>

            <button><img src={graph} /></button>

            <button><img src={save} /></button>

            <button><img src={help} /></button>
          </div>
        )
    }
}
