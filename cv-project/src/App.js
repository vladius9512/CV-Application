import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import BasicInformation from "./Components/BasicInformation";
import Education from "./Components/Education";
import Overview from "./Components/Overview";
import Experience from "./Components/Experience";

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
            experienceElement: {
                position: "",
                companyName: "",
                period: "",
                achievments: "",
                id: uniqid(),
            },
            experienceArray: [],
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
    handleEducationTitleChange = (e) => {
        this.setState((prevState) => ({
            educationElement: {
                ...prevState.educationElement,
                title: e.target.value,
            },
        }));
    };
    handleEducationNameChange = (e) => {
        this.setState((prevState) => ({
            educationElement: {
                ...prevState.educationElement,
                name: e.target.value,
            },
        }));
    };
    onSubmitEducation = (e) => {
        e.preventDefault();
        this.setState({
            educationArray: this.state.educationArray.concat(
                this.state.educationElement
            ),
            educationElement: {
                title: "",
                name: "",
                period: "",
                id: uniqid(),
            },
        });
    };
    render() {
        const { basicInformation, educationArray, educationElement } =
            this.state;
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
                <Education
                    handleEducationTitleChange={this.handleEducationTitleChange}
                    handleEducationNameChange={this.handleEducationNameChange}
                    onSubmitEducation={this.onSubmitEducation}
                    educationArray={educationArray}
                    educationElement={educationElement}
                />
                <Experience />
                <Overview
                    basicInformation={basicInformation}
                    educationArray={educationArray}
                />
            </div>
        );
    }
}

export default App;
