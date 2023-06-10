import React from "react";

const BasicInformation = (props) => {
    return (
        <section className="basic-information">
            <label>Name</label>
            <input type="text" id="nameInput" />
            <label>Phone Number</label>
            <input type="tel" id="phoneInput" />
            <label>Email</label>
            <input type="email" id="emailInput" />
            <label>Summary</label>
            <textarea type="text" id="summaryInput" />
        </section>
    );
};

export default BasicInformation;
