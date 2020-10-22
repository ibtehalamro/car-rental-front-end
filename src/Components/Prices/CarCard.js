import React from 'react';

const CarCard = ({icon, title, subtitle}) => {
    return (
        <>
            <img className={'icon'} src={require(`../../assets/images/icons/${icon}.png`)} alt={'car'}/>
            {title === undefined ? <h3 className="title">Car Name</h3> : <h3 className="title">{title}</h3>}
            {subtitle === undefined ? <h3 className="sub-title">30$ per day</h3> :
                <h3 className="sub-title">{subtitle}</h3>}


        </>
    );
};

export default CarCard;