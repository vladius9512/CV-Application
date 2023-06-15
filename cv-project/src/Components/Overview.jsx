import React from "react";

const Overview = (props) => {
    const { basicInformation, educationArray, experienceArray } = props;

    return (
        <section className="overview">
            <div className="CV-Name">
                <p>Name:{basicInformation.name}</p>
            </div>
            <div className="CV-Phone">
                <p>Phone number:{basicInformation.phoneNumber}</p>
            </div>
            <div className="CV-Email">
                <p>Email:{basicInformation.email}</p>
            </div>
            <div className="CV-Summary">
                <p>Summary:{basicInformation.summary}</p>
            </div>
            <div className="education-container">
                {educationArray.map((elem) => {
                    return (
                        <div className="schoolElement" key={elem.id}>
                            <div className="CV-educationTitle">
                                Title: {elem.title}
                            </div>
                            <div className="CV-educationSchool">
                                Institute Name: {elem.name}
                            </div>
                            <div className="CV-educationPeriod">
                                Period: {elem.period}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="experience-container">
                {experienceArray.map((elem) => {
                    return (
                        <div className="experienceElement" key={elem.id}>
                            <div className="CV-experiencePosition">
                                Position: {elem.position}
                            </div>
                            <div className="CV-experienceCompany">
                                Company Name: {elem.companyName}
                            </div>
                            <div className="CV-experiencePeriod">
                                Period: {elem.period}
                            </div>
                            <div className="CV-experienceAchievment">
                                Achievments: {elem.achievments}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Overview;
