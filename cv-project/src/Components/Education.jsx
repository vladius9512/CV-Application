import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Education = (props) => {
    const [isShown, setIsShown] = useState(false);
    const {
        handleEducationTitleChange,
        handleEducationNameChange,
        handleEducationDateFromChange,
        handleEducationDateToChange,
        educationElement,
        onSubmitEducation,
    } = props;

    const handleClick = () => {
        setIsShown((current) => !current);
    };
    return (
        <div className="education-wrapper">
            <button
                type="button"
                className="showEducation"
                onClick={handleClick}
            >
                Add Education Element
            </button>
            {isShown && (
                <section className="education">
                    <label>Title</label>
                    <input
                        type="text"
                        id="educationTitle"
                        onChange={handleEducationTitleChange}
                    />
                    <label>School Name</label>
                    <input
                        type="text"
                        id="educationNameInput"
                        onChange={handleEducationNameChange}
                    />
                    <label>From</label>
                    <DatePicker
                        showIcon
                        selected={educationElement.period.from}
                        onChange={(date) => handleEducationDateFromChange(date)}
                    />
                    <label>Until</label>
                    <DatePicker
                        showIcon
                        selected={educationElement.period.to}
                        onChange={(date) => handleEducationDateToChange(date)}
                    />
                    <button
                        type="submit"
                        className="addEducation"
                        onClick={handleClick}
                        onClickCapture={onSubmitEducation}
                    >
                        Submit education
                    </button>
                </section>
            )}
        </div>
    );
};

export default Education;
