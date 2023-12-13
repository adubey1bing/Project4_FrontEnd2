// Chart.jsx

import React from 'react';
import "./chart.scss";
import data from '../Data/data';
import {
    AreaChart,
    XAxis,
    CartesianGrid,
    Tooltip,
    Area,
    ResponsiveContainer
} from 'recharts';
const Chart = ({ aspect, title, xAxisKey, yAxisKey , dataSets}) => {
    let chartData;
    // Conditionally set the chartData based on the dataSets prop
    if (dataSets === "reddit_metrics") {
        chartData = data.reddit_metrics;
    } else if (dataSets === "chan_metrics") {
        chartData = data.chan_metrics;
    }
    console.log(chartData);
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect} className="chartContainer">
                <AreaChart width={730} height={250} data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="crimson" stopOpacity={0.8} />
                            <stop offset="0%" stopColor="white" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3e98c7" stopOpacity={0.8} />
                            <stop offset="0%" stopColor="white" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={xAxisKey} stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Area type="monotone" dataKey={yAxisKey} stroke="crimson" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
