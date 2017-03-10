import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const IssuesChart = (props) => {
  return (
    <div className="chart-wrapper">
      <BarChart
        width={600}
        height={300}
        data={props.data}
        margin={{top: 30}}
        maxBarSize={50}>
        <XAxis dataKey="name"/>
        <YAxis allowDecimals={false}/>
        <Tooltip/>
        <CartesianGrid strokeDasharray="" />
        <Bar
          dataKey="count"
          fill="rgb(236, 67, 50)"/>
      </BarChart>
      <label className="chart-legend">
        Issues Outstanding
      </label>
    </div>
  );
}

export default IssuesChart;
