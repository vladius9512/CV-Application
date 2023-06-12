import React from "react";
import { useState } from "react";

const Education = (props) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = (e) => {
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
                    <input type="text" id="educationTitle" />
                    <label>School Name</label>
                    <input type="text" id="educationNameInput" />
                    <label>Period</label>
                    <input type="text" id="educationPeriodInput" />
                    <button type="submit" className="addEducation">
                        Submit education
                    </button>
                </section>
            )}
        </div>
    );
};

export default Education;
