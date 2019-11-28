import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';

const data01 = [
  { name: 'T-shirts', value: 1000 }, { name: 'Pantalons', value: 300 },
  { name: 'Pulls', value: 300 }, { name: 'Ensembles', value: 200 },
  { name: 'Chaussures', value: 278 }, { name: 'Accessoires', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

export default class Ventes extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
            <PieChart width={400} height={300}>
              <Pie dataKey="value" isAnimationActive={false} data={data01} cx={150} cy={200} outerRadius={70} fill="#8884d8" label />
              <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
              <Tooltip />
            </PieChart>
    );
  }
}
