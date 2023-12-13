import React, { useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Chart/Chart";
import "./sentiment.scss";
import data from '../../Components/Data/data';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Sentiment = () => {
    const [selectedXAxis, setSelectedXAxis] = useState('day');
    const [selectedYAxis, setSelectedYAxis] = useState('avg_ups');
    const [selectedDataset, setSelectedDataset] = useState('reddit_metrics');

    const handleChangeDataset = (event) => {
        setSelectedDataset(event.target.value);
    };

    const handleChangeXAxis = (event) => {
        setSelectedXAxis(event.target.value);
    };

    const handleChangeYAxis = (event) => {
        setSelectedYAxis(event.target.value);
    };

    const dataset = data[selectedDataset];

    return (
        <div className="political">
            <Sidebar />
            <div className="Container">
                <Navbar />
                <div className='head-political'>
                   Sentiment Analysis
                </div>
                <div className="dropdown-container-top">
                  <Box sx={{ display: 'flex', gap: '10px'}} className='box-field'>
                  <Paper elevation={3} sx={{width:'400px'}} className='paper-field'> 
                            <div className="dropdown">
                                <label>Select Dataset:</label>
                                <select value={selectedDataset} onChange={handleChangeDataset}>
                                    {Object.keys(data).map((datasetKey, index) => (
                                        <option key={index} value={datasetKey}>
                                            {datasetKey}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </Paper>
                  </Box>
                </div>
                <div className="dropdown-container">
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <Paper elevation={3} sx={{width:'400px'}} className='paper-field'>
                            <div className="dropdown">
                                <label>Select X-Axis:</label>
                                <select value={selectedXAxis} onChange={handleChangeXAxis}>
                                    {Object.keys(dataset[0]).map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </Paper>
                        <Paper elevation={3} sx={{width:'400px'}} className='paper-field'>
                            <div className="dropdown">
                                <label>Select Y-Axis:</label>
                                <select value={selectedYAxis} onChange={handleChangeYAxis}>
                                    {Object.keys(dataset[0]).map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </Paper>
                    </Box>
                </div>
                <div className="charts">
                    <Chart
                        title={`Last 6 months ${selectedDataset} analysis`}
                        aspect={3 / 1}
                        xAxisKey={selectedXAxis}
                        yAxisKey={selectedYAxis}
                        dataSets={selectedDataset}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sentiment;
