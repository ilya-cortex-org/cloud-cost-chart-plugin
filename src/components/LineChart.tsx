import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';

const LineChart: React.FC = () => {
  // Data for the graph
  const data: ChartData<'line'> = {
    labels: ['First Week', 'Second Week', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh Week', 'Eighth Week'],
    datasets: [
      {
        label: 'Costs Over Time',
        data: [2613, 1000, 1650, 3042, 515, 9767, 667, 823],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  // Options for the graph
  const options: ChartOptions<'line'> = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;