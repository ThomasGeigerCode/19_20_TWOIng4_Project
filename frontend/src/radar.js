import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'T-shirts', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Chaussures', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Accessoires', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Ensembles', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Pulls', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Pantalons', A: 65, B: 85, fullMark: 150,
  },
];

export default class Radars extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  render() {
    return (
      <RadarChart cx={150} cy={200} outerRadius={80} width={400} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
