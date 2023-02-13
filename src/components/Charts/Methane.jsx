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

function Methane () {
    const [chartData, setChartData] = useState('');
    const [options, setOptions] = useState({});
    
    useEffect(() => {
        getMethane();
    }, []);

    const getMethane = async () => {
        let timeTemp = [];
        let temper = [];

        await axios
            .get(`https://global-warming.org/api/methane-api`)
            .then(res => {
                // console.log(res.data.methane)
                
                for (const dataObj of res.data.methane) {
                    timeTemp.push(parseFloat(dataObj.date));
                    temper.push(parseFloat(dataObj.average));
                }
                setChartData({
                    labels: timeTemp,
                    datasets: [{
                        label: "Methane",
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
                        text: 'Methane',
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
            <h1>METHANE LEVELS</h1>
        </div>
        <div className="chart">
            <Line
                data={chartData}
                height = {130}
                options = {options}
            />
        </div>
        <div className="chart-info">
            <h3>Methane is a flammable gas formed by geological and biological processes.
                Some of the natural ones are leaks from natural gas systems and wetlands.
                50-65% of total global methane emissions come from human activities. These include livestock, agriculture, 
                oil and gas systems, waste from homes and businesses, landfills, and so on.
                Methane is a gas with a global warming potential several times stronger than of CO2. For more than 650,000 
                years, methane concentration in the atmosphere was between 350 – 800 ppb. From the beginning of the industrial revolution, human activities have increased this amount by around 150%.
            </h3>
        </div>
    </div>
    </>
  
};

export default Methane


