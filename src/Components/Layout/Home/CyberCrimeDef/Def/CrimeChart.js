import React, { PureComponent } from 'react';
import { AreaChart, Area, BarChart, Legend, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data =[
  {year:'2015', cases:'11592'},
  {year:'2016', cases:'12317'},
  {year:'2017', cases:'21796'},
  {year:'2018', cases:'28248'},
  {year:'2019', cases:'44546'},
  {year:'2020', cases:'61028'},
]
// 2020 61028
// 2019 44546
// 2018 28248
// 2017 21796
// 2016 12317
// 2015 11592
// 2014 9622
// 2013 5693
// 2012 2876
// 2011 1791
// 2010 966
// 2009 420
// 2008 288

export default class Example extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>          
          <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="year" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="cases" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
