import React from "react";

const Overview = (props) => {
    const { basicInformation } = props;

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
        </section>
    );
};

export default Overview;
