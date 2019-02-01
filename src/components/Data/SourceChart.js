import React from 'react';
import { Polar } from 'react-chartjs-2';
import Tooltip from '../Tooltip/Tooltip'

const data = {
  datasets: [
    {
      data: [11, 16, 9, 14],
      backgroundColor: [
        'rgba(255,99,132,0.7)',
        'rgba(75,192,192,0.7)',
        'rgba(255,206,86,0.7)',
        'rgba(231,233,237,0.7)',
        'rgba(54,162,235,0.7)',
      ],
      label: 'Some Dataset!!!!',
    },
  ],
  labels: ['Global demand as a % of total jobs in category', 'US demand as a % of total jobs in category', 'Startup demand as a % of total jobs in category', 'Remote demand as a % of total jobs in category'],
};

const SourceChart = ({ loveFunction }) => {
  const hearts = loveFunction(4);
  let screenWidth = window.innerWidth;
  return (
    <div>
      <Tooltip tooltipText='This is a score out of 5 based on developer opinion, community size, downloads, google searches, and satisfaction surveys'>
        <h5 className="pr-1">Developer Love:</h5>
        <h5 className="pl-1">{hearts}</h5>
      </Tooltip>
      <Polar
        data={ data }
        height={ (screenWidth <= 1110 && screenWidth >= 520) ? (400) : (300) }
        width={ (screenWidth <= 1110 && screenWidth >= 520) ? (400) : (300) }
        options={ {
          maintainAspectRatio: true,
          responsive: false,
          legend: {
            position: true,
          },
          layout: {
            padding: 10,
          },
          tooltips: {
            callbacks: {
              title(tooltipItem, data) {
                return data.labels[tooltipItem[0].index];
              },
              label(tooltipItem, data) {
                return ` ${data.datasets[0].data[tooltipItem.index]} %`;
              },
            },
            backgroundColor: 'rgba(0,0,0,0.7)',
            titleFontSize: 12,
            titleFontColor: '#fff',
            bodyFontColor: '#fff',
            bodyFontSize: 12,
            displayColors: true,
            padding: 5,
          },
        } }
      />
    </div>);
}

export default SourceChart;