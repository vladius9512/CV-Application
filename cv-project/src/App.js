import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import BasicInformation from "./Components/BasicInformation";
import Education from "./Components/Education";
import Overview from "./Components/Overview";

class App extends Component {
    constructor() {
        super();

        this.state = {
            basicInformation: {
                name: "",
                phoneNumber: "",
                email: "",
                summary: "",
            },
            educationElement: {
                title: "",
                name: "",
                period: "",
                id: uniqid(),
            },
            educationArray: [],
        };
    }
    handleBasicInformationNameChange = (e) => {
        this.setState((prevState) => ({
            basicInformation: {
                ...prevState.basicInformation,
                name: e.target.value,
            },
        }));
    };
    handleBasicInformationPhoneChange = (e) => {
        this.setState((prevState) => ({
            basicInformation: {
                ...prevState.basicInformation,
                phoneNumber: e.target.value,
            },
        }));
    };
    handleBasicInformationEmailChange = (e) => {
        this.setState((prevState) => ({
            basicInformation: {
                ...prevState.basicInformation,
                email: e.target.value,
            },
        }));
    };
    handleBasicInformationSummaryChange = (e) => {
        this.setState((prevState) => ({
            basicInformation: {
                ...prevState.basicInformation,
                summary: e.target.value,
            },
        }));
    };
    render() {
        const { basicInformation, educationArray } = this.state;
        return (
            <div className="App">
                <BasicInformation
                    handleBasicInformationNameChange={
                        this.handleBasicInformationNameChange
                    }
                    handleBasicInformationEmailChange={
                        this.handleBasicInformationEmailChange
                    }
                    handleBasicInformationPhoneChange={
                        this.handleBasicInformationPhoneChange
                    }
                    handleBasicInformationSummaryChange={
                        this.handleBasicInformationSummaryChange
                    }
                />
                <Education />
                <Overview
                    basicInformation={basicInformation}
                    educationArray={educationArray}
                />
            </div>
        );
    }
}

export default App;
