import React from 'react';

import { useEffect, useState } from "react";
import axios from 'axios'
// import '../Css/ChartStyles.scss';
import '../Css/ChartStyles.scss'

import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend} from 'chart.js'
import { Line } from 'react-chartjs-2'
import gradient from 'chartjs-plugin-gradient';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
)
ChartJS.register(gradient);

function Temperature () {
    const [chartData, setChartData] = useState('');
    const [options, setOptions] = useState({});
    
    useEffect(() => {
        getTemperature();
    }, []);

    const getTemperature = async () => {
        let timeTemp = [];
        let temper = [];

        await axios
            .get(`https://global-warming.org/api/temperature-api`)
            .then(res => {
                // console.log(res.data.result)
                
                for (const dataObj of res.data.result) {
                    timeTemp.push(parseFloat(dataObj.time));
                    temper.push(parseFloat(dataObj.station));
                }
                setChartData({
                    labels: timeTemp,
                    datasets: [{
                        label: "Temperature",
                        data: temper,
                        borderWidth: 0.5,
                        pointRadius: 0.7,
                        gradient: {
                            borderColor: {
                            axis: 'x',
                                colors: {
                                    0: 'rgb(3, 74, 69)',
                                    3000: 'rgb(3, 178, 164)'
                                    
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
                    text: 'Chart.js Line Chart',
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
            <h1>TEMPERATURE</h1>
        </div>
        <div className="chart">
            <Line
                data={chartData}
                height = {130}
                options = {options}
            />
        </div>
        <div className="chart-info">
            <h4>The current global warming rate is not natural. 
                From 1880 to 1981 was (0.07°C / 0.13°F) per decade. 
                Since 1981 this rate has increased to (0.18°C / 0.32°F) Climate Change: Global Temperature.
                Some of the past sudden increase on global temperature present in this graph, correspond to 
                the Roman Warm Period and the Medieval Warm Period. These events were at regional and not global scale. 
                AR4 Climate Change 2007: The Physical Science Basis .
            </h4>
        </div>
    </div>
    </>
};

export default Temperature


