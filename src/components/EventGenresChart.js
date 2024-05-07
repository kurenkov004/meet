import React, { PureComponent, useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';


const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  useEffect(() => {
    setData(getData());
  }, [`${events}`])
  
  const getData = () => {
    const data = genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      };
    });
    return data;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {  //math to display percentages in pie slices
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#265466"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  const customColors = ['#C3DAE3', '#E3C3C9', '#E3E1C3', '#8E5661', '#265466'];

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}           
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={customColors[index % customColors.length]}/>
            ))
          }    
        </Pie>
        <Legend layout='horizontal' align='center' verticalAlign='bottom'/>
      </PieChart>
    </ResponsiveContainer>
  );

}

export default EventGenresChart;