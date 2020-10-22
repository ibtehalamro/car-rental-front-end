import React from 'react';

const DarkCard = ({title, subtitle}) => {
    return (
        <div className="dark-card">
            <h3 className="title">{title}</h3>
            <h4 className={"sub-title"}>{subtitle}</h4>
        </div>
    );
};

export default DarkCard;