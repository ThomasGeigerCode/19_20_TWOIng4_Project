import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Janvier', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Février', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Mars', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Avril', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Mai', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Juin', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Juillet', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'Août', uv: 5000, pv: 4300, amt: 2100,
  },
  {
    name: 'Septembre', uv: 4300, pv: 6400, amt: 2100,
  },
  {
    name: 'Octobre', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'Novembre', uv: 349, pv: 4300, amt: 2100,
  },
  {
    name: 'Décembre', uv: 3490, pv: 2267, amt: 2100,
  },
];

export default class Graphique extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={1350}
        height={200}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
