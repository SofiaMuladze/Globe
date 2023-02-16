import React from 'react';

import { useEffect, useState } from "react";
import axios from 'axios'

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

function Nitrous () {
    const [chartData, setChartData] = useState('');
    const [options, setOptions] = useState({});
    
    useEffect(() => {
        getNitrous();
    }, []);

    const getNitrous = async () => {
        let timeTemp = [];
        let temper = [];

        await axios
            .get(`https://global-warming.org/api/nitrous-oxide-api`)
            .then(res => {
                // console.log(res)
                // console.log(res)
                
                for (const dataObj of res.data.nitrous) {
                    timeTemp.push(parseFloat(dataObj.date));
                    temper.push(parseFloat(dataObj.average));
                }
                setChartData({
                    labels: timeTemp,
                    datasets: [{
                        label: "Nitrous",
                        data: temper,
                        borderWidth: 1,
                        pointRadius: 1,
                        gradient: {
                            borderColor: {
                            axis: 'x',
                                colors: {
                                    0: 'rgb(3, 74, 69)',
                                    2000: 'rgb(3, 178, 164)'
                                }
                            }
                        }
                    }]
                })
            })

            .catch(error => {
                console.log(error)
            })
            .finally(() => {
            });
            // console.log(timeTemp)

            const options = {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Nitrous',
                    },
                },
            };
    };

    if (!chartData) {
        return null
    }

    return <>
    <div className="chart-card">
        <div className="chart-title">
            <h1>NITROUS OXIDE</h1>
        </div>
        <div className="chart">
            <Line
                data={chartData}
                height = {130}
                options = {options}
            />
        </div>
        <div className="chart-info">
            <h4>Nitrous oxide is a gas that is produced by the combustion of fossil fuel and solid waste, 
                nitrogen-base fertilizers, sewage treatment plants, natural processes, and other agricultural and industrial activities.
                It is the third largest heat-trapping gas in the atmosphere and the biggest ozone-destroying compound emitted by human activities.
            </h4>
        </div>
    </div>
    </>
  
};

export default Nitrous


