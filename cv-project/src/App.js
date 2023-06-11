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
        this.setState({
            basicInformation: {
                name: e.target.value,
                phoneNumber: this.state.basicInformation.phoneNumber,
                email: this.state.basicInformation.email,
                summary: this.state.basicInformation.summary,
            },
        });
    };
    handleBasicInformationPhoneChange = (e) => {
        console.log(this.state);
        this.setState({
            basicInformation: {
                name: this.state.basicInformation.name,
                phoneNumber: e.target.value,
                email: this.state.basicInformation.email,
                summary: this.state.basicInformation.summary,
            },
        });
    };
    handleBasicInformationEmailChange = (e) => {
        this.setState({
            basicInformation: {
                name: this.state.basicInformation.name,
                phoneNumber: this.state.basicInformation.phoneNumber,
                email: e.target.value,
                summary: this.state.basicInformation.summary,
            },
        });
    };
    handleBasicInformationSummaryChange = (e) => {
        this.setState({
            basicInformation: {
                name: this.state.basicInformation.name,
                phoneNumber: this.state.basicInformation.phoneNumber,
                email: this.state.basicInformation.email,
                summary: e.target.value,
            },
        });
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
