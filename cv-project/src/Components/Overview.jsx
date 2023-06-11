import React from "react";

const Overview = (props) => {
    const { basicInformation, educationArray } = props;

    return (
        <section>
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
        </section>
    );
};

export default Overview;
