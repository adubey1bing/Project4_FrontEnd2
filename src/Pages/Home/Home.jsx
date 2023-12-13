import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import "./home.scss"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
    'Create a Data Collection System',
    'Perform Analysis on the Collected Data',
    'Create a UI to Display the Analysis',
  ];


const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="Total Data from Reddit" value="7000"/>
                    <Widget type="Total Data from 4Chan" value="5000"/>
                </div>
                <div className="widgets">
                    <Widget type="details">
                    </Widget>
                </div>
                <div>
                <Stepper activeStep={2} alternativeLabel className="step-label">
                    {steps.map((label) => (
                    <Step key={label} className="step-label">
                        <StepLabel className="step-label">{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                </div>
            </div>
        </div>
    )
}


export default Home