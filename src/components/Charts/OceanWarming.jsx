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

function OceanWarming () {
    const [chartData, setChartData] = useState('');
    const [options, setOptions] = useState({});
    
    useEffect(() => {
        getOceanWarming();
    }, []);

    const getOceanWarming = async () => {
        let timeTemp = [];
        let temper = [];

        await axios
            .get(`https://global-warming.org/api/ocean-warming-api`)
            .then(res => {
                // console.log(res.data.result)
                
                // console.log(Object.values(res.data.result))
                
                for (const dataObj of Object.keys(res.data.result)) {
                    timeTemp.push(parseFloat(dataObj));
                }
                for (const dataObj of Object.values(res.data.result)) {
                    temper.push(parseFloat(dataObj));
                }
                console.log(timeTemp)

                setChartData({
                    labels: timeTemp,
                    datasets: [{
                        label: "Ocean Warming",
                        data: temper,
                        borderWidth: 1.5,
                        pointRadius: 2,
                        gradient: {
                            borderColor: {
                            axis: 'x',
                                colors: {
                                    0: 'rgb(3, 74, 69)',
                                    150: 'rgb(3, 178, 164)'
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
                        text: 'OceanWarming',
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
            <h1>OCEAN WARMING</h1>
        </div>
        <div className="chart">
            <Line
                data={chartData}
                height = {130}
                options = {options}
            />
        </div>
        <div className="chart-info">
            <h4>The Co2 we produce is absorbed and dissolved into the ocean, making it more acidic. 
                The ocean is also suffering from deoxygenation, due to contamination and global warming, making it less habitable for marine organism.
                The ocean modulates earth temperature. It takes up most of the excess heat that we humans produce, making it warmer, and as result,
                less able to absorb heat. Without the ocean temperature regulatory effect, the global average temperature would be around 50 degrees Celsius instead of 15.
            </h4>
        </div>
    </div>
    </>
  
};

export default OceanWarming


