import React from "react";
import { useState } from "react";

const Experience = (props) => {
    const [isShown, setIsShown] = useState(false);

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
                    <input type="text" id="experiencePosition" />
                    <label>Company Name</label>
                    <input type="text" id="experienceCompanyName" />
                    <label>Period</label>
                    <input type="text" id="experiencePeriodInput" />
                    <label>Achievments/activities/responsibilities</label>
                    <textarea type="text" id="achievmentsInput"></textarea>
                    <button type="submit" className="addExperience">
                        Submit experience
                    </button>
                </section>
            )}
        </div>
    );
};

export default Experience;
