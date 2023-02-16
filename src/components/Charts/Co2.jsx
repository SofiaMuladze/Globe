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

function Co2 () {
    const [chartData, setChartData] = useState('');
    const [options, setOptions] = useState({});
    
    useEffect(() => {
        getCo2();
    }, []);

    const getCo2 = async () => {
        let timeTemp = [];
        let temper = [];

        await axios
            .get(`https://global-warming.org/api/co2-api`)
            .then(res => {
                // console.log(res.data.co2)
                
                for (const dataObj of res.data.co2) {
                    timeTemp.push(parseFloat(dataObj.year));
                    temper.push(parseFloat(dataObj.cycle));
                }
                setChartData({
                    labels: timeTemp,
                    datasets: [{
                        label: "Co2",
                        data: temper,
                        borderWidth: 0.5,
                        pointRadius: 0.5,
                        gradient: {
                            borderColor: {
                            axis: 'x',
                                colors: {
                                    0: 'rgb(3, 74, 69)',
                                    3600: 'rgb(3, 178, 164)'
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
                        text: 'Co2',
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
            <h1>CO2</h1>
        </div>
        <div className="chart">
            <Line
                data={chartData}
                height = {130}
                options = {options}
            />
        </div>
        <div className="chart-info">
            <h4>For thousands of years, the natural concentration of CO2 in earth atmosphere was around 280 ppm.
                From the beginning of the industrial revolution, human activities like the burning of fossil fuels,
                deforestation, and livestock have increased this amount by more than 30%.
            </h4>
        </div>
    </div>
    </>
  
};

export default Co2


