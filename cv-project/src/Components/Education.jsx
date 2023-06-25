import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/App.css";

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
    const onSubmit = (e) => {
        onSubmitEducation(e);
        handleClick();
    };
    return (
        <div className="education-wrapper">
            <button
                type="button"
                className="showEducation"
                onClick={handleClick}
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
                <section className="education">
                    <form onSubmit={onSubmit}>
                        <label>Title</label>
                        <input
                            type="text"
                            id="educationTitle"
                            onChange={handleEducationTitleChange}
                            required
                            placeholder="Level of education"
                            className="educationInput"
                        />
                        <label>School Name</label>
                        <input
                            type="text"
                            id="educationNameInput"
                            onChange={handleEducationNameChange}
                            required
                            className="educationInput"
                            placeholder="Institute name..."
                        />
                        <label>From</label>
                        <DatePicker
                            showIcon
                            selected={educationElement.period.from}
                            onChange={(date) =>
                                handleEducationDateFromChange(date)
                            }
                        />
                        <label>Until</label>
                        <DatePicker
                            showIcon
                            selected={educationElement.period.to}
                            onChange={(date) =>
                                handleEducationDateToChange(date)
                            }
                        />
                        <input
                            type="submit"
                            className="addEducation"
                            value="Submit education"
                        />
                    </form>
                </section>
            )}
        </div>
    );
};

export default Education;
