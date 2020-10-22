import React from 'react';
import './LargeSection.css'

const LargeSection = ({background}) => {
    return (
        <section className={"large-section"}>
        <img className={"large-image"} src={require("../../assets/images/icons/erik-mclean-QY8Qo3oVXKg-unsplash.png")} alt={"car"}/>
        <h1 className="title">Best Garage Ever</h1>
        </section>
    );
};

export default LargeSection;