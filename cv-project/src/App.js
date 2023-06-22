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
                period: { from: new Date(), to: new Date() },
                id: uniqid(),
            },
            educationArray: [],
            experienceElement: {
                position: "",
                companyName: "",
                period: { from: new Date(), to: new Date() },
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
    handleEducationDateFromChange = (e) => {
        this.setState((prevState) => ({
            educationElement: {
                ...prevState.educationElement,
                period: {
                    ...prevState.educationElement.period,
                    from: e,
                },
            },
        }));
    };
    handleEducationDateToChange = (e) => {
        this.setState((prevState) => ({
            educationElement: {
                ...prevState.educationElement,
                period: {
                    ...prevState.educationElement.period,
                    to: e,
                },
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
                period: { from: new Date(), to: new Date() },
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
                position: "",
                companyName: "",
                period: { from: new Date(), to: new Date() },
                achievments: "",
                id: uniqid(),
            },
        });
    };
    handleExperienceDateFromChange = (e) => {
        this.setState((prevState) => ({
            experienceElement: {
                ...prevState.experienceElement,
                period: {
                    ...prevState.experienceElement.period,
                    from: e,
                },
            },
        }));
    };
    handleExperienceDateToChange = (e) => {
        this.setState((prevState) => ({
            experienceElement: {
                ...prevState.experienceElement,
                period: {
                    ...prevState.experienceElement.period,
                    to: e,
                },
            },
        }));
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
        const {
            basicInformation,
            educationArray,
            experienceArray,
            educationElement,
            experienceElement,
        } = this.state;
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
                    handleEducationDateFromChange={
                        this.handleEducationDateFromChange
                    }
                    handleEducationDateToChange={
                        this.handleEducationDateToChange
                    }
                    educationElement={educationElement}
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
                    handleExperienceDateFromChange={
                        this.handleExperienceDateFromChange
                    }
                    handleExperienceDateToChange={
                        this.handleExperienceDateToChange
                    }
                    experienceElement={experienceElement}
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
