import React from 'react'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import { Line } from 'react-chartjs-2'
import gradient from 'chartjs-plugin-gradient';

export default function LineChart(props) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        LineElement,
        PointElement
    )

    ChartJS.register(gradient);
    
    const LineChart = () => {
        var data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
           datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                borderWidth: 3,
                gradient: {
                    backgroundColor: {
                      axis: 'y',
                      colors: {
                        0: 'rgb(4, 146, 200)',
                        100: 'rgba(2, 215, 126)'
                      }
                    },
                    borderColor: {
                      axis: 'x',
                      colors: {
                        0: 'rgb(4, 146, 200)',
                        100: 'rgba(2, 215, 126)'
                        
                      }
                    }
                }
                
            }]
        }
        var options= {
            animations: {
                tension: {
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: false
                }
            },
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            legend: {
                labels: {
                    fontSize: 26
                }
            }
        }
    
    
      return (

          <Line
              data={props.data}
              height={props.height}
              options = {props.height}
          />
      )
      
    }; 
};
