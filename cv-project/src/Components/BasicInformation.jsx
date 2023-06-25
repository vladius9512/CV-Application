import React from "react";
import "../styles/App.css";

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
                className="basicInfoInput"
                onChange={handleBasicInformationNameChange}
                placeholder="Enter your name"
            />
            <label>Phone Number</label>
            <input
                type="tel"
                id="phoneInput"
                className="basicInfoInput"
                onChange={handleBasicInformationPhoneChange}
                placeholder="Enter your phone number"
            />
            <label>Email</label>
            <input
                type="email"
                id="emailInput"
                className="basicInfoInput"
                onChange={handleBasicInformationEmailChange}
                placeholder="Enter a valid email address"
            />
            <label>Summary</label>
            <textarea
                type="text"
                id="summaryInput"
                onChange={handleBasicInformationSummaryChange}
                placeholder="Tell us a little about yourself..."
            />
        </section>
    );
};

export default BasicInformation;
