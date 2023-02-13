import React from 'react'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import { Line } from 'react-chartjs-2'
import gradient from 'chartjs-plugin-gradient';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)
ChartJS.register(gradient);

const BarChart = () => {
    const data= {
      type: 'line',
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
      datasets: [
        {
            label: "hello" ,
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            borderWidth: 3,
            fill: false,
            
            gradient: {
                borderColor: {
                  axis: 'x',
                  colors: {
                    0: 'rgb(4, 146, 200)',
                    100: 'rgba(2, 215, 126)'
                    
                  }
                }
            }
            
        }
      ]
    }
    var options= {
      plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 14
                }
            }
        }
    },
        // animations: {
        //     tension: {
        //       easing: 'linear',
        //       from: 1,
        //       to: 0,
        //       loop: false
        //     }
        // },
        // maintainAspectRatio: false,
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // },
            title: { text: "THICCNESS SCALE", display: true },

        legend: {
            labels: {
              display: true,
              color: 'rgba(2, 215, 126)',
                fontSize: 60
            }
        }
    }


  return <div>
         {/* <Line
            data={data}
            height={400}
            options = {options}
        /> */}

        <Line
            data={data}
            height={100}
            options = {options}
            
        />
        </div>
    
    };

    export default BarChart



    