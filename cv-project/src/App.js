import "./styles/App.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import BasicInformation from "./Components/BasicInformation";
import Education from "./Components/Education";
import Overview from "./Components/Overview";
import Experience from "./Components/Experience";
import EditModal from "./Components/EditModal";

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
            editModal: { visible: false, educationElementId: null },
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
    findEducationElem = (id) => {
        return this.state.educationArray.find((element) => element.id === id);
    };
    openEditModal = (id) => {
        this.setState({
            editModal: {
                visible: true,
                educationElementId: id,
            },
        });
    };
    handleEditSubmit = (inputsValues, elemId) => {
        const newEducationArr = this.state.educationArray.map((item) => {
            console.log(item);
            if (item.id === elemId) {
                item.title = inputsValues.titleInput;
                item.name = inputsValues.schoolInput;
                item.period.from = inputsValues.from;
                item.period.to = inputsValues.to;
            }
            return item;
        });
        this.setState((prevState) => ({
            ...prevState,
            educationArray: newEducationArr,
            editModal: { visible: false, educationElementId: null },
        }));
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
                <div className="p-svg-container">
                    <p>Add your CV informations down here </p>
                    <svg
                        className="downArrow"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#2ec27e"
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        />
                    </svg>
                </div>
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
                <p>Education</p>
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
                <p>Experience</p>
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
                <div className="p-svg-container">
                    <p>This is a preview of your CV</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 384 512"
                    >
                        <path
                            fill="#2ec27e"
                            d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                        />
                    </svg>
                </div>
                <Overview
                    basicInformation={basicInformation}
                    educationArray={educationArray}
                    experienceArray={experienceArray}
                    handleRemoveEducation={this.handleRemoveEducation}
                    handleEdit={this.openEditModal}
                    handleRemoveExperience={this.handleRemoveExperience}
                />
                {this.state.editModal.visible && (
                    <EditModal
                        handleEditSubmit={this.handleEditSubmit}
                        educationElementId={
                            this.state.editModal.educationElementId
                        }
                        educationElem={this.findEducationElem(
                            this.state.editModal.educationElementId
                        )}
                    />
                )}
            </div>
        );
    }
}

export default App;
