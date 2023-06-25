import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/App.css";

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

    const onSubmit = (e) => {
        onSubmitExperience(e);
        handleClick();
    };

    return (
        <div className="experience-wrapper">
            <button
                type="button"
                onClick={handleClick}
                className="showExperience"
            >
                {isShown && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#AD380A"
                            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                        />
                    </svg>
                )}
                {!isShown && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#2ec27e"
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                        />
                    </svg>
                )}
            </button>
            {isShown && (
                <section className="experience">
                    <form onSubmit={onSubmit}>
                        <label>Position Title</label>
                        <input
                            type="text"
                            id="experiencePosition"
                            onChange={handleExperiencePositionChange}
                            required
                            placeholder="Customer support, CEO, etc"
                            className="experienceInput"
                        />
                        <label>Company Name</label>
                        <input
                            type="text"
                            id="experienceCompanyName"
                            onChange={handleExperienceCompanyChange}
                            required
                            placeholder="The name of the company..."
                            className="experienceInput"
                        />
                        <label>Achievments</label>
                        <textarea
                            type="text"
                            id="achievmentsInput"
                            onChange={handleExperienceAchievmentsChange}
                            placeholder="Top seller in the first quarter..."
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
                            onChange={(date) =>
                                handleExperienceDateToChange(date)
                            }
                        />
                        <input
                            type="submit"
                            className="addExperience"
                            value="Submit Experience"
                        />
                    </form>
                </section>
            )}
        </div>
    );
};

export default Experience;
