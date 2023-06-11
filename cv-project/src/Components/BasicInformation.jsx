import React from "react";

const BasicInformation = (props) => {
    const {
        handleBasicInformationNameChange,
        handleBasicInformationPhoneChange,
        handleBasicInformationSummaryChange,
        handleBasicInformationEmailChange,
    } = props;
    return (
        <section className="basic-information">
            <label>Name</label>
            <input
                type="text"
                id="nameInput"
                onChange={handleBasicInformationNameChange}
            />
            <label>Phone Number</label>
            <input
                type="tel"
                id="phoneInput"
                onChange={handleBasicInformationPhoneChange}
            />
            <label>Email</label>
            <input
                type="email"
                id="emailInput"
                onChange={handleBasicInformationEmailChange}
            />
            <label>Summary</label>
            <textarea
                type="text"
                id="summaryInput"
                onChange={handleBasicInformationSummaryChange}
            />
        </section>
    );
};

export default BasicInformation;
