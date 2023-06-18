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
                position: "",
                companyName: "",
                period: "",
                achievments: "",
                id: uniqid(),
            },
        });
    };
    onSubmitExperience = (e) => {
        e.preventDefault();
        this.setState({
            experienceArray: this.state.experienceArray.concat(
                this.state.experienceElement
            ),
            experienceElement: {
                title: "",
                name: "",
                period: "",
                id: uniqid(),
            },
        });
    };
    handleExperiencePositionChange = (e) => {
        this.setState((prevState) => ({
            experienceElement: {
                ...prevState.experienceElement,
                position: e.target.value,
            },
        }));
    };
    handleExperienceCompanyChange = (e) => {
        this.setState((prevState) => ({
            experienceElement: {
                ...prevState.experienceElement,
                companyName: e.target.value,
            },
        }));
    };
    handleExperienceAchievmentsChange = (e) => {
        this.setState((prevState) => ({
            experienceElement: {
                ...prevState.experienceElement,
                achievments: e.target.value,
            },
        }));
    };
    handleRemoveEducation = (id) => {
        const newList = this.state.educationArray.filter(
            (item) => item.id !== id
        );
        this.setState({
            educationArray: newList,
        });
    };
    handleRemoveExperience = (id) => {
        const newList = this.state.experienceArray.filter(
            (item) => item.id !== id
        );
        this.setState({
            experienceArray: newList,
        });
    };
    render() {
        const { basicInformation, educationArray, experienceArray } =
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
                />
                <Experience
                    handleExperiencePositionChange={
                        this.handleExperiencePositionChange
                    }
                    handleExperienceCompanyChange={
                        this.handleExperienceCompanyChange
                    }
                    handleExperienceAchievmentsChange={
                        this.handleExperienceAchievmentsChange
                    }
                    onSubmitExperience={this.onSubmitExperience}
                />
                <Overview
                    basicInformation={basicInformation}
                    educationArray={educationArray}
                    experienceArray={experienceArray}
                    handleRemoveEducation={this.handleRemoveEducation}
                    handleRemoveExperience={this.handleRemoveExperience}
                />
            </div>
        );
    }
}

export default App;
