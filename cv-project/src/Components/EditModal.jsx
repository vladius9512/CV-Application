import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditModal extends Component {
    constructor(props) {
        super();
        this.handleEditSubmit = props.handleEditSubmit;
        this.educationElementId = props.educationElementId;
        this.state = {
            titleInput: props.educationElem.title,
            schoolInput: props.educationElem.name,
            from: props.educationElem.period.from,
            to: props.educationElem.period.to,
        };
    }

    handleChangeTitle = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            titleInput: e.target.value,
        }));
    };
    handleChangeSchool = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            schoolInput: e.target.value,
        }));
    };
    handleFromChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            from: e,
        }));
    };
    handleToChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            to: e,
        }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.handleEditSubmit(this.state, this.educationElementId);
    };
    render() {
        return (
            <div className="editModal">
                <form type="submit" onSubmit={this.onSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        id="educationTitleEdit"
                        onChange={this.handleChangeTitle}
                        value={this.state.titleInput}
                        required
                        className="educationInput"
                    />
                    <label>School Name:</label>
                    <input
                        type="text"
                        id="educationSchoolEdit"
                        onChange={this.handleChangeSchool}
                        value={this.state.schoolInput}
                        required
                        className="educationInput"
                    />
                    <label>From:</label>
                    <DatePicker
                        showIcon
                        selected={this.state.from}
                        onChange={(date) => this.handleFromChange(date)}
                    />
                    <label>To:</label>
                    <DatePicker
                        showIcon
                        selected={this.state.to}
                        onChange={(date) => this.handleToChange(date)}
                    />
                    <button type="submit">Submit edit</button>
                </form>
            </div>
        );
    }
}

export default EditModal;
