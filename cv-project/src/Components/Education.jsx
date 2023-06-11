import React from "react";

const Education = (props) => {
    return (
        <section className="education">
            <label>Title</label>
            <input type="text" id="educationTitle" />
            <label>School Name</label>
            <input type="text" id="educationNameInput" />
            <label>Period</label>
            <input type="text" id="educationPeriodInput" />
        </section>
    );
};

export default Education;
