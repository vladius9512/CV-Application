import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditModalExperience extends Component {
    constructor(props) {
        super();
        this.experienceElementId = props.experienceElementId;
        this.handleEditExperienceSubmit = props.handleEditExperienceSubmit;
        this.state = {
            positionInput: props.experienceElem.position,
            companyNameInput: props.experienceElem.companyName,
            from: props.experienceElem.period.from,
            to: props.experienceElem.period.to,
            achievmentsInput: props.experienceElem.achievments,
        };
    }

    handleChangePosition = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            positionInput: e.target.value,
        }));
    };
    handleChangeCompany = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            companyNameInput: e.target.value,
        }));
    };
    handleChangeFrom = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            from: e,
        }));
    };
    handleChangeTo = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            to: e,
        }));
    };
    handleChangeAchievments = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            achievmentsInput: e.target.value,
        }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.handleEditExperienceSubmit(this.state, this.experienceElementId);
    };
    render() {
        return (
            <div className="editModal">
                <form type="submit" onSubmit={this.onSubmit}>
                    <label>Position:</label>
                    <input
                        type="text"
                        id="experiencePositionEdit"
                        onChange={this.handleChangePosition}
                        value={this.state.positionInput}
                        required
                    />
                    <label>Company Name:</label>
                    <input
                        type="text"
                        id="experienceCompanyEdit"
                        onChange={this.handleChangeCompany}
                        value={this.state.companyNameInput}
                        required
                    />
                    <label>From:</label>
                    <DatePicker
                        showIcon
                        selected={this.state.from}
                        onChange={(date) => this.handleChangeFrom(date)}
                    />
                    <label>To:</label>
                    <DatePicker
                        showIcon
                        selected={this.state.to}
                        onChange={(date) => this.handleChangeTo(date)}
                    />
                    <label>Achievments:</label>
                    <textarea
                        type="text"
                        id="experienceAchievmentsEdit"
                        onChange={this.handleChangeAchievments}
                        value={this.state.achievmentsInput}
                        required
                    />
                    <button type="submit">Submit edit</button>
                </form>
            </div>
        );
    }
}

export default EditModalExperience;
