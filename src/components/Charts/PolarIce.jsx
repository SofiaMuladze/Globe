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

function PolarIce () {
    const [chartData, setChartData] = useState('');
    const [options, setOptions] = useState({});
    
    useEffect(() => {
        getPolarIce();
    }, []);

    const getPolarIce = async () => {
        let timeTemp = [];
        let temper = [];
        let area = [];

        await axios
            .get(`https://global-warming.org/api/arctic-api`)
            .then(res => {
                // console.log(res.data.arcticData)
                
                for (const dataObj of res.data.arcticData) {
                    timeTemp.push(parseFloat(dataObj.year));
                    temper.push(parseFloat(dataObj.extent));
                    area.push(parseFloat(dataObj.area));

                }
                setChartData({
                    labels: timeTemp,
                    datasets: [
                        {
                        label: "Extent",
                        data: temper,
                        borderWidth: 1.5,
                        pointRadius: 2,
                        borderColor: 'rgb(3, 74, 69)',
                        },
                        {
                            label: "Area",
                            data: area,
                            borderWidth: 1.5,
                            pointRadius: 2,
                            borderColor: 'rgb(3, 178, 164)',
                        },      
                    ]
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
                        text: 'PolarIce',
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
            <h1>POLAR ICE</h1>
        </div>
        <div className="chart">
            <Line
                data={chartData}
                height = {130}
                options = {options}
            />
        </div>
        <div className="chart-info">
            <h3>The arctic is warming around twice as fast as global average.
                Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon. 
                From 1979 to 1996, we lost 2.2 – 3% of the arctic ice cover. From 2010 to present we are losing 12.85% per decade!
                Another consequence is permafrost thawing. This is a process in which large amounts of methane is released to the atmosphere, fueling more the process of global warming.
            </h3>
        </div>
    </div>
    </>
  
};

export default PolarIce


