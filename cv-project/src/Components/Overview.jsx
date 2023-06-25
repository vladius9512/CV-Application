import React from "react";
import "../styles/App.css";

const Overview = (props) => {
    const {
        basicInformation,
        educationArray,
        experienceArray,
        handleRemoveEducation,
        handleRemoveExperience,
        handleEdit,
        handleEditExperience,
    } = props;

    return (
        <section className="overview">
            <div className="CV-Name">
                <p>I am {basicInformation.name}</p>
            </div>
            <div className="CV-Summary">
                <p>Me in a couple of phrases: {basicInformation.summary}</p>
            </div>
            <div className="education-container">
                <p>Education</p>
                {educationArray.map((elem) => {
                    return (
                        <div className="schoolElement" key={elem.id}>
                            <div className="line"></div>
                            <div className="CV-educationTitle">
                                Title: {elem.title}
                            </div>
                            <div className="CV-educationSchool">
                                Institute Name: {elem.name}
                            </div>
                            <div className="CV-educationPeriod">
                                From: {elem.period.from.getMonth() + 1}
                                {"/"}
                                {elem.period.from.getFullYear()} Until:
                                {elem.period.to.getMonth() + 1}
                                {"/"}
                                {elem.period.to.getFullYear()}
                            </div>
                            <button
                                type="button"
                                className="removeEducationElem"
                                onClick={() => handleRemoveEducation(elem.id)}
                            >
                                Remove
                            </button>
                            <button
                                type="button"
                                className="editEducationElem"
                                onClick={() => handleEdit(elem.id)}
                            >
                                Edit Element
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="experience-container">
                <p>Experience</p>
                {experienceArray.map((elem) => {
                    return (
                        <div className="experienceElement" key={elem.id}>
                            <div className="line"></div>
                            <div className="CV-experiencePosition">
                                Position: {elem.position}
                            </div>
                            <div className="CV-experienceCompany">
                                Company Name: {elem.companyName}
                            </div>
                            <div className="CV-experiencePeriod">
                                From: {elem.period.from.getMonth() + 1}
                                {"/"}
                                {elem.period.from.getFullYear()} Until:
                                {elem.period.to.getMonth() + 1}
                                {"/"}
                                {elem.period.to.getFullYear()}
                            </div>
                            <div className="CV-experienceAchievment">
                                Achievments: {elem.achievments}
                            </div>
                            <button
                                type="button"
                                className="removeExperienceElem"
                                onClick={() => handleRemoveExperience(elem.id)}
                            >
                                Remove
                            </button>
                            <button
                                type="button"
                                className="editExperienceElem"
                                onClick={() => handleEditExperience(elem.id)}
                            >
                                Edit Element
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="contact">
                <p>Get in touch with me by:</p>
                <div className="CV-Phone">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="#2ec27e"
                            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                        />
                    </svg>
                    <p>{basicInformation.phoneNumber}</p>
                </div>
                <div className="CV-Email">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="#2ec27e"
                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                        />
                    </svg>
                    <p>{basicInformation.email}</p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
