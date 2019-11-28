import React from 'react';
import ResponsiveContainer from "react-responsive-widget";
import Graphique from './graphiques.js'
import Ventes from './ventes.js'
import Achats from './achats.js'
import Menu from './menu.js'
import logo from './logo.svg';
import './App.css';
import Background from './images/back.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`
};

function App() {
  return (
    <ResponsiveContainer>
      <div className="app-row bab">
        <div className="app-col-xs-1 app-col-md-1 app-col-sm-1 bb">

          <Menu />
        </div>
        <div className="app-col-xs-11 app-col-md-11 app-col-sm-11">
          <div className="app-row">
            <div className="app-col-xs-12 app-col-md-6 app-col-sm-6 bb">
              <Ventes />
            </div>
            <div className="app-col-xs-12 app-col-md-6 app-col-sm-6 bb">
              <Achats />
            </div>

          </div>
          <div class="bb">

            <Graphique />

          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}

export default App;
