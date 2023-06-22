import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Experience = (props) => {
    const [isShown, setIsShown] = useState(false);

    const {
        handleExperiencePositionChange,
        handleExperienceCompanyChange,
        handleExperienceAchievmentsChange,
        handleExperienceDateFromChange,
        handleExperienceDateToChange,
        experienceElement,
        onSubmitExperience,
    } = props;

    const handleClick = (e) => {
        setIsShown((current) => !current);
    };

    return (
        <div className="experience-wrapper">
            <button
                type="button"
                onClick={handleClick}
                className="showExperience"
            >
                Add Experience Element
            </button>
            {isShown && (
                <section className="experience">
                    <label>Position Title</label>
                    <input
                        type="text"
                        id="experiencePosition"
                        onChange={handleExperiencePositionChange}
                    />
                    <label>Company Name</label>
                    <input
                        type="text"
                        id="experienceCompanyName"
                        onChange={handleExperienceCompanyChange}
                    />
                    <label>Period</label>
                    <input type="text" id="experiencePeriodInput" />
                    <label>Achievments/activities/responsibilities</label>
                    <textarea
                        type="text"
                        id="achievmentsInput"
                        onChange={handleExperienceAchievmentsChange}
                    ></textarea>
                    <label>From:</label>
                    <DatePicker
                        showIcon
                        selected={experienceElement.period.from}
                        onChange={(date) =>
                            handleExperienceDateFromChange(date)
                        }
                    />
                    <label>To:</label>
                    <DatePicker
                        showIcon
                        selected={experienceElement.period.to}
                        onChange={(date) => handleExperienceDateToChange(date)}
                    />
                    <button
                        type="submit"
                        className="addExperience"
                        onClick={handleClick}
                        onClickCapture={onSubmitExperience}
                    >
                        Submit experience
                    </button>
                </section>
            )}
        </div>
    );
};

export default Experience;
